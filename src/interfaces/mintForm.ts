import { ISiloDeposit } from "./siloDeposit";
import { IToken, TOKENS } from "./token";

export interface IMintFormToken {
  amount: string;
  token: IToken;
  siloDeposit?: ISiloDeposit;
  slippage: string;
}

export interface IMintFormState {
  mintTokens: IMintFormToken[];
  slippage: string;
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
});

export interface IRedeemFormState {
  redeemAmount: string;
  slippage: string;
}

export const getDefaultRedeemFormState = (): IRedeemFormState => ({
  redeemAmount: "",
  slippage: "0.5",
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
