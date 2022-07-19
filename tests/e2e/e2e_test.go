package e2e

import (
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	govv1beta1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"
)

//func (s *IntegrationTestSuite) TestIBCTokenTransfer() {
//	// TODO: Remove skip once IBC is reintegrated
//	s.T().Skip()
//	var ibcStakeDenom string
//
//	s.Run("send_photon_to_chainB", func() {
//
//		// require the recipient account receives the IBC tokens (IBC packets ACKd)
//		var (
//			balances sdk.Coins
//			err      error
//		)
//
//		address, err := s.chainB.validators[0].keyInfo.GetAddress()
//		s.Require().NoError(err)
//		recipient := address.String()
//		s.sendIBC(s.chainA.id, s.chainB.id, recipient, tokenAmount)
//
//		chainBAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainB.id][0].GetHostPort("1317/tcp"))
//
//		s.Require().Eventually(
//			func() bool {
//				balances, err = queryGaiaAllBalances(chainBAPIEndpoint, recipient)
//				s.Require().NoError(err)
//
//				return balances.Len() == 3
//			},
//			time.Minute,
//			5*time.Second,
//		)
//
//		for _, c := range balances {
//			if strings.Contains(c.Denom, "ibc/") {
//				ibcStakeDenom = c.Denom
//				s.Require().Equal(tokenAmount.Amount.Int64(), c.Amount.Int64())
//				break
//			}
//		}
//
//		s.Require().NotEmpty(ibcStakeDenom)
//	})
//}
//
//func (s *IntegrationTestSuite) TestBankTokenTransfer() {
//	s.Run("send_photon_between_accounts", func() {
//		var (
//			err error
//		)
//
//		senderAddress, err := s.chainA.validators[0].keyInfo.GetAddress()
//		s.Require().NoError(err)
//		sender := senderAddress.String()
//
//		recipientAddress, err := s.chainA.validators[1].keyInfo.GetAddress()
//		s.Require().NoError(err)
//		recipient := recipientAddress.String()
//
//		chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//
//		var (
//			beforeSenderPhotonBalance    sdk.Coin
//			beforeRecipientPhotonBalance sdk.Coin
//		)
//
//		s.Require().Eventually(
//			func() bool {
//				beforeSenderPhotonBalance, err = getSpecificBalance(chainAAPIEndpoint, sender, "photon")
//				s.Require().NoError(err)
//
//				beforeRecipientPhotonBalance, err = getSpecificBalance(chainAAPIEndpoint, recipient, "photon")
//				s.Require().NoError(err)
//
//				return beforeSenderPhotonBalance.IsValid() && beforeRecipientPhotonBalance.IsValid()
//			},
//			10*time.Second,
//			5*time.Second,
//		)
//
//		s.sendMsgSend(s.chainA, 0, sender, recipient, tokenAmount.String(), fees.String())
//
//		s.Require().Eventually(
//			func() bool {
//				afterSenderPhotonBalance, err := getSpecificBalance(chainAAPIEndpoint, sender, "photon")
//				s.Require().NoError(err)
//
//				afterRecipientPhotonBalance, err := getSpecificBalance(chainAAPIEndpoint, recipient, "photon")
//				s.Require().NoError(err)
//
//				decremented := beforeSenderPhotonBalance.Sub(tokenAmount).Sub(fees).IsEqual(afterSenderPhotonBalance)
//				incremented := beforeRecipientPhotonBalance.Add(tokenAmount).IsEqual(afterRecipientPhotonBalance)
//
//				return decremented && incremented
//			},
//			time.Minute,
//			5*time.Second,
//		)
//	})
//}
//
//func (s *IntegrationTestSuite) TestSendTokensFromNewGovAccount() {
//	s.writeGovProposals((s.chainA))
//	chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//	senderAddress, err := s.chainA.validators[0].keyInfo.GetAddress()
//	s.Require().NoError(err)
//	sender := senderAddress.String()
//	proposalCounter++
//	s.T().Logf("Proposal number: %d", proposalCounter)
//
//	s.fundCommunityPool(chainAAPIEndpoint, sender)
//
//	s.T().Logf("Submitting Legacy Gov Proposal: Community Spend Funding Gov Module")
//	s.submitLegacyProposalFundGovAccount(chainAAPIEndpoint, sender, proposalCounter)
//	s.T().Logf("Depositing Legacy Gov Proposal: Community Spend Funding Gov Module")
//	s.depositGovProposal(chainAAPIEndpoint, sender, proposalCounter)
//	s.T().Logf("Voting Legacy Gov Proposal: Community Spend Funding Gov Module")
//	s.voteGovProposal(chainAAPIEndpoint, sender, proposalCounter, "yes", false)
//
//	initialGovBalance, err := getSpecificBalance(chainAAPIEndpoint, govModuleAddress, photonDenom)
//	s.Require().NoError(err)
//	proposalCounter++
//
//	s.T().Logf("Submitting Gov Proposal: Sending Tokens from Gov Module to Recipient")
//	s.submitNewGovProposal(chainAAPIEndpoint, sender, proposalCounter, "/root/.gaia/config/proposal_2.json")
//	s.T().Logf("Depositing Gov Proposal: Sending Tokens from Gov Module to Recipient")
//	s.depositGovProposal(chainAAPIEndpoint, sender, proposalCounter)
//	s.T().Logf("Voting Gov Proposal: Sending Tokens from Gov Module to Recipient")
//	s.voteGovProposal(chainAAPIEndpoint, sender, proposalCounter, "yes", false)
//	s.Require().Eventually(
//		func() bool {
//			newGovBalance, err := getSpecificBalance(chainAAPIEndpoint, govModuleAddress, photonDenom)
//			s.Require().NoError(err)
//
//			recipientBalance, err := getSpecificBalance(chainAAPIEndpoint, govSendMsgRecipientAddress, photonDenom)
//			s.Require().NoError(err)
//			return newGovBalance.IsEqual(initialGovBalance.Sub(sendGovAmount)) && recipientBalance.Equal(initialGovBalance.Sub(newGovBalance))
//		},
//		15*time.Second,
//		5*time.Second,
//	)
//
//}
//
//func (s *IntegrationTestSuite) TestGovSoftwareUpgrade() {
//	chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//	senderAddress, err := s.chainA.validators[0].keyInfo.GetAddress()
//	s.Require().NoError(err)
//	sender := senderAddress.String()
//	height := s.getLatestBlockHeight(s.chainA, 0)
//	proposalHeight := height + govProposalBlockBuffer
//	proposalCounter++
//
//	s.T().Logf("Writing proposal %d on chain %s", proposalCounter, s.chainA.id)
//	s.writeGovUpgradeSoftwareProposal(s.chainA, proposalHeight)
//
//	s.T().Logf("Submitting Gov Proposal: Software Upgrade")
//	s.submitNewGovProposal(chainAAPIEndpoint, sender, proposalCounter, "/root/.gaia/config/proposal_3.json")
//	s.T().Logf("Depositing Gov Proposal: Software Upgrade")
//	s.depositGovProposal(chainAAPIEndpoint, sender, proposalCounter)
//	s.T().Logf("Weighted Voting Gov Proposal: Software Upgrade")
//	s.voteGovProposal(chainAAPIEndpoint, sender, proposalCounter, "yes=0.8,no=0.1,abstain=0.05,no_with_veto=0.05", true)
//
//	s.verifyChainHaltedAtUpgradeHeight(s.chainA, 0, proposalHeight)
//	s.T().Logf("Successfully halted chain at height %d", proposalHeight)
//
//	currentChain := s.chainA
//
//	for valIdx := range currentChain.validators {
//		var opts docker.RemoveContainerOptions
//		opts.ID = s.valResources[currentChain.id][valIdx].Container.ID
//		opts.Force = true
//		s.dkrPool.Client.RemoveContainer(opts)
//		s.T().Logf("Removed Container: %s", s.valResources[currentChain.id][valIdx].Container.Name[1:])
//	}
//
//	s.T().Logf("Restarting containers")
//	s.SetupSuite()
//
//	s.Require().Eventually(
//		func() bool {
//			h := s.getLatestBlockHeight(s.chainA, 0)
//			s.Require().NoError(err)
//
//			return (h > 0)
//		},
//		30*time.Second,
//		5*time.Second,
//	)
//
//	proposalCounter = 0
//}

//func (s *IntegrationTestSuite) TestGovCancelSoftwareUpgrade() {
//	chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//	senderAddress, err := s.chainA.validators[0].keyInfo.GetAddress()
//	s.Require().NoError(err)
//	sender := senderAddress.String()
//	height := s.getLatestBlockHeight(s.chainA, 0)
//	proposalHeight := height + 50
//	proposalCounter++
//
//	s.T().Logf("Writing proposal %d on chain %s", proposalCounter, s.chainA.id)
//	s.writeGovUpgradeSoftwareProposal(s.chainA, proposalHeight)
//
//	s.T().Logf("Submitting Gov Proposal: Software Upgrade")
//	s.submitNewGovProposal(chainAAPIEndpoint, sender, proposalCounter, "/root/.gaia/config/proposal_3.json")
//	s.depositGovProposal(chainAAPIEndpoint, sender, proposalCounter)
//	s.voteGovProposal(chainAAPIEndpoint, sender, proposalCounter, "yes", false)
//
//	proposalCounter++
//
//	s.T().Logf("Submitting Gov Proposal: Cancel Software Upgrade")
//	s.submitNewGovProposal(chainAAPIEndpoint, sender, proposalCounter, "/root/.gaia/config/proposal_4.json")
//	s.depositGovProposal(chainAAPIEndpoint, sender, proposalCounter)
//	s.voteGovProposal(chainAAPIEndpoint, sender, proposalCounter, "yes", false)
//
//	s.verifyChainPassesUpgradeHeight(s.chainA, 0, proposalHeight)
//	s.T().Logf("Successfully canceled upgrade at height %d", proposalHeight)
//}
//
//func (s *IntegrationTestSuite) fundCommunityPool(chainAAPIEndpoint string, sender string) {
//	s.Run("fund_community_pool", func() {
//		beforeDistPhotonBalance, _ := getSpecificBalance(chainAAPIEndpoint, distModuleAddress, tokenAmount.Denom)
//		if beforeDistPhotonBalance.IsNil() {
//			// Set balance to 0 if previous balance does not exist
//			beforeDistPhotonBalance = sdk.NewInt64Coin("photon", 0)
//		}
//
//		s.execDistributionFundCommunityPool(s.chainA, 0, chainAAPIEndpoint, sender, tokenAmount.String(), fees.String())
//
//		s.Require().Eventually(
//			func() bool {
//				afterDistPhotonBalance, err := getSpecificBalance(chainAAPIEndpoint, distModuleAddress, tokenAmount.Denom)
//				if err != nil {
//					s.T().Logf("Error getting balance: %s", afterDistPhotonBalance)
//				}
//				s.Require().NoError(err)
//
//				return afterDistPhotonBalance.IsEqual(beforeDistPhotonBalance.Add(tokenAmount.Add(fees)))
//			},
//			15*time.Second,
//			5*time.Second,
//		)
//	})
//}
//
//func (s *IntegrationTestSuite) submitLegacyProposalFundGovAccount(chainAAPIEndpoint string, sender string, proposalId int) {
//	s.Run("submit_legacy_community_spend_proposal_to_fund_gov_acct", func() {
//		s.execGovSubmitLegacyGovProposal(s.chainA, 0, chainAAPIEndpoint, sender, "/root/.gaia/config/proposal.json", fees.String(), "community-pool-spend")
//
//		s.Require().Eventually(
//			func() bool {
//				proposal, err := queryGovProposal(chainAAPIEndpoint, proposalId)
//				s.Require().NoError(err)
//
//				return (proposal.GetProposal().Status == govv1beta1.StatusDepositPeriod)
//			},
//			15*time.Second,
//			5*time.Second,
//		)
//	})
//}

func (s *IntegrationTestSuite) submitLegacyGovProposal(chainAAPIEndpoint string, sender string, proposalTypeSubCmd string, proposalId int, proposalPath string) {
	s.Run("submit_legacy_gov_proposal", func() {
		s.execGovSubmitLegacyGovProposal(s.chainA, 0, chainAAPIEndpoint, sender, proposalPath, fees.String(), proposalTypeSubCmd)

		s.Require().Eventually(
			func() bool {
				proposal, err := queryGovProposal(chainAAPIEndpoint, proposalId)
				s.Require().NoError(err)
				return (proposal.GetProposal().Status == govv1beta1.StatusDepositPeriod)
			},
			15*time.Second,
			5*time.Second,
		)
	})
}

//func (s *IntegrationTestSuite) submitNewGovProposal(chainAAPIEndpoint string, sender string, proposalId int, proposalPath string) {
//	s.Run("submit_new_gov_proposal", func() {
//		s.execGovSubmitProposal(s.chainA, 0, chainAAPIEndpoint, sender, proposalPath, fees.String())
//
//		s.Require().Eventually(
//			func() bool {
//				proposal, err := queryGovProposal(chainAAPIEndpoint, proposalId)
//				s.T().Logf("Proposal: %s", proposal.String())
//				s.Require().NoError(err)
//
//				return (proposal.GetProposal().Status == govv1beta1.StatusDepositPeriod)
//			},
//			15*time.Second,
//			5*time.Second,
//		)
//	})
//}

func (s *IntegrationTestSuite) depositGovProposal(chainAAPIEndpoint string, sender string, proposalId int) {
	s.Run("deposit_gov_proposal", func() {
		s.execGovDepositProposal(s.chainA, 0, chainAAPIEndpoint, sender, proposalId, depositAmount, fees.String())

		s.Require().Eventually(
			func() bool {
				proposal, err := queryGovProposal(chainAAPIEndpoint, proposalId)
				s.Require().NoError(err)

				return (proposal.GetProposal().Status == govv1beta1.StatusVotingPeriod)
			},
			15*time.Second,
			5*time.Second,
		)
	})
}

func (s *IntegrationTestSuite) voteGovProposal(chainAAPIEndpoint string, sender string, proposalId int, vote string, weighted bool) {
	s.Run("vote_gov_proposal", func() {
		if weighted {
			s.execGovWeightedVoteProposal(s.chainA, 0, chainAAPIEndpoint, sender, proposalId, vote, fees.String())
		} else {
			s.execGovVoteProposal(s.chainA, 0, chainAAPIEndpoint, sender, proposalId, vote, fees.String())
		}

		s.Require().Eventually(
			func() bool {
				proposal, err := queryGovProposal(chainAAPIEndpoint, proposalId)
				s.Require().NoError(err)

				return (proposal.GetProposal().Status == govv1beta1.StatusPassed)
			},
			15*time.Second,
			5*time.Second,
		)
	})
}

//func (s *IntegrationTestSuite) verifyChainHaltedAtUpgradeHeight(c *chain, valIdx int, upgradeHeight int) {
//	s.Require().Eventually(
//		func() bool {
//			currentHeight := s.getLatestBlockHeight(c, valIdx)
//
//			return currentHeight == upgradeHeight
//		},
//		30*time.Second,
//		5*time.Second,
//	)
//
//	counter := 0
//	s.Require().Eventually(
//		func() bool {
//			currentHeight := s.getLatestBlockHeight(c, valIdx)
//
//			if currentHeight > upgradeHeight {
//				return false
//			}
//			if currentHeight == upgradeHeight {
//				counter++
//			}
//			return counter >= 2
//		},
//		8*time.Second,
//		2*time.Second,
//	)
//}
//
//func (s *IntegrationTestSuite) verifyChainPassesUpgradeHeight(c *chain, valIdx int, upgradeHeight int) {
//	s.Require().Eventually(
//		func() bool {
//			currentHeight := s.getLatestBlockHeight(c, valIdx)
//
//			return currentHeight > upgradeHeight
//		},
//		30*time.Second,
//		5*time.Second,
//	)
//}
//

/*
bank send with fees two fees.
The following test is for the case that:
photon fee: higher than or equal to min_gas_price in app.toml, but lower than the photon fee required in globalfee.
stake fee: higher than stake fee required in globalfee.
*/
//func (s *IntegrationTestSuite) TestGlobalFee() {
//	s.Run("send_tokens_to_test_globalfee", func() {
//		var (
//			err error
//		)
//
//		senderAddress, err := s.chainA.validators[0].keyInfo.GetAddress()
//		s.Require().NoError(err)
//		sender := senderAddress.String()
//
//		recipientAddress, err := s.chainA.validators[1].keyInfo.GetAddress()
//		s.Require().NoError(err)
//		recipient := recipientAddress.String()
//
//		token := sdk.NewInt64Coin(photonDenom, 3300000000) // 3,300photon
//		fees := sdk.Coins{}
//		photonfee := sdk.NewInt64Coin(photonDenom, 10) // 0.00001photon
//		stakefee := sdk.NewInt64Coin(stakeDenom, 2000000) // 2stake
//		fees = append(fees, photonfee, stakefee)
//		chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//
//		var (
//			beforeSenderPhotonBalance    sdk.Coin
//			beforeSenderStakeBalance    sdk.Coin
//			beforeRecipientPhotonBalance sdk.Coin
//		)
//
//		s.Require().Eventually(
//			func() bool {
//				beforeSenderPhotonBalance, err = getSpecificBalance(chainAAPIEndpoint, sender, "photon")
//				s.Require().NoError(err)
//				beforeSenderStakeBalance, err = getSpecificBalance(chainAAPIEndpoint, sender, "stake")
//				s.Require().NoError(err)
//
//				beforeRecipientPhotonBalance, err = getSpecificBalance(chainAAPIEndpoint, recipient, "photon")
//				s.Require().NoError(err)
//
//				return beforeSenderPhotonBalance.IsValid() && beforeRecipientPhotonBalance.IsValid()
//			},
//			10*time.Second,
//			5*time.Second,
//		)
//
//		s.sendMsgSend(s.chainA, 0, sender, recipient, tokenAmount.String(), fees.String())
//
//		s.Require().Eventually(
//			func() bool {
//				afterSenderPhotonBalance, err := getSpecificBalance(chainAAPIEndpoint, sender, "photon")
//				s.Require().NoError(err)
//				afterSenderStakeBalance, err := getSpecificBalance(chainAAPIEndpoint, sender, "stake")
//				s.Require().NoError(err)
//
//				afterRecipientPhotonBalance, err := getSpecificBalance(chainAAPIEndpoint, recipient, "photon")
//				s.Require().NoError(err)
//
//				decrementedPhoton := beforeSenderPhotonBalance.Sub(token).Sub(photonfee).IsEqual(afterSenderPhotonBalance)
//				decrementedStake := beforeSenderStakeBalance.Sub(stakefee).IsEqual(afterSenderStakeBalance)
//				incrementedPhoton := beforeRecipientPhotonBalance.Add(token).IsEqual(afterRecipientPhotonBalance)
//
//				return decrementedPhoton && decrementedStake && incrementedPhoton
//			},
//			time.Minute,
//			5*time.Second,
//		)
//	})
//}
//
//// globalfee in genesis is set to be "0.00001photon"
//func (s *IntegrationTestSuite) TestQueryGlobalFeesInGenesis() {
//	chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//	feeInGenesis, err := sdk.ParseDecCoins(globalFee)
//	s.Require().NoError(err)
//	s.Require().Eventually(
//		func() bool {
//			fees, err := queryGlobalFees(chainAAPIEndpoint)
//			s.T().Logf("Global Fees in Genesis: %s", fees.String())
//			s.Require().NoError(err)
//
//		return fees.IsEqual(feeInGenesis)
//		},
//		15*time.Second,
//		5*time.Second,
//	)
//}

// use gov to propose/change  global fees and then change back, so that this does not influence any other tx
//func (s *IntegrationTestSuite) TestGovProposeNewGlobalFees() {
//	chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
//	submitterAddr, err := s.chainA.validators[0].keyInfo.GetAddress()
//	s.Require().NoError(err)
//	submitter := submitterAddr.String()
//
//	// prepare gov globalfee proposal
//	newfees, err := sdk.ParseDecCoins(newGlobalFees)
//	s.Require().NoError(err)
//	s.writeGovParamChangeProposalGlobalFees(s.chainA, newfees)
//
//	// gov proposing new fees
//	proposalCounter++
//	s.T().Logf("Proposal number: %d", proposalCounter)
//	s.T().Logf("Submitting, deposit and vote legacy Gov Proposal: change global fees")
//	s.submitLegacyGovProposal(chainAAPIEndpoint, submitter, "param-change", proposalCounter, "/root/.gaia/config/proposal_globalfee.json")
//	s.depositGovProposal(chainAAPIEndpoint, submitter, proposalCounter)
//	s.voteGovProposal(chainAAPIEndpoint, submitter, proposalCounter, "yes", false)
//
//	// query the proposal status and new fee
//	s.Require().Eventually(
//		func() bool {
//			proposal, err := queryGovProposal(chainAAPIEndpoint, proposalCounter)
//			s.Require().NoError(err)
//			return (proposal.GetProposal().Status == govv1beta1.StatusPassed)
//		},
//		15*time.Second,
//		5*time.Second,
//	)
//
//	s.Require().Eventually(
//		func() bool {
//			fees, err := queryGlobalFees(chainAAPIEndpoint)
//			s.T().Logf("After gov new global fee proposal: %s", fees.String())
//			s.Require().NoError(err)
//
//			return fees.IsEqual(newfees)
//		},
//		15*time.Second,
//		5*time.Second,
//	)
//
//	// gov proposing to change back to original global fee
//	s.T().Logf("Propose to change back to original global fees: %s", globalFee)
//	oldfees, err := sdk.ParseDecCoins(globalFee)
//	s.Require().NoError(err)
//	s.writeGovParamChangeProposalGlobalFees(s.chainA, oldfees)
//
//	proposalCounter++
//	s.T().Logf("Proposal number: %d", proposalCounter)
//	s.T().Logf("Submitting, deposit and vote legacy Gov Proposal: change back global fees")
//	s.submitLegacyGovProposal(chainAAPIEndpoint, submitter, "param-change", proposalCounter, "/root/.gaia/config/proposal_globalfee.json")
//	s.depositGovProposal(chainAAPIEndpoint, submitter, proposalCounter)
//	s.voteGovProposal(chainAAPIEndpoint, submitter, proposalCounter, "yes", false)
//
//	// query the proposal status and fee
//	s.Require().Eventually(
//		func() bool {
//			proposal, err := queryGovProposal(chainAAPIEndpoint, proposalCounter)
//			s.Require().NoError(err)
//			return (proposal.GetProposal().Status == govv1beta1.StatusPassed)
//		},
//		15*time.Second,
//		5*time.Second,
//	)
//
//	s.Require().Eventually(
//		func() bool {
//			fees, err := queryGlobalFees(chainAAPIEndpoint)
//			s.T().Logf("After gov proposal to change back global fees: %s", oldfees.String())
//			s.Require().NoError(err)
//
//			return fees.IsEqual(oldfees)
//		},
//		15*time.Second,
//		5*time.Second,
//	)
//}

func (s *IntegrationTestSuite) TestEmpNewGlobalFees() {
	chainAAPIEndpoint := fmt.Sprintf("http://%s", s.valResources[s.chainA.id][0].GetHostPort("1317/tcp"))
	submitterAddr, err := s.chainA.validators[0].keyInfo.GetAddress()
	s.Require().NoError(err)
	submitter := submitterAddr.String()

	// prepare gov globalfee proposal
	emptyFee := sdk.DecCoins{}
	s.Require().NoError(err)
	s.writeGovParamChangeProposalGlobalFees(s.chainA, emptyFee)

	// gov proposing new fees
	proposalCounter++
	s.T().Logf("Proposal number: %d", proposalCounter)
	s.T().Logf("Submitting, deposit and vote legacy Gov Proposal: change global fees empty")
	s.submitLegacyGovProposal(chainAAPIEndpoint, submitter, "param-change", proposalCounter, "/root/.gaia/config/proposal_globalfee.json")
	s.depositGovProposal(chainAAPIEndpoint, submitter, proposalCounter)
	s.voteGovProposal(chainAAPIEndpoint, submitter, proposalCounter, "yes", false)

	// query the proposal status and new fee
	s.Require().Eventually(
		func() bool {
			proposal, err := queryGovProposal(chainAAPIEndpoint, proposalCounter)
			s.Require().NoError(err)
			return (proposal.GetProposal().Status == govv1beta1.StatusPassed)
		},
		15*time.Second,
		5*time.Second,
	)

	s.Require().Eventually(
		func() bool {
			fees, err := queryGlobalFees(chainAAPIEndpoint)
			s.T().Logf("After gov new global fee proposal: %s", fees.String())
			s.Require().NoError(err)

			// attention: when global fee is empty, when query, it shows empty rather than default  ante.DefaultZeroGlobalFee() = 0uatom.
			return fees.IsEqual(emptyFee)
		},
		15*time.Second,
		5*time.Second,
	)

	// ----------------------------tx tests------------------------------------------
	// test tx with fees
	recipientAddress, err := s.chainA.validators[1].keyInfo.GetAddress()
	s.Require().NoError(err)
	recipient := recipientAddress.String()


	// test1: submit default fees, pass
	// s.sendMsgSend(s.chainA, 0, submitter, recipient, tokenAmount.String(), "0uatom")
	// s.sendMsgSend(s.chainA, 0, submitter, recipient, tokenAmount.String(), fees.String())
	// test2: submit empty fees, pass
	 s.sendMsgSend(s.chainA, 0, submitter, recipient, tokenAmount.String(), "0uatom")




	//todo test should fail
	// test3: pay photon fail, require 0atom
	//s.sendMsgSend(s.chainA, 0, submitter, recipient, tokenAmount.String(), fees.String())
	//s.Require().Error(sdkerrors.ErrInsufficientFee)

	// -----------------------------------------------------------------------------

	// gov proposing to change back to original global fee
	s.T().Logf("Propose to change back to original global fees: %s", globalFee)
	oldfees, err := sdk.ParseDecCoins(globalFee)
	s.Require().NoError(err)
	s.writeGovParamChangeProposalGlobalFees(s.chainA, oldfees)

	proposalCounter++
	s.T().Logf("Proposal number: %d", proposalCounter)
	s.T().Logf("Submitting, deposit and vote legacy Gov Proposal: change back global fees")
	s.submitLegacyGovProposal(chainAAPIEndpoint, submitter, "param-change", proposalCounter, "/root/.gaia/config/proposal_globalfee.json")
	s.depositGovProposal(chainAAPIEndpoint, submitter, proposalCounter)
	s.voteGovProposal(chainAAPIEndpoint, submitter, proposalCounter, "yes", false)

	// query the proposal status and fee
	s.Require().Eventually(
		func() bool {
			proposal, err := queryGovProposal(chainAAPIEndpoint, proposalCounter)
			s.Require().NoError(err)
			return (proposal.GetProposal().Status == govv1beta1.StatusPassed)
		},
		15*time.Second,
		5*time.Second,
	)

	s.Require().Eventually(
		func() bool {
			fees, err := queryGlobalFees(chainAAPIEndpoint)
			s.T().Logf("After gov proposal to change back global fees: %s", oldfees.String())
			s.Require().NoError(err)

			return fees.IsEqual(oldfees)
		},
		15*time.Second,
		5*time.Second,
	)
}
