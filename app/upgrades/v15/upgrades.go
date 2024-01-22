package v15

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/module"
	accountkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	vesting "github.com/cosmos/cosmos-sdk/x/auth/vesting/types"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	distributionkeeper "github.com/cosmos/cosmos-sdk/x/distribution/keeper"
	distributiontypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	slashingkeeper "github.com/cosmos/cosmos-sdk/x/slashing/keeper"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	stakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"

	"github.com/cosmos/gaia/v15/app/keepers"
)

// CreateUpgradeHandler returns a upgrade handler for Gaia v15
// which executes the following migrations:
//   - adhere to prop 826 which sets the minimum commission rate to 5% for all validators,
//     see https://www.mintscan.io/cosmos/proposals/826
//   - update the slashing module SigningInfos for which the consensus address is empty,
//     see https://github.com/cosmos/gaia/issues/1734.
//   - adhere to signal prop 860 which claws back vesting funds
//     see https://www.mintscan.io/cosmos/proposals/860
func CreateUpgradeHandler(
	mm *module.Manager,
	configurator module.Configurator,
	keepers *keepers.AppKeepers,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {
		ctx.Logger().Info("Starting module migrations...")

		vm, err := mm.RunMigrations(ctx, configurator, vm)
		if err != nil {
			return vm, err
		}

		UpgradeMinCommissionRate(ctx, *keepers.StakingKeeper)
		UpgradeSigningInfos(ctx, keepers.SlashingKeeper)
		ClawbackVestingFunds(ctx, sdk.MustAccAddressFromBech32("cosmos145hytrc49m0hn6fphp8d5h4xspwkawcuzmx498"), keepers)

		ctx.Logger().Info("Upgrade v15 complete")
		return vm, err
	}
}

// UpgradeMinCommissionRate sets the minimum commission rate staking parameter to 5%
// and updates the commission rate for all validators that have a commission rate less than 5%
// adhere to prop 826 which sets the minimum commission rate to 5% for all validators
// https://www.mintscan.io/cosmos/proposals/826
func UpgradeMinCommissionRate(ctx sdk.Context, sk stakingkeeper.Keeper) {
	ctx.Logger().Info("Migrating min commission rate...")

	params := sk.GetParams(ctx)
	params.MinCommissionRate = sdk.NewDecWithPrec(5, 2)
	err := sk.SetParams(ctx, params)
	if err != nil {
		panic(err)
	}

	for _, val := range sk.GetAllValidators(ctx) {
		if val.Commission.CommissionRates.Rate.LT(sdk.NewDecWithPrec(5, 2)) {
			// set the commission rate to 5%
			val.Commission.CommissionRates.Rate = sdk.NewDecWithPrec(5, 2)
			// set the max rate to 5% if it is less than 5%
			if val.Commission.CommissionRates.MaxRate.LT(sdk.NewDecWithPrec(5, 2)) {
				val.Commission.CommissionRates.MaxRate = sdk.NewDecWithPrec(5, 2)
			}
			val.Commission.UpdateTime = ctx.BlockHeader().Time
			sk.SetValidator(ctx, val)
		}
	}

	ctx.Logger().Info("Finished migrating min commission rate")
}

// UpgradeSigningInfos updates the signing infos of validators for which
// the consensus address is missing
func UpgradeSigningInfos(ctx sdk.Context, sk slashingkeeper.Keeper) {
	ctx.Logger().Info("Migrating signing infos...")

	signingInfos := []slashingtypes.ValidatorSigningInfo{}

	// update consensus address in signing info
	// using the store key of validators
	sk.IterateValidatorSigningInfos(ctx, func(address sdk.ConsAddress, info slashingtypes.ValidatorSigningInfo) (stop bool) {
		if info.Address == "" {
			info.Address = address.String()
			signingInfos = append(signingInfos, info)
		}

		return false
	})

	for _, si := range signingInfos {
		addr, err := sdk.ConsAddressFromBech32(si.Address)
		if err != nil {
			ctx.Logger().Error("incorrect consensus address in signing info %s: %s", si.Address, err)
			continue
		}
		sk.SetValidatorSigningInfo(ctx, addr, si)
	}

	ctx.Logger().Info("Finished migrating signing infos")
}

// ClawbackVestingFunds transfers the vesting tokens from the given vesting account
// to the community pool
func ClawbackVestingFunds(ctx sdk.Context, address sdk.AccAddress, keepers *keepers.AppKeepers) {
	ctx.Logger().Info("Migrating vesting funds...")

	ak := keepers.AccountKeeper
	bk := keepers.BankKeeper
	dk := keepers.DistrKeeper
	sk := *keepers.StakingKeeper

	// get target account
	account := ak.GetAccount(ctx, address)

	// verify that it's a vesting account type
	vestAccount, ok := account.(*vesting.ContinuousVestingAccount)
	if !ok {
		panic(
			sdkerrors.Wrap(
				sdkerrors.ErrInvalidType,
				"account with address %s isn't a vesting account",
			),
		)
	}

	// unbond all delegations from vesting account
	err := forceUnbondAllDelegations(sk, bk, ctx, address)
	if err != nil {
		panic(err)
	}

	// transfers still vesting tokens of BondDenom to community pool
	_, vestingCoins := vestAccount.GetVestingCoins(ctx.BlockTime()).Find(sk.BondDenom(ctx))
	err = forceFundCommunityPool(
		ak,
		dk,
		bk,
		ctx,
		vestingCoins,
		address,
		keepers.GetKey(banktypes.StoreKey),
	)
	if err != nil {
		panic(err)
	}

	// overwrite vesting account using its embedded base account
	ak.SetAccount(ctx, vestAccount.BaseAccount)

	// validate account balance
	err = bk.ValidateBalance(ctx, address)
	if err != nil {
		panic(err)
	}

	ctx.Logger().Info("Finished migrating vesting funds")
}

// forceUnbondAllDelegations unbonds all the delegations from the  given account address,
// without waiting for an unbonding period
func forceUnbondAllDelegations(
	sk stakingkeeper.Keeper,
	bk bankkeeper.Keeper,
	ctx sdk.Context,
	delegator sdk.AccAddress,
) error {
	dels := sk.GetDelegatorDelegations(ctx, delegator, 100)

	for _, del := range dels {
		valAddr := del.GetValidatorAddr()

		validator, found := sk.GetValidator(ctx, valAddr)
		if !found {
			return stakingtypes.ErrNoValidatorFound
		}

		returnAmount, err := sk.Unbond(ctx, delegator, valAddr, del.GetShares())
		if err != nil {
			return err
		}

		// transfer the validator tokens to the not bonded pool
		if validator.IsBonded() {
			// doing stakingKeeper.bondedTokensToNotBonded
			coins := sdk.NewCoins(sdk.NewCoin(sk.BondDenom(ctx), returnAmount))
			err = bk.SendCoinsFromModuleToModule(ctx, stakingtypes.BondedPoolName, stakingtypes.NotBondedPoolName, coins)
			if err != nil {
				return err
			}
		}

		bondDenom := sk.GetParams(ctx).BondDenom
		amt := sdk.NewCoin(bondDenom, returnAmount)

		err = bk.UndelegateCoinsFromModuleToAccount(ctx, stakingtypes.NotBondedPoolName, delegator, sdk.NewCoins(amt))
		if err != nil {
			return err
		}
	}

	return nil
}

// forceFundCommunityPool sends the given coin from the sender account to the community pool
// even if the coin is locked.
// Note that it partially follows the logic of the FundCommunityPool method in
// https://github.com/cosmos/cosmos-sdk/blob/release%2Fv0.47.x/x/distribution/keeper/keeper.go#L155
func forceFundCommunityPool(
	ak accountkeeper.AccountKeeper,
	dk distributionkeeper.Keeper,
	bk bankkeeper.Keeper,
	ctx sdk.Context,
	amount sdk.Coin,
	sender sdk.AccAddress,
	bs storetypes.StoreKey,
) error {
	recipientAcc := ak.GetModuleAccount(ctx, distributiontypes.ModuleName)
	if recipientAcc == nil {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownAddress, distributiontypes.ModuleName)
	}

	senderBal := bk.GetBalance(ctx, sender, amount.Denom)
	if _, hasNeg := sdk.NewCoins(senderBal).SafeSub(amount); hasNeg {
		return sdkerrors.Wrapf(
			sdkerrors.ErrInsufficientFunds,
			"spendable balance %s is smaller than %s",
			senderBal, amount,
		)
	}
	if err := setBalance(ctx, sender, senderBal.Sub(amount), bs); err != nil {
		return err
	}
	recipientBal := bk.GetBalance(ctx, recipientAcc.GetAddress(), amount.Denom)
	if err := setBalance(ctx, recipientAcc.GetAddress(), recipientBal.Add(amount), bs); err != nil {
		return err
	}

	accExists := ak.HasAccount(ctx, recipientAcc.GetAddress())
	if !accExists {
		ak.SetAccount(ctx, ak.NewAccountWithAddress(ctx, recipientAcc.GetAddress()))
	}

	feePool := dk.GetFeePool(ctx)
	feePool.CommunityPool = feePool.CommunityPool.Add(sdk.NewDecCoinsFromCoins(amount)...)
	dk.SetFeePool(ctx, feePool)

	return nil
}

// setBalance sets the coin balance for an account by address.
// Note that it follows the same logic of the sendBalance method in
// https://github.com/cosmos/cosmos-sdk/blob/release%2Fv0.47.x/x/bank/keeper/send.go#L337
func setBalance(
	ctx sdk.Context,
	addr sdk.AccAddress,
	balance sdk.Coin,
	bs storetypes.StoreKey,
) error {
	if !balance.IsValid() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, balance.String())
	}

	store := ctx.KVStore(bs)
	accountStore := prefix.NewStore(store, banktypes.CreateAccountBalancesPrefix(addr))
	denomPrefixStore := prefix.NewStore(store, banktypes.CreateDenomAddressPrefix(balance.Denom))

	if balance.IsZero() {
		accountStore.Delete([]byte(balance.Denom))
		denomPrefixStore.Delete(address.MustLengthPrefix(addr))
	} else {
		amount, err := balance.Amount.Marshal()
		if err != nil {
			return err
		}

		accountStore.Set([]byte(balance.Denom), amount)

		// Store a reverse index from denomination to account address with a
		// sentinel value.
		denomAddrKey := address.MustLengthPrefix(addr)
		if !denomPrefixStore.Has(denomAddrKey) {
			denomPrefixStore.Set(denomAddrKey, []byte{0})
		}
	}

	return nil
}
