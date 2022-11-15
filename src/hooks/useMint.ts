import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Clipboard,
  Token,
} from "@beanstalk/sdk";
import { DepositTransferStruct } from "@beanstalk/sdk/dist/types/constants/generated/Beanstalk/Root";
import { FarmWorkflow } from "@beanstalk/sdk/dist/types/lib/farm/farm";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import { ethers } from "ethers";
import TransactionToast from "../components/Common/TransactionToast";
import { ISiloDeposit } from "../interfaces/siloDeposit";
import useAppStore from "../store";

export default function useMint() {
  const { beanstalkSdk, account } = useAppStore(
    ({ beanstalkSdk, account }) => ({
      beanstalkSdk,
      account,
    })
  );

  const mintRootsWithBean = async (
    permit: SignedPermit,
    amount: TokenValue,
    minRootsOut: TokenValue
  ) => {
    const txToast = new TransactionToast({
      loading: `Minting Root...`,
      success: "Mint successful.",
    });
    try {
      const token = beanstalkSdk.tokens.BEAN;
      const farm = beanstalkSdk.farm.create();
      const pipe = beanstalkSdk.farm.createAdvancedPipe();

      farm.add(
        beanstalkSdk.farm.presets.loadPipeline(
          token,
          FarmFromMode.EXTERNAL,
          permit
        )
      );
      farm.add(
        pipe.add([
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.tokens.BEAN.getContract(),
              "approve",
              [
                beanstalkSdk.contracts.beanstalk.address,
                ethers.constants.MaxUint256,
              ],
              amountInStep // pass-thru
            ),
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "approveDeposit",
              [
                beanstalkSdk.contracts.root.address,
                token.address,
                ethers.constants.MaxUint256,
              ],
              amountInStep // pass-thru
            ),
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.tokens.ROOT.getContract(),
              "approve",
              [
                beanstalkSdk.contracts.beanstalk.address,
                ethers.constants.MaxUint256,
              ],
              amountInStep // pass-thru
            ),
          async (amountInStep) => {
            return pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "deposit",
              [token.address, amountInStep, FarmFromMode.EXTERNAL],
              amountInStep
            );
          },
          async (amountInStep) => {
            const season = await beanstalkSdk.sun.getSeason();
            const amountOut = amountInStep; // FIXME
            return pipe.wrap(
              beanstalkSdk.contracts.root,
              "mint",
              [
                [
                  {
                    token: token.address,
                    seasons: [season], // FIXME: will fail if season flips during execution
                    amounts: [amountInStep], //
                  },
                ],
                FarmToMode.EXTERNAL, // send tokens to PIPELINE's external balance
                minRootsOut.toBlockchain(),
              ],
              amountOut // pass this to next element
            );
          },
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "transferToken",
              [
                /*  36 */ beanstalkSdk.tokens.ROOT.address,
                /*  68 */ account!.address,
                /* 100 */ "0", // Will be overwritten by advancedData
                /* 132 */ FarmFromMode.EXTERNAL, // use PIPELINE's external balance
                /* 164 */ FarmToMode.EXTERNAL, // TOOD: make this a parameter
              ],
              amountInStep,
              // Copy the first return
              Clipboard.encode([4, 32, 100])
            ),
        ])
      );
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

  const mintRootsWithBeanDeposit = async (
    permit: SignedPermit,
    deposits: ISiloDeposit[],
    minRootsOut: TokenValue
  ) => {
    const txToast = new TransactionToast({
      loading: `Minting Root...`,
      success: "Mint successful.",
    });
    try {
      const transfer: DepositTransferStruct = {
        token: beanstalkSdk.tokens.BEAN.address,
        seasons: [],
        amounts: [],
      };
      deposits.forEach((deposit) => {
        transfer.seasons.push(deposit.season.toString());
        transfer.amounts.push(deposit.amount.toBlockchain());
      });

      const txn = await beanstalkSdk.root.mint(
        [transfer],
        FarmToMode.EXTERNAL,
        minRootsOut.toBigNumber(),
        permit
      );
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      console.log(e);
      txToast.error(e);
      throw e;
    }
  };

  const mintRootsWithSwappedBean = async (
    token: Token,
    amount: TokenValue,
    slippage: number,
    minRootsOut: TokenValue
  ) => {
    const txToast = new TransactionToast({
      loading: `Minting Root...`,
      success: "Mint successful.",
    });
    try {
      const bean = beanstalkSdk.tokens.BEAN;

      const swap = beanstalkSdk.swap.buildSwap(
        token,
        bean,
        account!.address,
        FarmFromMode.EXTERNAL,
        FarmToMode.INTERNAL
      );

      const farm = swap.getFarm();
      const pipe = beanstalkSdk.farm.createAdvancedPipe();

      farm.add(
        beanstalkSdk.farm.presets.loadPipeline(bean, FarmFromMode.INTERNAL)
      );

      farm.add(
        pipe.add([
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.tokens.BEAN.getContract(),
              "approve",
              [
                beanstalkSdk.contracts.beanstalk.address,
                ethers.constants.MaxUint256,
              ],
              amountInStep // pass-thru
            ),
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "approveDeposit",
              [
                beanstalkSdk.contracts.root.address,
                bean.address,
                ethers.constants.MaxUint256,
              ],
              amountInStep // pass-thru
            ),
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.tokens.ROOT.getContract(),
              "approve",
              [
                beanstalkSdk.contracts.beanstalk.address,
                ethers.constants.MaxUint256,
              ],
              amountInStep // pass-thru
            ),
          async (amountInStep) => {
            return pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "deposit",
              [bean.address, amountInStep, FarmFromMode.EXTERNAL],
              amountInStep
            );
          },
          async (amountInStep) => {
            const season = await beanstalkSdk.sun.getSeason();
            const amountOut = amountInStep; // FIXME
            return pipe.wrap(
              beanstalkSdk.contracts.root,
              "mint",
              [
                [
                  {
                    token: bean.address,
                    seasons: [season], // FIXME: will fail if season flips during execution
                    amounts: [amountInStep], //
                  },
                ],
                FarmToMode.EXTERNAL, // send tokens to PIPELINE's external balance
                minRootsOut.toBlockchain(),
              ],
              amountOut // pass this to next element
            );
          },
          (amountInStep) =>
            pipe.wrap(
              beanstalkSdk.contracts.beanstalk,
              "transferToken",
              [
                /*  36 */ beanstalkSdk.tokens.ROOT.address,
                /*  68 */ account!.address,
                /* 100 */ "0", // Will be overwritten by advancedData
                /* 132 */ FarmFromMode.EXTERNAL, // use PIPELINE's external balance
                /* 164 */ FarmToMode.EXTERNAL, // TOOD: make this a parameter
              ],
              amountInStep,
              // Copy the first return
              Clipboard.encode([4, 32, 100])
            ),
        ])
      );

      const txn = await farm.execute(amount, {
        slippage,
      });
      txToast.confirming(txn);

      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  return {
    mintRootsWithBean,
    mintRootsWithBeanDeposit,
    mintRootsWithSwappedBean,
  };
}
