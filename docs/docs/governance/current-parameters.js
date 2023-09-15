export const currentParams = {
  lastRelease: {
    releaseName: 'v11',
    releaseDate: '',
    blockHeight: '',
    governanceProposalLink: '',
  },
  currentRelease: {
    releaseName: 'v12',
    releaseDate: '',
    blockHeight: '',
    governanceProposalLink: '',
  },
  nextRelease: {
    releaseName: 'v12',
    releaseDate: '',
    blockHeight: '',
    governanceProposalLink: '',
  },
  auth: {
    MaxMemoCharacters: '512',
    SigVerifyCostED25519: '590',
    SigVerifyCostSecp256k1: '1000',
    TxSigLimit: '7',
    TxSizeCostPerByte: '10',
  },
  bank: {
    DefaultSendEnabled: true,
    SendEnabled: [],
  },
  baseapp: {
    BlockParams: {
      max_bytes: '200000',
      max_gas: '40000000',
    },
    EvidenceParams: {
      max_age_duration: '172800000000000',
      max_age_num_blocks: '1000000',
      max_bytes: '50000',
    },
    ValidatorParams: {
      pub_key_types: ['ed25519'],
    },
  },
  crisis: {
    ConstantFee: {
      amount: '1333000000',
      denom: 'uatom',
    },
  },
  distribution: {
    baseproposerreward: '0.010000000000000000',
    bonusproposerreward: '0.040000000000000000',
    communitytax: '0.020000000000000000',
    withdrawaddrenabled: true,
  },
  gov: {
    depositparams: {
      max_deposit_period: '1209600000000000',
      min_deposit: [
        {
          amount: '250000000',
          denom: 'uatom',
        },
      ],
    },
    tallyparams: {
      quorum: '0.400000000000000000',
      threshold: '0.500000000000000000',
      veto_threshold: '0.334000000000000000',
    },
    votingparams: {
      voting_period: '1209600000000000',
    },
  },
  liquidity: {
    CircuitBreakerEnabled: false,
    InitPoolCoinMintAmount: '1000000',
    MaxOrderAmountRatio: '0.100000000000000000',
    MaxReserveCoinAmount: '0',
    MinInitDepositAmount: '1000000',
    PoolCreationFee: [
      {
        amount: '40000000',
        denom: 'uatom',
      },
    ],
    PoolTypes: [
      {
        description:
          'Standard liquidity pool with pool price function X/Y, ESPM constraint, and two kinds of reserve coins',
        id: 1,
        max_reserve_coin_num: 2,
        min_reserve_coin_num: 2,
        name: 'StandardLiquidityPool',
      },
    ],
    SwapFeeRate: '0.003000000000000000',
    UnitBatchHeight: 1,
    WithdrawFeeRate: '0.000000000000000000',
  },
  mint: {
    BlocksPerYear: '4360000',
    GoalBonded: '0.670000000000000000',
    InflationMax: '0.200000000000000000',
    InflationMin: '0.070000000000000000',
    InflationRateChange: '1.000000000000000000',
    MintDenom: 'uatom',
  },
  slashing: {
    DowntimeJailDuration: '600000000000',
    MinSignedPerWindow: '0.050000000000000000',
    SignedBlocksWindow: '10000',
    SlashFractionDoubleSign: '0.050000000000000000',
    SlashFractionDowntime: '0.000100000000000000',
  },
  staking: {
    BondDenom: 'uatom',
    HistoricalEntries: 10000,
    MaxEntries: 7,
    MaxValidators: 180,
    UnbondingTime: '1814400000000000',
  },
  transfer: {
    ReceiveEnabled: true,
    SendEnabled: true,
  },
};
