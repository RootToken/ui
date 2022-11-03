import BigNumber from 'bignumber.js';
import { BaseContract } from 'ethers';
import type { BeanstalkSDK } from '../../lib/BeanstalkSDK';
import { BeanNumber } from '../../utils/BeanNumber/BeanNumber';
/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
export declare abstract class Token {
    /** Reference to the SDK */
    static sdk: BeanstalkSDK;
    /** The contract address on the chain on which this token lives */
    readonly address: string;
    /** The decimals used in representing currency amounts */
    readonly decimals: number;
    /** The chain id of the chain this token lives on */
    readonly chainId: number;
    /** The name of the currency, i.e. a descriptive textual non-unique identifier */
    name: string;
    /** The display name of the currency, i.e. a descriptive textual non-unique identifier */
    readonly displayName: string;
    /** The symbol of the currency, i.e. a short textual non-unique identifier */
    readonly symbol: string;
    /** The square logo of the token. */
    logo?: string;
    /** The color to use when displaying the token in charts, etc. */
    color?: string;
    /** The number of decimals this token is recommended to be truncated to. */
    readonly displayDecimals: number;
    /** Whether or not this is a LP token representing a position in a Pool. */
    readonly isLP: boolean;
    /** Whether or not this is an Unripe token. */
    readonly isUnripe: boolean;
    /** The Beanstalk STALK/SEED rewards per BDV of this token. */
    readonly rewards?: {
        stalk: number;
        seeds: number;
    };
    /**
     * @param chainId the chain ID on which this currency resides
     * @param address blockchain address where token contract resides
     * @param decimals decimals of the currency
     * @param metadata.symbol symbol of the currency
     * @param metadata.name name of the currency, matches `.name()`
     * @param metadata.displayName
     */
    constructor(sdk: BeanstalkSDK, address: string | null, decimals: number, metadata: {
        name?: string;
        displayName?: string;
        symbol: string;
        logo?: string;
        color?: string;
        displayDecimals?: number;
        isLP?: boolean;
        isUnripe?: boolean;
    }, rewards?: {
        stalk: number;
        seeds: number;
    });
    /** Get the amount of Stalk rewarded per deposited BDV of this Token. */
    getStalk(bdv?: BigNumber): BigNumber;
    /** Get the amount of Seeds rewarded per deposited BDV of this Token. */
    getSeeds(bdv?: BigNumber): BigNumber;
    abstract getContract(): BaseContract | null;
    abstract getBalance(account: string): Promise<BeanNumber>;
    abstract getAllowance(account: string, spender: string): Promise<BigNumber | undefined>;
    abstract getTotalSupply(): Promise<BigNumber> | undefined;
    /**
     * Returns whether this currency is functionally equivalent to the other currency
     * @param other the other currency
     */
    equals(other: Token): boolean;
    toString(): string;
    setMetadata(metadata: {
        logo?: string;
        color?: string;
    }): void;
    /**
     * Convert an `amount` of this Token into a string value
     * based on the configured number of decimals.
     *
     * FIXME: better name
     * FIXME: provide other side (toTokenUnitsBN)
     *
     * @param amount amount to convert
     * @returns string
     */
    stringify(amount: BigNumber.Value): string;
    stringifyToDecimal(amount: BigNumber.Value): BigNumber;
    tokenResult(): (result: BigNumber) => BigNumber;
}
