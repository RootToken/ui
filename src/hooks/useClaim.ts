import { FarmFromMode, FarmToMode, TokenValue, Token } from "@beanstalk/sdk";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import { BigNumber } from "@ethersproject/bignumber";
import TransactionToast from "../components/Common/TransactionToast";
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
    tokenIn: Token,
    tokenInAmount: TokenValue,
    seasons: BigNumber[],
    tokenOut: Token,
    slippage: number
  ) => {
    const txToast = new TransactionToast({
      loading: `Claiming Bean...`,
      success: "Claim successful.",
    });
    try {
      // @TODO add a farm step here to claim then swap
      const farm = beanstalkSdk.farm.create();

      farm.add(
        new beanstalkSdk.farm.actions.ClaimWithdrawals(
          tokenIn.address,
          seasons,
          FarmToMode.EXTERNAL
        )
      );
      farm.add(new beanstalkSdk.farm.actions.PermitERC20(permit));

      const swap = beanstalkSdk.swap.buildSwap(
        tokenIn,
        tokenOut,
        account!.address,
        FarmFromMode.EXTERNAL,
        FarmToMode.EXTERNAL
      );

      farm.add(
        // @ts-ignore
        ...swap.getFarm().generators
      );

      const txn = await farm.execute(tokenInAmount, { slippage });
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
    } catch (e) {
      txToast.error(e);
      throw e;
    }
  };

  const claimWithdrawals = async (token: Token, seasons: BigNumber[]) => {
    const txToast = new TransactionToast({
      loading: `Claiming Bean...`,
      success: "Claim successful.",
    });
    try {
      const txn = await beanstalkSdk.contracts.beanstalk.claimWithdrawals(
        token.address,
        seasons,
        FarmToMode.EXTERNAL
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
    claimBeanDepositAndSwap,
    claimWithdrawals,
  };
}
