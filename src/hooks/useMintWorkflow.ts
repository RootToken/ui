import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Clipboard,
  Token,
  ERC20Token,
  Workflow,
} from "@beanstalk/sdk";
import { ethers } from "ethers";
import useAppStore from "../store";

export default function useMintWorkflow() {
  const { beanstalkSdk: sdk, account } = useAppStore(
    ({ beanstalkSdk, account }) => ({
      beanstalkSdk,
      account,
    })
  );

  /**
   * @param inputToken The token to swap from
   * @param fromMode The source of the user's `inputToken`.
   * @param toMode The destination for ROOT
   */
  const mintRootsWithSwappedBean = (
    inputToken: Token,
    fromMode : FarmFromMode = FarmFromMode.EXTERNAL,
    toMode : FarmToMode = FarmToMode.EXTERNAL
  ) => {
    if (!account) return null;
    const depositToken = sdk.tokens.BEAN; // always deposit BEAN

    // Use Depot since DepotFacet isn't ready.
    const spender = sdk.contracts.depot.address;
    const depotFarm = sdk.farm.create<{ permit: any }>("DepotMint", "depot");

    // Give DEPOT permission to use `inputToken`.
    depotFarm.add(new sdk.farm.actions.PermitERC20((context) => context.data.permit), {
      onlyExecute: true,
      skip: (amountInStep) => inputToken.hasEnoughAllowance(account.address, spender, amountInStep)
    });

    // DEPOT sends assets to PIPELINE on behalf of the signer.
    depotFarm.add(
      sdk.farm.presets.loadPipeline(inputToken as ERC20Token, fromMode), 
      { onlyExecute: true }
    );

    // Create a new Pipeline workflow.
    const pipe = sdk.farm.createAdvancedPipe();

    // Approve BEANSTALK to use `inputToken` which PIPELINE holds.
    pipe.add(
      function approveBean(amountInStep) {
        return pipe.wrap(
          (inputToken as ERC20Token).getContract(),
          "approve",
          [sdk.contracts.beanstalk.address, ethers.constants.MaxUint256],
          amountInStep,
        );
      },
      {
        // `hasEnoughAllowance()` will return true if `inputToken instanceof NativeToken`
        skip: (amountInStep) => inputToken.hasEnoughAllowance(sdk.contracts.pipeline.address, sdk.contracts.beanstalk.address, amountInStep)
      }
    );

    // This swap will happen inside the Pipeline workflow.
    const swap = sdk.swap.buildSwap(
      inputToken,
      depositToken,
      account.address,
      FarmFromMode.EXTERNAL, // The loadPipeline step always sends to EXTERNAL
      FarmToMode.EXTERNAL, // swap to the EXTERNAL balance in PIPELINE
    );

    // Swap from `inputToken` -> `depositToken` through Beanstalk.
    // No need to do this if the user is starting with BEAN.
    pipe.add(
      [...(swap.getFarm().generators as unknown as any)],
      { skip: inputToken === sdk.tokens.BEAN }
    );
    
    // Now that we just performed the swap, get PIPELINE's balance of `depositToken`.
    // We'll use this to make sure we Deposit all of our available tokens.
    pipe.add(
      () => ({
        target: sdk.contracts.beanstalk.address,
        callData: sdk.contracts.beanstalk.interface.encodeFunctionData("getExternalBalance", [
          sdk.contracts.pipeline.address,
          depositToken.address
        ])
      }),
      { tag: "amountToDeposit" }
    );

    // Approve BEANSTALK to use PIPELINE's `depositToken`.
    pipe.add(
      function approveDepositToken(amountInStep) {
        return pipe.wrap(
          depositToken.getContract(),
          "approve",
          [sdk.contracts.beanstalk.address, ethers.constants.MaxUint256],
          amountInStep,
        );
      },
      {
        skip: (amountInStep) => depositToken.hasEnoughAllowance(sdk.contracts.pipeline.address, sdk.contracts.beanstalk.address, amountInStep)
      }
    );


    // Approve ROOT to use PIPELINE's `depositToken` Deposit.
    pipe.add(
      function approveDeposit(amountInStep) {
        return pipe.wrap(
          sdk.contracts.beanstalk,
          "approveDeposit",
          [sdk.contracts.root.address, depositToken.address, ethers.constants.MaxUint256],
          amountInStep
        );
      }
    );

    // Deposit `depositToken` into the Silo
    pipe.add(
      async function deposit(amountInStep, context) {
        return pipe.wrap(
          sdk.contracts.beanstalk,
          "deposit",
          [
            /* 0 */ depositToken.address,
            /* 1 */ amountInStep, // PASTE HERE
            /* 2 */ FarmFromMode.EXTERNAL
          ],
          amountInStep,
          // Find the step tagged `amountToDeposit`
          // Copy from the first return return value (0)
          // Paste into the second argument of `deposit` (1).
          Clipboard.encodeSlot(context.step.findTag("amountToDeposit"), 0, 1)
        );
      }
    );

    // Mint ROOT
    pipe.add(
      // Notes:
      // 1. amountInStep = ESTIMATED amount from the `deposit()` in previous step
      // 2. To mint ROOT, we need to create a `DepositTransferStruct[]` which ROOT uses
      //    to transfer a deposit from PIPELINE -> itself. Since the deposit estimation returns
      //    the amount deposited (but not the corresponding `season`, `bdv`, etc.), we "mock"
      //    the deposit transfer struct using the current season.
      // 3. ROOT Tokens are sent to PIPELINE's EXTERNAL balance.
      // 4. Slippage is applied to `amountOutRoot` when this step is encoded.
      // 5. This forwards the estimated amount of ROOT minted to the next function.
      //    However, to prevent any dust left behind in PIPELINE, the transferToken
      //    function uses Clipboard to copy the return value from `mint` directly
      //    into its own calldata; this way, if our `amountOutRoot` estimate is incorrect, the user
      //    won't accidentally leave funds behind in PIPEPINE.
      async function mintRoots(amountInStep, context) {
        const [currentSeason, estimatedDepositBDV] = await Promise.all([
          sdk.sun.getSeason(),
          sdk.silo.bdv(depositToken, depositToken.fromBlockchain(amountInStep))
        ]);
  
        const estimate = await sdk.root.estimateRoots(
          depositToken,
          [
            // Mock Deposit for estimation. Note that the season of deposit is expected to 
            // equal the current season since we're depositing and minting in one transaction.
            sdk.silo.makeDepositCrate(depositToken, currentSeason, amountInStep.toString(), estimatedDepositBDV.toBlockchain(), currentSeason)
          ],
          true // isDeposit
        );
  
        // `estimate.amount` contains the expected number of ROOT as a TokenValue.
        const amountOut = estimate.amount.toBigNumber();
        const minRootsOut = Workflow.slip(amountOut, context.data.slippage || 0);
  
        return pipe.wrap(
          sdk.contracts.root,
          "mint",
          [
            [
              {
                token: depositToken.address,
                seasons: [currentSeason],
                amounts: ["0" /* PASTE HERE */]
              }
            ],
            FarmToMode.EXTERNAL, // deliver ROOT to EXTERNAL
            minRootsOut
          ] as Parameters<typeof sdk.contracts.root["mint"]>,
          amountOut,
          // Find the step tagged `amountToDeposit`
          // Copy from the first return return value (0)
          // Paste into the 12th slot of `deposit` (11).
          //  ^ the index is high here because of the nested struct encoding. 
          //    See `examples/pipeline/assembly.ts`.
          Clipboard.encodeSlot(context.step.findTag("amountToDeposit"), 0, 11) // slot 11 = `amounts[0]`
        );
      },
      { tag: "mint" }
    );

    // Approve BEANSTALK to transfer ROOT held in PIPELINE back to ACCOUNT.
    // Skip if we already have approval.
    pipe.add(
      function approveUnloadPipeline(amountInStep) {
        return pipe.wrap(
          sdk.tokens.ROOT.getContract(),
          "approve",
          [sdk.contracts.beanstalk.address, ethers.constants.MaxUint256],
          amountInStep,
        );
      },
      {
        skip: (amountInStep) =>
          sdk.tokens.ROOT.hasEnoughAllowance(sdk.contracts.pipeline.address, sdk.contracts.beanstalk.address, amountInStep)
      }
    );

    // Perform the unload
    pipe.add(
      function unloadPipeline(amountInStep, context) {
        return pipe.wrap(
          sdk.contracts.beanstalk,
          "transferToken",
          [
            /* 0 */ sdk.tokens.ROOT.address,
            /* 1 */ account.address,
            /* 2 */ "0", // PASTE HERE
            /* 3 */ FarmFromMode.EXTERNAL, // use PIPELINE's external balance
            /* 4 */ toMode,
          ],
          amountInStep,
          // Find the step tagged `mint`
          // Copy from the 1st return return value (0)
          // Paste into the 3rd slot (2).
          Clipboard.encodeSlot(context.step.findTag("mint"), 0, 2)
        );
      }
    );
  
    // Tell Depot to execute this Pipeline.
    depotFarm.add(pipe);

    // Return the depotFarm instance.
    return {
      swap,
      workflow: depotFarm,
    };
  };

  return {
    mintRootsWithSwappedBean,
  };
}
