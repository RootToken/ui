import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Clipboard,
  Token,
} from "@beanstalk/sdk";
import { DepositTransferStruct } from "@beanstalk/sdk/dist/types/constants/generated/Beanstalk/Root";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import { ethers } from "ethers";
import TransactionToast from "../components/Common/TransactionToast";
import { ISiloDeposit } from "../interfaces/siloDeposit";
import useAppStore from "../store";

export default function useRedeem() {
  const { beanstalkSdk, account } = useAppStore(
    ({ beanstalkSdk, account }) => ({
      beanstalkSdk,
      account,
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
      const transfer: DepositTransferStruct = {
        token: beanstalkSdk.tokens.BEAN.address,
        seasons: [],
        amounts: [],
      };
      deposits.forEach((deposit) => {
        transfer.seasons.push(deposit.season.toString());
        transfer.amounts.push(deposit.amount.toBlockchain());
      });

      const txn = await beanstalkSdk.contracts.root.redeem(
        [transfer],
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

  const redeemBeanDepositAndWithdrawWithRoot = async (
    permit: SignedPermit,
    amount: TokenValue,
    deposits: ISiloDeposit[],
    maxRootsIn: TokenValue
  ) => {
    const txToast = new TransactionToast({
      loading: `Redeeming Root...`,
      success: "Redeem successful.",
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

      const token = beanstalkSdk.tokens.ROOT;

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
          async (amountInStep) => {
            const amountOut = amountInStep; // FIXME
            return pipe.wrap(
              beanstalkSdk.contracts.root,
              "redeem",
              [
                [
                  transfer,
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
                /* 132 */ transfer.seasons, // use PIPELINE's external balance
                /* 164 */ transfer.amounts, // TOOD: make this a parameter
              ],
              amountInStep,
            ),
        ])
      );

      // @TODO add a farm step here to withdraw
      farm.add(new beanstalkSdk.farm.actions.WithdrawDeposits(transfer.token, transfer.seasons, transfer.amounts))

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

  return {
    redeemBeanDepositWithRoot,
    redeemBeanDepositAndWithdrawWithRoot,
  };
}
