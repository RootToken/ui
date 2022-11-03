import BigNumber from 'bignumber.js';
/**
 * Display a BigNumber with the specified range of decimals.
 */
export declare function displayFullBN(bn: BigNumber, maxDecimals?: number, minDecimals?: number): string;
/**
 * Convert a "decimal amount" (decimal form) to "token amount" (integer form).
 * This is what's stored on chain.
 *
 * @param decimalAmt
 * @param decimals
 * @returns int
 */
export declare function toBaseUnitBN(decimalAmt: BigNumber.Value, decimals: BigNumber.Value): BigNumber;
/**
 * Convert a "token amount" (integer form) to "decimal amount" (decimal form).
 * This is typically what's displayed to users within the application.
 *
 * @param tokenAmt BigNumber.Value
 * @param decimals BigNumber.Value
 * @returns BigNumber
 */
export declare function toTokenUnitsBN(tokenAmt: BigNumber.Value, decimals: BigNumber.Value): BigNumber;
/**
 * Convert a "raw amount" (decimal form) to "token amount" (integer form).
 * This is what's stored on chain.
 *
 * @param decimalAmt
 * @param decimals
 * @returns string
 */
export declare function toStringBaseUnitBN(decimalAmt: BigNumber.Value, decimals: BigNumber.Value): string;
