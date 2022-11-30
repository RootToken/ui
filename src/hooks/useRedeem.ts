import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Clipboard,
  Token,
  FarmWorkflow,
  ERC20Token,
  Workflow,
} from "@beanstalk/sdk";
import { ethers } from "ethers";
import { swapRouterContract, estimateRootToBean } from "../util/uniswap";
import TransactionToast from "../components/Common/TransactionToast";
import { ISiloDeposit } from "../interfaces/siloDeposit";
import useAppStore from "../store";
import { TOKENS } from "../interfaces/token";

export default function useRedeem() {
  const { beanstalkSdk, account, erc20Contracts } = useAppStore(
    ({ beanstalkSdk, account, erc20Contracts }) => ({
      beanstalkSdk,
      account,
      erc20Contracts,
    })
  );

  const redeemBeanDepositWithRoot = async (
    deposits: ISiloDeposit[],
    maxRootsIn: TokenValue
  ) => {
    const txToast = new TransactionToast({
      loading: `Redeeming Root...`,
      success: "Redeem successful.",
    });
    try {
      const seasons: ethers.BigNumber[] = [];
      const amounts: ethers.BigNumber[] = [];
      deposits.forEach((deposit) => {
        seasons.push(deposit.season);
        amounts.push(deposit.amount.toBigNumber());
      });

      const txn = await beanstalkSdk.contracts.root.redeem(
        [
          {
            token: beanstalkSdk.tokens.BEAN.address,
            seasons,
            amounts,
          },
        ],
        FarmFromMode.EXTERNAL,
        maxRootsIn.toBlockchain()
      );
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  const redeemBeanDepositWithInternalRoot = async (
    amount: TokenValue,
    deposits: ISiloDeposit[],
    maxRootsIn: TokenValue,
    internalRoot?: TokenValue
  ) => {
    const txToast = new TransactionToast({
      loading: `Redeeming Root...`,
      success: "Redeem successful.",
    });
    try {
      const seasons: ethers.BigNumberish[] = [];
      const amounts: ethers.BigNumberish[] = [];

      deposits.forEach((deposit) => {
        seasons.push(deposit.season.toString());
        amounts.push(deposit.amount.toBlockchain());
      });

      const token = beanstalkSdk.tokens.ROOT;

      const farm = beanstalkSdk.farm.create("Redeem", "depot");
      const pipe = beanstalkSdk.farm.createAdvancedPipe();

      if (internalRoot) {
        farm.add(
          () => ({
            target: beanstalkSdk.contracts.beanstalk.address,
            callData:
              beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
                "transferToken",
                [
                  token.address, //
                  account!.address, //
                  internalRoot.toBlockchain(),
                  FarmFromMode.INTERNAL, //
                  FarmToMode.EXTERNAL, //
                ]
              ),
          }),
          { onlyExecute: true }
        );
      }
      farm.add(
        beanstalkSdk.farm.presets.loadPipeline(token, FarmFromMode.EXTERNAL)
      );
      farm.add(
        pipe.add([
          async (amountInStep) => {
            const amountOut = amountInStep; // FIXME
            return pipe.wrap(
              beanstalkSdk.contracts.root,
              "redeem",
              [
                [
                  {
                    token: beanstalkSdk.tokens.BEAN.address,
                    seasons,
                    amounts,
                  },
                ],
                FarmToMode.EXTERNAL, // send tokens to PIPELINE's external balance
                maxRootsIn.toBlockchain(),
              ],
              amountOut // pass this to next element
            );
          },
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "transferDeposits",
              [
                /*  36 */ beanstalkSdk.contracts.pipeline.address,
                /*  68 */ account!.address,
                /* 100 */ beanstalkSdk.tokens.BEAN.address, // Will be overwritten by advancedData
                /* 132 */ seasons, // use PIPELINE's external balance
                /* 164 */ amounts, // TOOD: make this a parameter
              ],
              amountInStep
            ),
        ])
      );

      // @TODO add a farm step here to withdraw
      // farm.add(
      //   new beanstalkSdk.farm.actions.WithdrawDeposits(
      //     beanstalkSdk.tokens.BEAN.address,
      //     seasons,
      //     amounts
      //   )
      // );

      const txn = await farm.execute(amount, {
        slippage: 0.5,
      });
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  const redeemBeanWithRoot = async (
    amountIn: TokenValue,
    internalAmountIn: TokenValue,
    amountOutMinimum: TokenValue,
    toMode: FarmToMode
  ) => {
    if (!account) return null;
    const bean = beanstalkSdk.tokens.BEAN; // always deposit BEAN
    const root = beanstalkSdk.tokens.ROOT; // always deposit BEAN
    const txToast = new TransactionToast({
      loading: `Redeeming Root...`,
      success: "Redeem successful.",
    });
    try {
      // Use Depot since DepotFacet isn't ready.
      // const spender = sdk.contracts.depot.address;
      const depotFarm = beanstalkSdk.farm.create<{ permit: any }>(
        "DepotMint",
        "depot"
      ) as FarmWorkflow;

      // If the user is using internal balance then transfer it to depot
      if (internalAmountIn.gt(0)) {
        depotFarm.add(
          () => ({
            target: beanstalkSdk.contracts.beanstalk.address,
            callData:
              beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
                "transferToken",
                [
                  root.address, //
                  account.address, //
                  internalAmountIn.toBlockchain(),
                  FarmFromMode.INTERNAL, //
                  FarmToMode.EXTERNAL, //
                ]
              ),
          }),
          { onlyExecute: true }
        );
      }

      // DEPOT sends assets to PIPELINE on behalf of the signer.
      depotFarm.add(
        beanstalkSdk.farm.presets.loadPipeline(
          root as ERC20Token,
          FarmFromMode.EXTERNAL
        ),
        { onlyExecute: true }
      );

      // Create a new Pipeline workflow.
      const pipe = beanstalkSdk.farm.createAdvancedPipe();

      pipe.add(
        function approveUniswap(amountInStep) {
          return pipe.wrap(
            beanstalkSdk.tokens.ROOT.getContract(),
            "approve",
            [swapRouterContract.address, ethers.constants.MaxUint256],
            amountInStep
          );
        },
        {
          skip: () =>
            beanstalkSdk.tokens.ROOT.hasEnoughAllowance(
              beanstalkSdk.contracts.pipeline.address,
              swapRouterContract.address,
              amountIn
            ),
        }
      );

      pipe.add(async function swapRootForBean(amountInStep, context) {
        const { fee } = await estimateRootToBean(amountIn);
        return pipe.wrap(
          swapRouterContract,
          "exactInputSingle",
          [
            {
              tokenIn: root.address,
              tokenOut: bean.address,
              fee,
              recipient: beanstalkSdk.contracts.pipeline.address,
              deadline: Math.floor(Date.now() / 1000) + 60 * 5,
              amountIn: amountIn.toBlockchain(),
              amountOutMinimum: amountOutMinimum.toBlockchain(),
              sqrtPriceLimitX96: 0,
            },
          ],
          amountInStep
        );
      });

      pipe.add(
        () => ({
          target: beanstalkSdk.contracts.beanstalk.address,
          callData:
            beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
              "getExternalBalance",
              [beanstalkSdk.contracts.pipeline.address, bean.address]
            ),
        }),
        { tag: "beanAmount" }
      );

      // Approve BEANSTALK to transfer assets held in PIPELINE back to ACCOUNT.
      pipe.add(function approveUnloadPipeline(amountInStep) {
        return pipe.wrap(
          (bean as ERC20Token).getContract(),
          "approve",
          [
            beanstalkSdk.contracts.beanstalk.address,
            ethers.constants.MaxUint256,
          ],
          ethers.constants.MaxUint256
        );
      });

      // Perform the unload
      pipe.add(function unloadPipeline(amountInStep, context) {
        return pipe.wrap(
          beanstalkSdk.contracts.beanstalk,
          "transferToken",
          [
            /* 0 */ beanstalkSdk.tokens.BEAN.address,
            /* 1 */ account.address,
            /* 2 */ "0", // PASTE HERE
            /* 3 */ FarmFromMode.EXTERNAL, // use PIPELINE's external balance
            /* 4 */ toMode,
          ],
          amountInStep,
          // Find the step tagged `mint`
          // Copy from the 1st return return value (0)
          // Paste into the 3rd slot (2).
          Clipboard.encodeSlot(context.step.findTag("beanAmount"), 0, 2)
        );
      });

      // Tell Depot to execute this Pipeline.
      depotFarm.add(pipe);

      const txn = await depotFarm.execute(amountIn, {
        slippage: 0.5,
      });
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  const redeemERC20WithRoot = async (
    amountIn: TokenValue,
    internalAmountIn: TokenValue,
    tokenOut: Token,
    amountOutMinimum: TokenValue,
    toMode: FarmToMode
  ) => {
    if (!account) return null;
    const bean = beanstalkSdk.tokens.BEAN; // always deposit BEAN
    const root = beanstalkSdk.tokens.ROOT; // always deposit BEAN
    const txToast = new TransactionToast({
      loading: `Redeeming Root...`,
      success: "Redeem successful.",
    });
    try {
      // Use Depot since DepotFacet isn't ready.
      // const spender = sdk.contracts.depot.address;
      const depotFarm = beanstalkSdk.farm.create<{ permit: any }>(
        "DepotMint",
        "depot"
      ) as FarmWorkflow;

      // If the user is using internal balance then transfer it to depot
      if (internalAmountIn.gt(0)) {
        depotFarm.add(
          () => ({
            target: beanstalkSdk.contracts.beanstalk.address,
            callData:
              beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
                "transferToken",
                [
                  root.address, //
                  account.address, //
                  internalAmountIn.toBlockchain(),
                  FarmFromMode.INTERNAL, //
                  FarmToMode.EXTERNAL, //
                ]
              ),
          }),
          { onlyExecute: true }
        );
      }

      // DEPOT sends assets to PIPELINE on behalf of the signer.
      depotFarm.add(
        beanstalkSdk.farm.presets.loadPipeline(
          root as ERC20Token,
          FarmFromMode.EXTERNAL
        ),
        { onlyExecute: true }
      );

      // Create a new Pipeline workflow.
      const pipe = beanstalkSdk.farm.createAdvancedPipe();

      pipe.add(
        function approveUniswap(amountInStep) {
          return pipe.wrap(
            beanstalkSdk.tokens.ROOT.getContract(),
            "approve",
            [swapRouterContract.address, ethers.constants.MaxUint256],
            amountInStep
          );
        },
        {
          skip: () =>
            beanstalkSdk.tokens.ROOT.hasEnoughAllowance(
              beanstalkSdk.contracts.pipeline.address,
              swapRouterContract.address,
              amountIn
            ),
        }
      );

      pipe.add(async function swapRootForBean(amountInStep, context) {
        const { fee } = await estimateRootToBean(amountIn);
        return pipe.wrap(
          swapRouterContract,
          "exactInputSingle",
          [
            {
              tokenIn: root.address,
              tokenOut: bean.address,
              fee,
              recipient: beanstalkSdk.contracts.pipeline.address,
              deadline: Math.floor(Date.now() / 1000) + 60 * 5,
              amountIn: amountIn.toBlockchain(),
              amountOutMinimum: "0", // Ignore this - tx will revert on BEAN -> ERC20 swap if there's a big slippage
              sqrtPriceLimitX96: 0,
            },
          ],
          amountInStep
        );
      });

      pipe.add(
        () => ({
          target: beanstalkSdk.contracts.beanstalk.address,
          callData:
            beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
              "getExternalBalance",
              [beanstalkSdk.contracts.pipeline.address, bean.address]
            ),
        }),
        { tag: "beanAmount" }
      );

      // Approve BEANSTALK to use BEAN for swap
      pipe.add(function approveBean() {
        return pipe.wrap(
          (bean as ERC20Token).getContract(),
          "approve",
          [
            beanstalkSdk.contracts.beanstalk.address,
            ethers.constants.MaxUint256,
          ],
          ethers.constants.MaxUint256
        );
      });

      const swap = beanstalkSdk.swap.buildSwap(
        bean,
        tokenOut,
        beanstalkSdk.contracts.pipeline.address,
        FarmFromMode.EXTERNAL,
        FarmToMode.EXTERNAL
      );

      swap.getFarm().generators.map(async (step: any) => {
        if (step.name === "exchangeUnderlying") {
          pipe.add(async function exchangeUnderlying(amountInStep, context) {
            return pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "exchangeUnderlying",
              [
                step.pool,
                step.tokenIn.address,
                step.tokenOut.address,
                "0",
                swap.getFarm().generators.find((step) => step.name === "exchange") ? "0" : amountOutMinimum.toBlockchain(),
                step.fromMode,
                step.toMode,
              ],
              amountInStep,
              Clipboard.encodeSlot(context.step.findTag("beanAmount"), 0, 3)
            );
          });
        } else if (step.name === "exchange") {
          pipe.add(
            () => ({
              target: beanstalkSdk.contracts.beanstalk.address,
              callData:
                beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
                  "getExternalBalance",
                  [
                    beanstalkSdk.contracts.pipeline.address,
                    step.tokenIn.address,
                  ]
                ),
            }),
            { tag: "tokenAfterSwap" }
          );

          pipe.add(async function exchangeUnderlying(amountInStep, context) {
            return pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "exchange",
              [
                step.pool,
                step.registry,
                step.tokenIn.address,
                step.tokenOut.address,
                "0",
                amountOutMinimum.toBlockchain(),
                step.fromMode,
                step.toMode,
              ],
              amountInStep,
              Clipboard.encodeSlot(context.step.findTag("tokenAfterSwap"), 0, 5)
            );
          });
        }
      });

      pipe.add(
        () => ({
          target: beanstalkSdk.contracts.beanstalk.address,
          callData:
            beanstalkSdk.contracts.beanstalk.interface.encodeFunctionData(
              "getExternalBalance",
              [beanstalkSdk.contracts.pipeline.address, tokenOut.address]
            ),
        }),
        { tag: "tokenOutAmount" }
      );

      // Approve BEANSTALK to transfer asset back to user account
      if (tokenOut.symbol === "USDT") {
        pipe.add(
          function approveUnloadPipelineSetZero(amountInStep) {
            return pipe.wrap(
              erc20Contracts[TOKENS.USDT.address],
              "approve",
              [beanstalkSdk.contracts.beanstalk.address, "0"],
              amountInStep
            );
          },
          {
            skip: () =>
              tokenOut.hasEnoughAllowance(
                beanstalkSdk.contracts.pipeline.address,
                beanstalkSdk.contracts.beanstalk.address,
                amountOutMinimum.add(amountOutMinimum)
              ),
          }
        );
      }

      pipe.add(
        function approveUnloadPipeline(amountInStep) {
          return pipe.wrap(
            (tokenOut as ERC20Token).getContract(),
            "approve",
            [
              beanstalkSdk.contracts.beanstalk.address,
              ethers.constants.MaxUint256,
            ],
            amountInStep
          );
        },
        {
          skip: () =>
            tokenOut.hasEnoughAllowance(
              beanstalkSdk.contracts.pipeline.address,
              beanstalkSdk.contracts.beanstalk.address,
              amountOutMinimum.add(amountOutMinimum)
            ),
        }
      );

      // Perform the unload
      pipe.add(function unloadPipeline(amountInStep, context) {
        return pipe.wrap(
          beanstalkSdk.contracts.beanstalk,
          "transferToken",
          [
            /* 0 */ tokenOut.address,
            /* 1 */ account.address,
            /* 2 */ "0", // PASTE HERE
            /* 3 */ FarmFromMode.EXTERNAL, // use PIPELINE's external balance
            /* 4 */ toMode,
          ],
          amountInStep,
          // Find the step tagged `mint`
          // Copy from the 1st return return value (0)
          // Paste into the 3rd slot (2).
          Clipboard.encodeSlot(context.step.findTag("tokenOutAmount"), 0, 2)
        );
      });

      // Tell Depot to execute this Pipeline.
      depotFarm.add(pipe);

      const estGas = await depotFarm.estimateGas(amountIn, {
        slippage: 0.5,
      });

      const txn = await depotFarm.execute(
        amountIn,
        {
          slippage: 0.5,
        },
        {
          gasLimit: estGas.add(200000),
        }
      );
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  return {
    redeemERC20WithRoot,
    redeemBeanWithRoot,
    redeemBeanDepositWithRoot,
    redeemBeanDepositWithInternalRoot,
  };
}
