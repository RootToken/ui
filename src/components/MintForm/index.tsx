import { useCallback, useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronsRight,
  ChevronUp,
  HelpCircle,
  X,
} from "react-feather";
import { NumericFormat } from "react-number-format";
import useAppStore from "../../store";
import MintSettingsPopover from "../MintSettingsPopover";
import TokenPickerModal from "../TokenPickerModal";
import TooltipIcon from "../TooltipIcon";
import MintRow from "./MintRow";
import * as S from "./styled";
import debounce from "lodash.debounce";
import {
  IMintFormState,
  IMintFormToken,
  ISwapToken,
} from "../../interfaces/mintForm";
import Loading from "../Loading";
import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Workflow,
  ERC20Token,
  FarmWorkflow,
} from "@beanstalk/sdk";
import { BigNumber } from "@ethersproject/bignumber";
import { TOKENS } from "../../interfaces/token";
import { displayBN } from "../../util/bigNumber";
import { AnimatePresence, motion } from "framer-motion";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import TransactionToast from "../Common/TransactionToast";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import useMintWorkflow from "../../hooks/useMintWorkflow";
import { DepositCrate } from "@beanstalk/sdk/dist/types/lib/silo";
import useSWR from "swr";
import { getAPY } from "../../api/subgraph";
import { calculateRoot } from "../../util/root";

export default function MintForm() {
  const { data: apys } = useSWR("getApy", getAPY);
  const [openTx, setOpenTx] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);
  const [mintState, setMintState] = useState({
    loading: false,
    output: "0",
    minRootsOut: TokenValue.fromHuman("0", 18),
    priceImpact: TokenValue.fromHuman("0", 18),
    swaps: [] as ISwapToken[],
    workflow: undefined as undefined | FarmWorkflow | null,
    seasons: [] as BigNumber[],
    amounts: [] as BigNumber[],
    totalBeanIntoSilo: "",
    totalBdvFromDeposits: "",
    bdvImpacted: false,
    needAllowance: false,
    needInternalAllowance: false,
  });
  const [permit, setPermit] = useState<SignedPermit | undefined>(undefined);

  const {
    mintRootsWithSwappedBean: getMintStrategy,
    mintRootsWithBeanDeposit,
  } = useMintWorkflow();

  const {
    mintFormState,
    onChangeMintFormStateField,
    onResetMintFormState,
    beanstalkSdk,
    account,
    onGetConnectedUserBalance,
    erc20Contracts,
  } = useAppStore(
    ({
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      beanstalkSdk,
      account,
      erc20Contracts,
      onGetConnectedUserBalance,
    }) => ({
      beanstalkSdk,
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      account,
      onGetConnectedUserBalance,
      erc20Contracts,
    })
  );

  const getTokensSwapRate = (
    tokens: IMintFormToken[],
    toMode: FarmToMode
  ): Promise<ISwapToken[]> => {
    return Promise.all(
      tokens.map(async (token): Promise<ISwapToken> => {
        try {
          const spender = beanstalkSdk.contracts.depot.address;
          const symbol = token.token.symbol as
            | "BEAN"
            | "USDC"
            | "USDT"
            | "DAI"
            | "ETH"
            | "WETH";

          const tokenIn = beanstalkSdk.tokens[symbol];
          const amount = tokenIn.fromHuman(token.amount);
          const allowance = await tokenIn.getAllowance(
            account!.address,
            spender
          );

          // Check if user is using internal balance
          let internalAllowance: TokenValue | undefined;
          let internalAmount: TokenValue | undefined;
          if (account!.tokenBalances.get(tokenIn)) {
            if (amount.gt(account!.tokenBalances.get(tokenIn)!.external)) {
              internalAllowance = TokenValue.fromBlockchain(
                await beanstalkSdk.contracts.beanstalk.tokenAllowance(
                  account!.address,
                  spender,
                  tokenIn.address
                ),
                tokenIn.decimals
              );
              internalAmount = amount.sub(
                account!.tokenBalances.get(tokenIn)!.external
              );
            }
          }

          const strategy = getMintStrategy(
            tokenIn,
            FarmFromMode.EXTERNAL,
            toMode,
            internalAmount
          );

          if (!strategy) throw new Error("Failed to build workflow");

          const { swap, workflow } = strategy;
          const amountOut = await workflow.estimate(amount);
          const est = beanstalkSdk.tokens.ROOT.fromBlockchain(amountOut);
          const needAllowance = allowance
            ? allowance.lt(amount.toBigNumber())
            : false;
          const needInternalAllowance =
            internalAllowance && internalAmount
              ? internalAllowance.lt(internalAmount)
              : false;

          const estimatedTokenOut = await swap.estimate(amount);

          return {
            token,
            tokenIn,
            estimatedTokenOut,
            estimated: est,
            estimatedWithSlippage: est.sub(
              est.mul(parseFloat(token.slippage) * 10).div(1000)
            ),
            swap,
            workflow,
            needAllowance,
            needInternalAllowance,
          };
        } catch (e: any) {
          console.log(e);
          throw e;
        }
      })
    );
  };

  const calculate = useCallback(
    debounce(async (state: IMintFormState) => {
      try {
        if (!account) {
          throw new Error("account not found");
        }

        // Validate
        if (
          state.mintTokens.filter((token) => token.amount === "").length > 0
        ) {
          throw new Error("Invalid input");
        }

        // If Bean deposit
        if (state.mintTokens[0].token.symbol === "BEAN DEPOSIT") {
          const [rootTotalSupply, rootBdv, rootStalk, rootseeds] =
            await Promise.all([
              beanstalkSdk.tokens.ROOT.getTotalSupply(),
              beanstalkSdk.root.underlyingBdv(),
              beanstalkSdk.silo.balanceOfStalk(
                beanstalkSdk.tokens.ROOT.address,
                true
              ),
              beanstalkSdk.silo.balanceOfSeeds(
                beanstalkSdk.tokens.ROOT.address
              ),
            ]);
          let totalBeanFromDeposit = TokenValue.fromHuman(
            state.mintTokens[0].amount,
            beanstalkSdk.tokens.BEAN.decimals
          );
          let deposits: DepositCrate<TokenValue>[] = [];
          const accountDeposits = [
            ...(account.siloBalances.get(beanstalkSdk.tokens.BEAN)?.deposited
              .crates || []),
          ];

          let amountRemaining1 = TokenValue.fromHuman(
            state.mintTokens[0].amount,
            TOKENS["BEAN DEPOSIT"].decimals
          );
          const siloBalance =
            accountDeposits.reduce((v, cur) => {
              return v.add(cur.amount);
            }, TokenValue.fromHuman("0", 6)) || TokenValue.fromHuman("0", 6);

          if (displayBN(siloBalance, 2) === displayBN(amountRemaining1, 2)) {
            deposits = accountDeposits;
          } else {
            let bdvImpacts: {
              deposit: DepositCrate<TokenValue>;
              out: TokenValue;
              value: TokenValue;
              bdvImpacted: boolean;
              result: any;
            }[] = [];
            let stalkImpacts: {
              deposit: DepositCrate<TokenValue>;
              out: TokenValue;
              value: TokenValue;
              bdvImpacted: boolean;
              result: any;
            }[] = [];

            // console.log(accountDeposits.length);
            let totalAm = TokenValue.fromHuman("0", 6);

            accountDeposits.map((d) => {
              const deposit = { ...d };
              totalAm = totalAm.add(deposit.amount);
              const result = calculateRoot(
                deposit.stalk,
                deposit.seeds,
                deposit.bdv,
                rootTotalSupply,
                rootBdv,
                rootStalk,
                rootseeds,
                true
              );

              if (result.bdvRatio.lte(result.stalkRatio)) {
                stalkImpacts.push({
                  deposit,
                  value: result.stalkRatio.sub(result.bdvRatio),
                  out: result.amount,
                  bdvImpacted: false,
                  result,
                });
              } else {
                bdvImpacts.push({
                  deposit,
                  value: result.bdvRatio.sub(result.stalkRatio),
                  out: result.amount,
                  bdvImpacted: true,
                  result,
                });
              }
              // console.log(
              //   deposit.season.toString(),
              //   result.amount.toHuman(),
              //   deposit.bdv.toHuman(),
              //   deposit.stalk.toHuman()
              //   // result.bdvRatio.gte(result.stalkRatio),
              // );
              // console.log({
              //   season: deposit.season.toString(),
              //   a: result.amount.toHuman(),
              //   am: deposit.amount.toHuman(),
              //   bdv: result.bdvRatio.toHuman(),
              //   stalk: result.stalkRatio.toHuman(),
              //   bdvImpacted: result.bdvRatio.gte(result.stalkRatio),
              // });
            });

            // console.log(
            //   totalAm.toHuman(),
            //   bdvImpacts.length,
            //   stalkImpacts.length
            // );

            bdvImpacts.sort((a, b) => {
              if (a.value.gte(b.value)) {
                return 1;
              } else if (a.value.lt(b.value)) {
                return -1;
              }
              return 0;
            });

            stalkImpacts.sort((a, b) => {
              if (a.value.gte(b.value)) {
                return 1;
              } else if (a.value.lt(b.value)) {
                return -1;
              }
              return 0;
            });
            // bdvImpacts.forEach((v) => {
            //   console.log(
            //     v.bdvImpacted,
            //     v.deposit.season.toString(),
            //     v.deposit.amount.toHuman(),
            //     v.deposit.bdv.toHuman(),
            //     v.deposit.stalk.toHuman(),
            //     v.out.toHuman()
            //   );
            // });

            // console.log("---------");
            // stalkImpacts.forEach((v) => {
            //   console.log(
            //     v.bdvImpacted,
            //     v.deposit.season.toString(),
            //     v.deposit.amount.toHuman(),
            //     v.deposit.bdv.toHuman(),
            //     v.deposit.stalk.toHuman(),
            //     v.out.toHuman()
            //   );
            // });
            // 10 percent of total remaining
            let minWeight = amountRemaining1.mulDiv(10, 100);
            let depositStalk = TokenValue.fromHuman("0", 10);
            let depositSeeds = TokenValue.fromHuman("0", 6);
            let depositBdv = TokenValue.fromHuman("0", 6);

            while (amountRemaining1.gt(0)) {
              if (amountRemaining1.lt(minWeight)) {
                minWeight = amountRemaining1;
              }
              const result = calculateRoot(
                depositStalk,
                depositSeeds,
                depositBdv,
                rootTotalSupply,
                rootBdv,
                rootStalk,
                rootseeds,
                true
              );
              const bdvImpacted = !result.bdvRatio.lte(result.stalkRatio);

              // console.log("----------");
              // console.log(
              //   // deposit.season.toString(),
              //   bdvImpacted,
              //   depositBdv.toHuman(),
              //   depositStalk.toHuman(),
              //   result.amount.toHuman(),
              //   bdvImpacts.length,
              //   stalkImpacts.length
              //   // result.bdvRatio.gte(result.stalkRatio),
              // );

              // console.log({
              //   amountRemaining: amountRemaining1.toHuman(),
              //   // depositStalk: depositStalk.toHuman(),
              //   // depositSeeds: depositSeeds.toHuman(),
              //   // depositBdv: depositBdv.toHuman(),
              //   // rootAmt: result.amount.toHuman(),
              //   // bdvImpacted,
              //   // bdvImpacts,
              //   // stalkImpacts,
              //   // min: result.min?.toHuman(),
              //   // bdvRatio: result.bdvRatio.toHuman(),
              //   // stalkRatio: result.stalkRatio.toHuman(),
              // });
              // console.log(depositBdv.add(amountRemaining1).toHuman());

              const bdvImpact = bdvImpacts[0];
              const stalkImpact = stalkImpacts[0];

              // If equal then use which ever is smaller of bdv/stalk impact
              if (
                result.bdvRatio.eq(result.stalkRatio) &&
                bdvImpact &&
                stalkImpact
              ) {
                const min = bdvImpact.value.lt(stalkImpact.value)
                  ? bdvImpact
                  : stalkImpact;
                // console.log(
                //   "using lowest between stalk x bdv",
                //   min.deposit.season.toString()
                // );

                if (min.deposit.amount.gt(minWeight)) {
                  amountRemaining1 = amountRemaining1.sub(minWeight);

                  const bdvFromDeposit = min.deposit.bdv.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const stalkFromDeposit = min.deposit.stalk.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const seedsFromDeposit = min.deposit.seeds.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );

                  depositBdv = depositBdv.add(bdvFromDeposit);
                  depositSeeds = depositSeeds.add(seedsFromDeposit);
                  depositStalk = depositStalk.add(stalkFromDeposit);

                  deposits.push({
                    amount: bdvFromDeposit,
                    season: min.deposit.season,
                    bdv: bdvFromDeposit,
                    stalk: stalkFromDeposit,
                    seeds: seedsFromDeposit,
                    grownStalk: min.deposit.grownStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                    baseStalk: min.deposit.baseStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                  });
                  min.deposit.amount = min.deposit.amount.sub(bdvFromDeposit);
                  min.deposit.bdv = min.deposit.bdv.sub(bdvFromDeposit);
                  min.deposit.stalk = min.deposit.stalk.sub(stalkFromDeposit);
                  min.deposit.seeds = min.deposit.seeds.sub(seedsFromDeposit);
                } else {
                  amountRemaining1 = amountRemaining1.sub(min.deposit.amount);
                  depositBdv = depositBdv.add(min.deposit.bdv);
                  depositSeeds = depositSeeds.add(min.deposit.seeds);
                  depositStalk = depositStalk.add(min.deposit.stalk);
                  if (bdvImpact.value.lt(stalkImpact.value)) {
                    bdvImpacts = bdvImpacts.slice(1);
                  } else {
                    stalkImpacts = stalkImpacts.slice(1);
                  }
                  deposits.push(min.deposit);
                }
              } else if (bdvImpacted && stalkImpact) {
                // If bdv impacted then use more stalk to offset it
                const min = stalkImpact;
                // console.log(
                //   "using more older deposit to offset",
                //   min.deposit.season.toString()
                // );
                if (min.deposit.amount.gt(minWeight)) {
                  amountRemaining1 = amountRemaining1.sub(minWeight);
                  const bdvFromDeposit = min.deposit.bdv.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const stalkFromDeposit = min.deposit.stalk.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const seedsFromDeposit = min.deposit.seeds.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );

                  depositBdv = depositBdv.add(bdvFromDeposit);
                  depositSeeds = depositSeeds.add(seedsFromDeposit);
                  depositStalk = depositStalk.add(stalkFromDeposit);

                  deposits.push({
                    amount: bdvFromDeposit,
                    season: min.deposit.season,
                    bdv: bdvFromDeposit,
                    stalk: stalkFromDeposit,
                    seeds: seedsFromDeposit,
                    grownStalk: min.deposit.grownStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                    baseStalk: min.deposit.baseStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                  });
                  min.deposit.amount = min.deposit.amount.sub(bdvFromDeposit);
                  min.deposit.bdv = min.deposit.bdv.sub(bdvFromDeposit);
                  min.deposit.stalk = min.deposit.stalk.sub(stalkFromDeposit);
                  min.deposit.seeds = min.deposit.seeds.sub(seedsFromDeposit);
                } else {
                  amountRemaining1 = amountRemaining1.sub(min.deposit.amount);
                  depositBdv = depositBdv.add(min.deposit.bdv);
                  depositSeeds = depositSeeds.add(min.deposit.seeds);
                  depositStalk = depositStalk.add(min.deposit.stalk);
                  stalkImpacts = stalkImpacts.slice(1);
                  deposits.push(min.deposit);
                }
              } else if (!bdvImpacted && bdvImpact) {
                // If stalk impacted then use more bdv to offset it
                const min = bdvImpact;
                // console.log(
                //   "using more newer deposit to offset",
                //   min.deposit.season.toString()
                // );
                if (min.deposit.amount.gt(minWeight)) {
                  amountRemaining1 = amountRemaining1.sub(minWeight);
                  const bdvFromDeposit = min.deposit.bdv.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const stalkFromDeposit = min.deposit.stalk.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const seedsFromDeposit = min.deposit.seeds.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );

                  depositBdv = depositBdv.add(bdvFromDeposit);
                  depositSeeds = depositSeeds.add(seedsFromDeposit);
                  depositStalk = depositStalk.add(stalkFromDeposit);

                  deposits.push({
                    amount: bdvFromDeposit,
                    season: min.deposit.season,
                    bdv: bdvFromDeposit,
                    stalk: stalkFromDeposit,
                    seeds: seedsFromDeposit,
                    grownStalk: min.deposit.grownStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                    baseStalk: min.deposit.baseStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                  });
                  min.deposit.amount = min.deposit.amount.sub(bdvFromDeposit);
                  min.deposit.bdv = min.deposit.bdv.sub(bdvFromDeposit);
                  min.deposit.stalk = min.deposit.stalk.sub(stalkFromDeposit);
                  min.deposit.seeds = min.deposit.seeds.sub(seedsFromDeposit);
                } else {
                  amountRemaining1 = amountRemaining1.sub(min.deposit.amount);
                  depositBdv = depositBdv.add(min.deposit.bdv);
                  depositSeeds = depositSeeds.add(min.deposit.seeds);
                  depositStalk = depositStalk.add(min.deposit.stalk);
                  bdvImpacts = bdvImpacts.slice(1);
                  deposits.push(min.deposit);
                }
              } else {
                const min = bdvImpact || stalkImpact;
                // console.log(
                //   "using first bdv/stalkx",
                //   bdvImpacted,
                //   // stalkImpact,
                //   // bdvImpact,
                //   min.deposit.season.toString(),
                // );
                if (min.deposit.amount.gt(minWeight)) {
                  amountRemaining1 = amountRemaining1.sub(minWeight);
                  const bdvFromDeposit = min.deposit.bdv.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const stalkFromDeposit = min.deposit.stalk.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  const seedsFromDeposit = min.deposit.seeds.mulDiv(
                    minWeight,
                    min.deposit.bdv
                  );
                  depositBdv = depositBdv.add(bdvFromDeposit);
                  depositSeeds = depositSeeds.add(seedsFromDeposit);
                  depositStalk = depositStalk.add(stalkFromDeposit);

                  deposits.push({
                    amount: bdvFromDeposit,
                    season: min.deposit.season,
                    bdv: bdvFromDeposit,
                    stalk: stalkFromDeposit,
                    seeds: seedsFromDeposit,
                    grownStalk: min.deposit.grownStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                    baseStalk: min.deposit.baseStalk.mulDiv(
                      minWeight,
                      min.deposit.bdv
                    ),
                  });
                  min.deposit.amount = min.deposit.amount.sub(bdvFromDeposit);
                  min.deposit.bdv = min.deposit.bdv.sub(bdvFromDeposit);
                  min.deposit.stalk = min.deposit.stalk.sub(stalkFromDeposit);
                  min.deposit.seeds = min.deposit.seeds.sub(seedsFromDeposit);
                } else {
                  amountRemaining1 = amountRemaining1.sub(min.deposit.amount);
                  depositBdv = depositBdv.add(min.deposit.bdv);
                  depositSeeds = depositSeeds.add(min.deposit.seeds);
                  depositStalk = depositStalk.add(min.deposit.stalk);
                  if (bdvImpact) {
                    bdvImpacts = bdvImpacts.slice(1);
                  } else {
                    stalkImpacts = stalkImpacts.slice(1);
                  }
                  deposits.push(min.deposit);
                }
              }
            }
            // console.log(amountRemaining1.toHuman());
            const depositsMap: { [season: string]: DepositCrate<TokenValue> } =
              {};
            deposits.map((d) => {
              if (!depositsMap[d.season.toString()]) {
                depositsMap[d.season.toString()] = {
                  season: d.season,
                  amount: TokenValue.fromHuman("0", 6),
                  bdv: TokenValue.fromHuman("0", 6),
                  stalk: TokenValue.fromHuman("0", 10),
                  seeds: TokenValue.fromHuman("0", 6),
                  baseStalk: TokenValue.fromHuman("0", 10),
                  grownStalk: TokenValue.fromHuman("0", 10),
                };
              }
              depositsMap[d.season.toString()].amount = depositsMap[
                d.season.toString()
              ].amount.add(d.amount);
              depositsMap[d.season.toString()].bdv = depositsMap[
                d.season.toString()
              ].bdv.add(d.bdv);
              depositsMap[d.season.toString()].stalk = depositsMap[
                d.season.toString()
              ].stalk.add(d.stalk);
              depositsMap[d.season.toString()].seeds = depositsMap[
                d.season.toString()
              ].seeds.add(d.seeds);
              depositsMap[d.season.toString()].grownStalk = depositsMap[
                d.season.toString()
              ].grownStalk.add(d.grownStalk);
              depositsMap[d.season.toString()].baseStalk = depositsMap[
                d.season.toString()
              ].baseStalk.add(d.baseStalk);
            });
            const tempDeposits: DepositCrate<TokenValue>[] = [];
            Object.keys(depositsMap).forEach((v) => {
              // console.log(
              //   v,
              //   depositsMap[v].bdv.toHuman(),
              //   depositsMap[v].stalk.toHuman()
              // );
              tempDeposits.push(depositsMap[v]);
            });

            deposits = tempDeposits;
            // const resultx = calculateRoot(
            //   depositStalk,
            //   depositSeeds,
            //   depositBdv,
            //   rootTotalSupply,
            //   rootBdv,
            //   rootStalk,
            //   rootseeds,
            //   true
            // );

            // console.log(
            //   rootTotalSupply.toHuman(),
            //   rootBdv.toHuman(),
            //   rootStalk.toHuman(),
            //   '---',
            //   depositBdv.toHuman(),
            //   depositStalk.toHuman(),
            //   resultx.amount.toHuman(),
            //   resultx.min?.toHuman(),
            //   resultx.bdvRatio.toHuman(),
            //   resultx.stalkRatio.toHuman(),
            //   resultx.seedsRatio.toHuman(),
            // );
            // console.log({
            //   bdv: resultx.bdvRatio.toHuman(),
            //   stalk: resultx.stalkRatio.toHuman(),
            //   seeds: resultx.seedsRatio.toHuman(),
            // })
          }

          // for (let i = accountDeposits.length - 1; i >= 0; i--) {
          //   const deposit = accountDeposits[i];
          //   if (deposit.amount.gt(amountRemaining)) {
          //     deposits.push({
          //       season: deposit.season,
          //       amount: amountRemaining,
          //       bdv: amountRemaining,
          //       stalk: deposit.stalk.mulDiv(amountRemaining, deposit.amount),
          //       grownStalk: deposit.grownStalk.mulDiv(
          //         amountRemaining,
          //         deposit.amount
          //       ),
          //       baseStalk: deposit.baseStalk.mulDiv(
          //         amountRemaining,
          //         deposit.amount
          //       ),
          //       seeds: deposit.seeds.mulDiv(amountRemaining, deposit.amount),
          //     });
          //     totalBeanFromDeposit = totalBeanFromDeposit.add(amountRemaining);
          //     amountRemaining = amountRemaining.sub(deposit.amount);
          //   } else {
          //     deposits.push(deposit);
          //     totalBeanFromDeposit = totalBeanFromDeposit.add(deposit.amount);
          //     amountRemaining = amountRemaining.sub(deposit.amount);
          //   }
          //   if (amountRemaining.lte(0)) {
          //     break;
          //   }
          // }

          // deposits.forEach((v) => {
          //   console.log(v.season.toString(), v.amount.toHuman())
          // });
          const result = await beanstalkSdk.root.estimateRoots(
            beanstalkSdk.tokens.BEAN,
            deposits,
            true
          );

          const total = deposits.reduce((v, n) => {
            return n.amount.add(v);
          }, TokenValue.fromHuman("0", 6));

          const allowance =
            await beanstalkSdk.contracts.beanstalk.depositAllowance(
              account!.address,
              beanstalkSdk.contracts.root.address,
              beanstalkSdk.tokens.BEAN.address
            );
          const needAllowance = allowance.lt(total.toBigNumber());

          let priceImpact = TokenValue.fromHuman("0", 18);
          let bdvImpacted = false;
          if (
            result.min?.gt(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
          ) {
            if (result.bdvRatio.lt(result.stalkRatio)) {
              priceImpact = TokenValue.fromHuman("100", 18).sub(
                result.bdvRatio
                  .sub(TokenValue.fromHuman("1", 18))
                  .mul(TokenValue.fromHuman("100", 18))
                  .div(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
              );
            } else if (result.stalkRatio.lt(result.bdvRatio)) {
              priceImpact = TokenValue.fromHuman("100", 18).sub(
                result.stalkRatio
                  .sub(TokenValue.fromHuman("1", 18))
                  .mul(TokenValue.fromHuman("100", 18))
                  .div(result.bdvRatio.sub(TokenValue.fromHuman("1", 18)))
              );
              bdvImpacted = true;
            }
          }

          // console.log(bdvImpacted, priceImpact.toHuman());

          // Estimate
          setMintState({
            output: displayBN(result.amount, 2),
            loading: false,
            minRootsOut: result.amount.sub(
              result.amount.mul(parseFloat(state.slippage) * 10).div(1000)
            ),
            swaps: [],
            workflow: undefined,
            seasons: deposits.map((v) => v.season),
            amounts: deposits.map((v) => v.amount.toBigNumber()),
            totalBdvFromDeposits: displayBN(totalBeanFromDeposit, 2),
            totalBeanIntoSilo: displayBN(totalBeanFromDeposit, 2),
            priceImpact,
            bdvImpacted,
            needAllowance,
            needInternalAllowance: false,
          });

          return;
        }

        const swaps = await getTokensSwapRate(
          state.mintTokens,
          state.mintToFarmBalance ? FarmToMode.INTERNAL : FarmToMode.EXTERNAL
        );
        const swap = swaps[0];
        const amount = swap.estimated;

        let priceImpact = TokenValue.fromHuman("0", 18);
        let bdvImpacted = false;

        const [currentSeason, estimatedDepositBDV] = await Promise.all([
          beanstalkSdk.sun.getSeason(),
          beanstalkSdk.silo.bdv(
            beanstalkSdk.tokens.BEAN,
            beanstalkSdk.tokens.BEAN.fromBlockchain(
              swap.estimatedTokenOut.toBlockchain()
            )
          ),
        ]);

        const result = await beanstalkSdk.root.estimateRoots(
          beanstalkSdk.tokens.BEAN,
          [
            // Mock Deposit for estimation. Note that the season of deposit is expected to
            // equal the current season since we're depositing and minting in one transaction.
            beanstalkSdk.silo.makeDepositCrate(
              beanstalkSdk.tokens.BEAN,
              currentSeason,
              swap.estimatedTokenOut.toBlockchain(),
              estimatedDepositBDV.toBlockchain(),
              currentSeason
            ),
          ],
          true // isDeposit
        );

        if (
          result.min?.gt(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
        ) {
          if (result.bdvRatio.lt(result.stalkRatio)) {
            priceImpact = TokenValue.fromHuman("100", 18).sub(
              result.bdvRatio
                .sub(TokenValue.fromHuman("1", 18))
                .mul(TokenValue.fromHuman("100", 18))
                .div(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
            );
          } else if (result.stalkRatio.lt(result.bdvRatio)) {
            priceImpact = TokenValue.fromHuman("100", 18).sub(
              result.stalkRatio
                .sub(TokenValue.fromHuman("1", 18))
                .mul(TokenValue.fromHuman("100", 18))
                .div(result.bdvRatio.sub(TokenValue.fromHuman("1", 18)))
            );
            bdvImpacted = true;
          }
        }

        setMintState({
          output: displayBN(amount, 2),
          loading: false,
          minRootsOut: swap.estimatedWithSlippage,
          priceImpact,
          swaps,
          workflow: swap.workflow as FarmWorkflow,
          amounts: [],
          seasons: [],
          totalBdvFromDeposits: displayBN(swap.estimatedTokenOut, 2),
          totalBeanIntoSilo: displayBN(swap.estimatedTokenOut, 2),
          bdvImpacted,
          needAllowance: swap.needAllowance,
          needInternalAllowance: swap.needInternalAllowance,
        });
      } catch (e) {
        // console.log(e);
        setOpenTx(false);
        setMintState({
          output: "0",
          loading: false,
          minRootsOut: TokenValue.fromHuman("0", 18),
          priceImpact: TokenValue.fromHuman("0", 18),
          swaps: [],
          workflow: undefined,
          amounts: [],
          seasons: [],
          totalBdvFromDeposits: "",
          totalBeanIntoSilo: "",
          bdvImpacted: false,
          needAllowance: false,
          needInternalAllowance: false,
        });
      }
    }, 500),
    [beanstalkSdk, account]
  );

  const onSignPermit = async () => {
    try {
      const permit = await beanstalkSdk.permit.sign(
        account!.address,
        beanstalkSdk.silo.permitDepositToken(
          account!.address,
          beanstalkSdk.tokens.ROOT.address,
          beanstalkSdk.tokens.BEAN.address,
          mintState.amounts
            .reduce((p, d) => {
              return p.add(d);
            }, BigNumber.from(0))
            .toString()
        )
      );
      onMint(permit);
      return;
    } catch (e: any) {
      toast.error(e.reason);
      return;
    }
  };

  const onMint = async (permit?: SignedPermit) => {
    if (mintState.output === "0") {
      return;
    }

    let txToast;
    const token = mintFormState.mintTokens[0];
    const tokenAmount = TokenValue.fromHuman(
      token.amount,
      token.token.decimals
    );

    try {
      if (token.token.symbol === "BEAN DEPOSIT") {
        if (!permit && mintState.needAllowance) {
          txToast = new TransactionToast({
            loading: `Approving ${token.token.name}...`,
            success: "Approve successful.",
          });
          try {
            const approval =
              await beanstalkSdk.contracts.beanstalk.approveDeposit(
                beanstalkSdk.contracts.root.address,
                beanstalkSdk.tokens.BEAN.address,
                ethers.constants.MaxUint256
              );
            txToast.confirming(approval);
            const receipt = await approval.wait();
            txToast.success(receipt);
            calculate(mintFormState);
            return;
          } catch (e: any) {
            txToast.error(e);
            return;
          }
        }

        mintRootsWithBeanDeposit(
          mintState.seasons,
          mintState.amounts,
          mintState.minRootsOut,
          mintFormState.mintToFarmBalance
            ? FarmToMode.INTERNAL
            : FarmToMode.EXTERNAL,
          permit
        ).then(resetState);
        return;
      }
    } catch (e) {}

    try {
      const swap = mintState.swaps[0];

      // Get allowance
      if (swap?.needAllowance) {
        if (swap.tokenIn instanceof ERC20Token) {
          txToast = new TransactionToast({
            loading: `Approving ${token.token.name}...`,
            success: "Approve successful.",
          });

          const approval = await swap.tokenIn.approve(
            beanstalkSdk.contracts.depot.address, // DEPOT is the spender
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        }
      }
      if (swap?.needInternalAllowance) {
        if (swap.tokenIn instanceof ERC20Token) {
          txToast = new TransactionToast({
            loading: `Approving ${token.token.name}...`,
            success: "Approve successful.",
          });

          const approval = await beanstalkSdk.contracts.beanstalk.approveToken(
            beanstalkSdk.contracts.depot.address, // DEPOT is the spender
            swap.tokenIn.address,
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        }
      }

      // Execute
      txToast = new TransactionToast({
        loading: `Minting ${displayBN(swap.estimated, 2)} ROOT...`,
        success: "Minting successful.",
      });
      const estimate = await mintState.workflow!.estimateGas(tokenAmount, {
        slippage: parseFloat(token.slippage),
      });

      const txn = await mintState.workflow!.execute(
        tokenAmount,
        {
          slippage: parseFloat(token.slippage),
        },
        {
          gasLimit: estimate.add(200000),
        }
      );
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
      resetState();
      return;
    } catch (e) {
      txToast?.error(e);
      console.error(e);
    }
  };

  const renderMintText = () => {
    if (!account) {
      return "Connect Wallet";
    }
    if (mintState.loading) {
      return <Loading size={20} />;
    }
    if (mintState.output !== "0") {
      const token = mintFormState.mintTokens[0];
      const swap = mintState.swaps[0];

      if (swap?.needAllowance) {
        return `Approve ${swap.token.token.name}`;
      }

      if (swap?.needInternalAllowance) {
        return `Approve ${swap.token.token.name} Farm Balance`;
      }

      // Check for permit
      if (
        token.token.symbol === "BEAN DEPOSIT" &&
        !permit &&
        mintState.needAllowance
      ) {
        return `Approve ${token.token.name}`;
      }
    }

    return "MINT";
  };

  const reset = () => {
    onResetMintFormState();
  };

  const resetState = () => {
    onResetMintFormState();
    setPermit(undefined);
    onGetConnectedUserBalance();
  };

  useEffect(() => {
    reset();
    return () => {
      reset();
    };
  }, []);

  useEffect(() => {
    setMintState((state) => ({
      ...state,
      loading: true,
    }));
    setPermit(undefined);
    calculate(mintFormState);
  }, [mintFormState]);

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>TOKENS</div>
            <MintSettingsPopover />
          </div>
          <div className="mintList">
            {mintFormState.mintTokens.map((_, index) => (
              <div key={index}>
                <MintRow index={index} />
                {mintFormState.mintTokens.length > 1 && (
                  <button
                    onClick={() => {
                      onChangeMintFormStateField(
                        "mintTokens",
                        mintFormState.mintTokens.filter(
                          (_, idx) => idx !== index
                        )
                      );
                    }}
                  >
                    <X color="red" size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* <div className="infoContainer">
            <div className="add">
              <button
                onClick={() => {
                  setOpenPicker(true);
                }}
              >
                + Add another token
              </button>
              <TooltipIcon text="You can swap multiple tokens at once to mint Root">
                <HelpCircle size={16} color="#3D3D3D" />
              </TooltipIcon>
            </div>
          </div> */}
        </div>
      </S.Phase>
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>MINT AMOUNT</div>
          </div>
          <S.ContentContainer isLoading={mintState.loading}>
            <div className="inputContainer">
              <NumericFormat
                decimalScale={2}
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                readOnly
                value={mintState.output}
              />

              <div className="rootContainer">
                {apys?.seeds && (
                  <TooltipIcon
                    element={
                      <p>
                        The Variable Bean APY uses a moving average of Beans
                        earned by Stalkholders during recent Seasons to estimate
                        a future rate of return, accounting for Stalk growth.{" "}
                        <br />
                        <a
                          href="https://docs.bean.money/guides/silo/understand-vapy"
                          target="_blank"
                        >
                          Learn more
                        </a>
                      </p>
                    }
                  >
                    <div className="apy">{apys?.seeds}% vAPY</div>
                  </TooltipIcon>
                )}
                <TooltipIcon
                  element={
                    <p>
                      Roots are ERC-20 Standard Tokens that wrap Bean stablecoin
                      deposits and continue to earn yield from new Bean mints.{" "}
                      <a
                        href="https://docs.roottoken.org/introduction"
                        target="_blank"
                      >
                        Learn more
                      </a>
                    </p>
                  }
                >
                  <>
                    <img width={14} height={14} src="/root.svg" />
                    <div>Root</div>
                  </>
                </TooltipIcon>
              </div>
            </div>
          </S.ContentContainer>
        </div>
      </S.Phase>
      {mintFormState.mintToFarmBalance && (
        <S.Phase>
          <S.Info>
            You are minting Roots to your Beanstalk Farm Balance - for more
            information{" "}
            <a
              href="https://docs.bean.money/guides/balances/understand-my-balances#farm-balance-circulating-balance"
              target="_blank"
            >
              click here
            </a>
            .
          </S.Info>
        </S.Phase>
      )}
      <AnimatePresence initial={false}>
        {mintState.output !== "0" && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                opacity: 0,
                height: 0,
                overflow: "hidden",
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <S.Phase>
              <S.TxDetails>
                <S.TxHeader
                  active={openTx}
                  className="header"
                  onClick={() => {
                    setOpenTx((t) => !t);
                  }}
                >
                  <div className="content">
                    <img src="/tx.svg" />
                    <span>Transaction details</span>
                  </div>
                  {openTx ? (
                    <ChevronUp size={14} color="#999999" />
                  ) : (
                    <ChevronDown size={14} color="#999999" />
                  )}
                </S.TxHeader>
                <AnimatePresence initial={false}>
                  {openTx && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      className="collapse"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: {
                          opacity: 0,
                          height: 0,
                          overflow: "hidden",
                        },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div>
                        {mintState.loading && (
                          <div className="loading">
                            <Loading />
                          </div>
                        )}
                        <div className="row">
                          <div>
                            Minimum Output{" "}
                            <TooltipIcon text="The minimum amount you are guaranteed to receive. If the price slips any further, your transaction will revert.">
                              <HelpCircle size={16} color="#3D3D3D" />
                            </TooltipIcon>
                          </div>
                          <div>
                            {/* <img width={16} height={16} src="/root.svg" /> */}
                            {displayBN(mintState.minRootsOut, 2)}
                          </div>
                        </div>
                        <div className="row">
                          <div>
                            Price Impact{" "}
                            <TooltipIcon text="The impact your trade has on the market price of this pool. There may be a large difference between the amount of your input token and what you will receive in the output token">
                              <HelpCircle size={16} color="#3D3D3D" />
                            </TooltipIcon>
                          </div>
                          <div>{displayBN(mintState.priceImpact, 2)}%</div>
                        </div>
                        <div className="routes">
                          <div className="line" />
                          {mintFormState.mintTokens.filter(
                            (v) => v.token.slippage !== 0
                          ).length > 0 ? (
                            <>
                              <div className="list">
                                {mintFormState.mintTokens.map((v, idx) => {
                                  if (v.token.slippage === 0) {
                                    return null;
                                  }
                                  return (
                                    <div className="token" key={idx}>
                                      <img
                                        width={25}
                                        height={25}
                                        src={v.token.icon}
                                      />
                                    </div>
                                  );
                                })}
                                <div className="to">
                                  <ChevronsRight color="#b0b0b0" size={16} />
                                  <img width={25} height={25} src="/bean.svg" />
                                </div>

                                <div className="to">
                                  <ChevronsRight color="#b0b0b0" size={16} />
                                  <img width={25} height={25} src="/silo.svg" />
                                  <img width={25} height={25} src="/bean.svg" />
                                </div>
                              </div>

                              <div className="token">
                                <img width={25} height={25} src="/root.svg" />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="list">
                                {mintState.totalBeanIntoSilo !== "0" && (
                                  <div className="token">
                                    <img
                                      width={25}
                                      height={25}
                                      src="/bean.svg"
                                    />
                                  </div>
                                )}
                                <div className="to">
                                  {mintState.totalBeanIntoSilo !== "0" && (
                                    <ChevronsRight color="#b0b0b0" size={16} />
                                  )}
                                  <img width={25} height={25} src="/silo.svg" />
                                  <img width={25} height={25} src="/bean.svg" />
                                </div>
                              </div>

                              <div className="token">
                                <img width={25} height={25} src="/root.svg" />
                              </div>
                            </>
                          )}
                        </div>
                        <div className="routesText">
                          {mintState.swaps.map((swap) => {
                            if (swap.tokenIn.symbol === "BEAN") {
                              return;
                            }
                            return (
                              <p key={swap.token.token.symbol}>
                                Swap{" "}
                                {displayBN(
                                  TokenValue.fromHuman(
                                    swap.token.amount || "0",
                                    swap.token.token.formatDecimals
                                  ),
                                  swap.token.token.formatDecimals
                                )}{" "}
                                {swap.token.token.name} for{" "}
                                {displayBN(
                                  swap.estimatedTokenOut,
                                  TOKENS.BEAN.formatDecimals
                                )}{" "}
                                Bean
                              </p>
                            );
                          })}
                          {mintFormState.mintTokens[0].token.symbol !==
                            "BEAN DEPOSIT" &&
                            mintState.totalBeanIntoSilo !== "0" && (
                              <p>
                                Deposit {mintState.totalBeanIntoSilo} Bean into
                                the Silo for {mintState.totalBeanIntoSilo} Bean
                                Deposit
                              </p>
                            )}

                          <p>
                            Use {mintState.totalBdvFromDeposits} Bean Deposit to
                            mint {mintState.output} Root
                          </p>

                          <p>
                            Transfer {mintState.output} Root to{" "}
                            {mintFormState.mintToFarmBalance
                              ? "Beanstalk Farm Balance"
                              : "your wallet"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </S.TxDetails>
            </S.Phase>
          </motion.div>
        )}
      </AnimatePresence>
      <S.MintButton
        disabled={mintState.loading || mintState.output === "0"}
        onClick={() => onMint()}
      >
        {renderMintText()}
      </S.MintButton>

      {!permit &&
        mintState.needAllowance &&
        mintFormState.mintTokens[0].token.symbol === "BEAN DEPOSIT" && (
          <>
            <S.Divider>OR</S.Divider>
            <S.MintButton
              disabled={mintState.loading || mintState.output === "0"}
              onClick={onSignPermit}
            >
              Permit and Mint{" "}
              <TooltipIcon
                element={
                  <p>
                    To continue you need to allow Root smart contracts to use
                    your USDC.
                    <br />
                    <br />
                    To do this, we use signed approvals, which allows you to
                    give permission and make a swap in one transaction.
                    <br />
                    <br />
                    <a
                      href="https://eips.ethereum.org/EIPS/eip-2612"
                      target="_blank"
                    >
                      Read more about EIP-2612: permit
                    </a>
                  </p>
                }
              >
                <HelpCircle size={16} color="#3D3D3D" />
              </TooltipIcon>
            </S.MintButton>
          </>
        )}

      <TokenPickerModal
        open={openPicker}
        onClose={() => {
          setOpenPicker(false);
        }}
        onSelect={(token) => {
          onChangeMintFormStateField("mintTokens", [
            ...mintFormState.mintTokens,
            {
              amount: "",
              token,
              slippage: token.slippage.toString(),
            },
          ]);
        }}
      />
    </S.Form>
  );
}
