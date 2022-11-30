import { Token, TokenValue, Workflow } from "@beanstalk/sdk";
import { SwapOperation } from "@beanstalk/sdk/dist/types/lib/swap/SwapOperation";
import { IToken, TOKENS } from "./token";

export interface IMintFormToken {
  amount: string;
  token: IToken;
  slippage: string;
}

export interface IMintFormState {
  mintTokens: IMintFormToken[];
  slippage: string;
  mintToFarmBalance: boolean;
}

export const getDefaultMintFormState = (): IMintFormState => ({
  mintTokens: [
    {
      amount: "",
      token: TOKENS.ETH,
      slippage: "0.5",
    },
  ],
  slippage: "0.5",
  mintToFarmBalance: false,
});

export interface IRedeemFormState {
  redeemAmount: string;
  slippage: string;
  redeemToWallet: boolean;
  redeemToken: IToken;
}

export const getDefaultRedeemFormState = (): IRedeemFormState => ({
  redeemAmount: "",
  redeemToWallet: true,
  slippage: "0.5",
  redeemToken: TOKENS.ETH,
});

export interface IClaimFormState {
  claimAmount: string;
  slippage: string;
  claimToken: IClaimFormToken;
}

export interface IClaimFormToken {
  amount: string;
  token: IToken;
  slippage: string;
}

export const getDefaultClaimFormState = (): IClaimFormState => ({
  claimAmount: "",
  slippage: "0.5",
  claimToken: {
    amount: "",
    slippage: "0.5",
    token: TOKENS.ETH,
  },
});

export interface ISwapToken {
  estimatedTokenOut: TokenValue;
  estimated: TokenValue;
  estimatedWithSlippage: TokenValue;
  token: IMintFormToken;
  error?: string;
  swap: SwapOperation;
  workflow?: Workflow;
  needAllowance: boolean;
  needInternalAllowance: boolean;
  tokenIn: Token;
  internalAmount: TokenValue | undefined;
}
