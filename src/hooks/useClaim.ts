import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Clipboard,
  Token,
} from "@beanstalk/sdk";
import { DepositTransferStruct } from "@beanstalk/sdk/dist/types/constants/generated/Beanstalk/Root";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import TransactionToast from "../components/Common/TransactionToast";
import { ISiloClaimable, ISiloDeposit } from "../interfaces/siloDeposit";
import useAppStore from "../store";

export default function useClaim() {
  const { beanstalkSdk, account } = useAppStore(
    ({ beanstalkSdk, account }) => ({
      beanstalkSdk,
      account,
    })
  );

  const claimBeanDepositAndSwap = async (
    permit: SignedPermit,
    amount: TokenValue,
    tokenOut: Token,
    claimableDeposits: ISiloClaimable[],
    slippage: number,
  ) => {
    const txToast = new TransactionToast({
      loading: `Redeeming Root...`,
      success: "Redeem successful.",
    });
    try {
      const bean = beanstalkSdk.tokens.BEAN;

      // @TODO add a farm step here to claim then swap


      const swap = beanstalkSdk.swap.buildSwap(
        tokenOut,
        bean,
        account!.address,
        FarmFromMode.EXTERNAL,
        FarmToMode.EXTERNAL
      );

      const txn = await swap.execute(amount, slippage);
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  return {
    claimBeanDepositAndSwap,
  };
}
