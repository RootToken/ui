import { BigNumber } from "@ethersproject/bignumber";

export const toBN = (v: number, decimals: number = 18): BigNumber => {
  console.log(Math.ceil(v ** decimals));
  return BigNumber.from(Math.ceil(v ** decimals));
};
