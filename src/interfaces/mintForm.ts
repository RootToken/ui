import { ISiloDeposit } from "./siloDeposit";
import { IToken, TOKENS } from "./token";

export interface IMintFormToken {
  amount: string;
  token: IToken;
  siloDeposit?: ISiloDeposit;
}

export interface IMintFormState {
  mintAmount: string;
  mintTokens: IMintFormToken[];
  slippage: string;
}

export const defaultMintFormState: IMintFormState = {
  mintAmount: "",
  mintTokens: [
    {
      amount: "",
      token: TOKENS.ETH,
    },
  ],
  slippage: "1",
};
