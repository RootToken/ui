import { BigNumber } from 'bignumber.js';
import { ethers } from 'ethers';
import { Token } from '../classes/Token';
import { DataSource, StringMap } from '../types';
import { BeanstalkSDK } from './BeanstalkSDK';
import { EIP712TypedData } from './permit';
import { CrateSortFn, DepositTokenPermitMessage, DepositTokensPermitMessage } from './silo.utils';
/**
 * A Crate is an `amount` of a token Deposited or
 * Withdrawn during a given `season`.
 */
declare type BigNumbers = BigNumber | ethers.BigNumber;
export declare type Crate<T extends BigNumbers = BigNumber> = {
    /** The amount of this Crate that was created, denominated in the underlying Token. */
    amount: T;
    /** The Season that the Crate was created. */
    season: T;
};
/**
 * A "Deposit" represents an amount of a Whitelisted Silo Token
 * that has been added to the Silo.
 */
export declare type DepositCrate<T extends BigNumbers = BigNumber> = Crate<T> & {
    /** The BDV of the Deposit, determined upon Deposit. */
    bdv: T;
    /** The amount of Stalk granted for this Deposit. */
    stalk: T;
    /** The amount of Seeds granted for this Deposit. */
    seeds: T;
};
export declare type WithdrawalCrate<T extends BigNumbers = BigNumber> = Crate<T> & {};
/**
 * A "Silo Balance" provides all information
 * about a Farmer's ownership of a Whitelisted Silo Token.
 */
export declare type TokenSiloBalance = {
    deposited: {
        /** The total amount of this Token currently in the Deposited state. */
        amount: BigNumber;
        /** The BDV of this Token currently in the Deposited state. */
        bdv: BigNumber;
        /** All Deposit crates. */
        crates: DepositCrate<BigNumber>[];
    };
    withdrawn: {
        /** The total amount of this Token currently in the Withdrawn state. */
        amount: BigNumber;
        /** All Withdrawal crates. */
        crates: WithdrawalCrate<BigNumber>[];
    };
    claimable: {
        /** The total amount of this Token currently in the Claimable state. */
        amount: BigNumber;
        /** All Claimable crates. */
        crates: Crate[];
    };
};
export declare type UpdateFarmerSiloBalancesPayload = StringMap<Partial<TokenSiloBalance>>;
export declare class Silo {
    static sdk: BeanstalkSDK;
    constructor(sdk: BeanstalkSDK);
    /**
     *
     * @param _tokenIn The input token, any that we can swap for the whitelisted token
     * @param _amountIn Amount of _tokenIn to convert to _tokenOut and deposit
     * @param _tokenOut The whitelisted Token (BEAN, BEAN3CRV, urBEAN, urBEAN3CRV)
     */
    /**
     * Sort the incoming map so that tokens are ordered in the same order
     * they appear on the Silo Whitelist.
     *
     * @note the Silo Whitelist is sorted by the order in which tokens were
     * whitelisted in Beanstalk. Unclear if the ordering shown on the
     * Beanstalk UI will change at some point in the future.
     */
    private _sortTokenMapByWhitelist;
    /**
     * Return a list of tokens that are currently whitelisted in the Silo.
     *
     * @todo Check if the subgraph removes `WhitelistToken` entities if a
     *       token is de-whitelisted.
     * @todo Get name, decimals since these are ERC20 tokens.
     */
    getWhitelist(options?: ({
        source: DataSource.LEDGER;
    } | {
        source: DataSource.SUBGRAPH;
    })): Promise<{
        token: string;
        stalk: number;
        seeds: number;
    }[]>;
    private _parseWithdrawalCrates;
    private _makeTokenSiloBalance;
    /**
     * Apply a Deposit to a TokenSiloBalance.
     *
     * @note expects inputs to be stringified (no decimals).
     */
    private _applyDeposit;
    /**
     * Apply a Deposit to a TokenSiloBalance.
     *
     * @note expects inputs to be stringified (no decimals).
     */
    private _applyWithdrawal;
    private _sortCrates;
    /**
     * Return the Farmer's balance of a single whitelisted token.
     */
    getBalance(_token: Token, _account?: string, options?: ({
        source: DataSource.LEDGER;
    } | {
        source: DataSource.SUBGRAPH;
    })): Promise<TokenSiloBalance>;
    /**
     * Return a Farmer's Silo balances.
     *
     * ```
     * [Token] => {
     *   deposited => { amount, bdv, crates },
     *   withdrawn => { amount, crates },
     *   claimable => { amount, crates }
     * }
     * ```
     *
     * @note EventProcessor requires a known whitelist and returns
     *       an object (possibly empty) for every whitelisted token.
     * @note To process a Deposit, we must know how many Stalk & Seeds
     *       are given to it. If a token is dewhitelisted and removed from
     *       `tokens` (or from the on-chain whitelist)
     * @fixme "deposits" vs "deposited"
     */
    getBalances(_account?: string, options?: ({
        source: DataSource.LEDGER;
    } | {
        source: DataSource.SUBGRAPH;
    })): Promise<Map<Token, TokenSiloBalance>>;
    pickCrates(crates: Crate<BigNumber>[], token: Token, amount: BigNumber.Value, sort?: CrateSortFn): {
        seasons: string[];
        amounts: string[];
    };
    /**
     * Created typed permit data to authorize `spender` to transfer
     * the `owner`'s deposit balance of `token`.
     *
     * @fixme `permitDepositToken` -> `getPermitForToken`
     *
     * @param owner the Farmer whose Silo deposit can be transferred
     * @param spender the account authorized to make a transfer
     * @param token the whitelisted token that can be transferred
     * @param value the amount of the token that can be transferred
     * @param _nonce a nonce to include when signing permit.
     * Defaults to `beanstalk.depositPermitNonces(owner)`.
     * @param _deadline the permit deadline.
     * Defaults to `MAX_UINT256` (effectively no deadline).
     * @returns typed permit data. This can be signed with `sdk.permit.sign()`.
     */
    permitDepositToken(owner: string, spender: string, token: string, value: string, _nonce?: string, _deadline?: string): Promise<EIP712TypedData<DepositTokenPermitMessage>>;
    /**
     * Created typed permit data to authorize `spender` to transfer
     * the `owner`'s deposit balance of `tokens`.
     *
     * @fixme `permitDepositTokens` -> `getPermitForTokens`
     *
     * @param owner the Farmer whose Silo deposit can be transferred
     * @param spender the account authorized to make a transfer
     * @param tokens the whitelisted tokens that can be transferred.
     * @param values the amount of each token in `tokens` that can be transferred.
     * `values[0]` = how much of `tokens[0]` can be transferred, etc.
     * @param _nonce a nonce to include when signing permit.
     * Defaults to `beanstalk.depositPermitNonces(owner)`.
     * @param _deadline the permit deadline.
     * Defaults to `MAX_UINT256` (effectively no deadline).
     * @returns typed permit data. This can be signed with `sdk.permit.sign()`.
     */
    permitDepositTokens(owner: string, spender: string, tokens: string[], values: string[], _nonce?: string, _deadline?: string): Promise<EIP712TypedData<DepositTokensPermitMessage>>;
    /**
     * Get the EIP-712 domain for the Silo.
     * @note applies to both `depositToken` and `depositTokens` permits.
     */
    private _getEIP712Domain;
    private _createTypedDepositTokenPermitData;
    private _createTypedDepositTokensPermitData;
}
export {};
