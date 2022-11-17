import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Clipboard,
  Token,
} from "@beanstalk/sdk";
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
      const seasons: ethers.BigNumberish[] = [];
      const amounts: ethers.BigNumberish[] = [];

      deposits.forEach((deposit) => {
        seasons.push(deposit.season.toString());
        amounts.push(deposit.amount.toBlockchain());
      });

      console.log("SDSDJSD", amount.toHuman())

      seasons.forEach((v) => console.log(v.toString()))
      amounts.forEach((v) => console.log(v.toString()))

      const token = beanstalkSdk.tokens.ROOT;

      const depotFarm = beanstalkSdk.farm.create<{ permit: any }>(
        "DepotMint",
        "depot"
      );

      // Give DEPOT permission to use `inputToken`.
      depotFarm.add(new beanstalkSdk.farm.actions.PermitERC20(permit), {
        onlyExecute: true,
        // skip: (amountInStep) => inputToken.hasEnoughAllowance(account.address, spender, amountInStep)
      });

      depotFarm.add(
        beanstalkSdk.farm.presets.loadPipeline(token, FarmFromMode.EXTERNAL),
        { onlyExecute: true }
      );

      const pipe = beanstalkSdk.farm.createAdvancedPipe();

      pipe.add(function redeem(amountInStep) {
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
          amountInStep // pass this to next element
        );
      }, {});

      pipe.add(function transfer(amountInStep) {
        return pipe.wrap(
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
        );
      }, {});

      pipe.add(
        () => ({
          target: beanstalkSdk.contracts.root.address,
          callData: beanstalkSdk.contracts.root.interface.encodeFunctionData(
            "balanceOf",
            [beanstalkSdk.contracts.pipeline.address]
          ),
        }),
        { tag: "rootLeftOver" }
      );

      pipe.add(async function deposit(amountInStep, context) {
        return pipe.wrap(
          beanstalkSdk.contracts.root,
          "transfer",
          [
            /* 0 */ account!.address,
            /* 1 */ amountInStep, // PASTE HERE
          ],
          amountInStep,
          // Find the step tagged `amountToDeposit`
          // Copy from the first return return value (0)
          // Paste into the second argument of `deposit` (1).
          Clipboard.encodeSlot(context.step.findTag("rootLeftOver"), 0, 1)
        );
      });

      depotFarm.add(pipe);


      // @TODO add a farm step here to withdraw
      depotFarm.add(
        new beanstalkSdk.farm.actions.WithdrawDeposits(
          beanstalkSdk.tokens.BEAN.address,
          seasons,
          amounts
        )
      );

      const txn = await depotFarm.execute(amount, {
        slippage: 0.1,
        permit: '',
      })
      
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
