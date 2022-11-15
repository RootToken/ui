import { BigNumber } from "ethers";
import { Token } from "../classes/Token";
import { MapValueType } from "../types";
import { EventProcessorData } from "./events/processor";
import { EIP712PermitMessage } from "./permit";
import { Crate, DepositCrate, TokenSiloBalance } from "./silo";
import { TokenValue } from "../classes/TokenValue";
export declare type DepositTokenPermitMessage = EIP712PermitMessage<{
    token: string;
    value: number | string;
}>;
export declare type DepositTokensPermitMessage = EIP712PermitMessage<{
    tokens: string[];
    values: (number | string)[];
}>;
export declare type CrateSortFn = <T extends Crate<TokenValue>>(crates: T[]) => T[];
/**
 * Beanstalk doesn't automatically re-categorize withdrawals as "claimable".
 * "Claimable" just means that the `season` parameter stored in the withdrawal
 * event is less than or equal to the current `season()`.
 *
 * This function serves two purposes:
 * 1. Break generic withdrawals into
 *    "withdrawn" (aka transit), which cannot yet be claimed
 *    "claimable" (aka receivable), which are eligible to be claimed
 * 2. Convert each crate amount to the appropriate number of decimals.
 */
export declare const _parseWithdrawalCrates: (token: Token, withdrawals: MapValueType<EventProcessorData["withdrawals"]>, currentSeason: BigNumber) => {
    withdrawn: TokenSiloBalance["withdrawn"];
    claimable: TokenSiloBalance["claimable"];
};
/**
 * Order crates by Season.
 */
export declare function sortCratesBySeason<T extends Crate<TokenValue>>(crates: T[], direction?: "asc" | "desc"): T[];
/**
 * Order crates by BDV.
 */
export declare function sortCratesByBDVRatio<T extends DepositCrate<TokenValue>>(crates: T[], direction?: "asc" | "desc"): T[];
