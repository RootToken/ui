import { BaseContract } from "ethers";
import type { BeanstalkSDK } from "../../lib/BeanstalkSDK";
import { BigNumber } from "ethers";
import { TokenValue } from "../TokenValue";
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
        stalk: TokenValue;
        seeds: TokenValue;
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
        stalk: TokenValue;
        seeds: TokenValue;
    });
    /** Get the amount of Stalk rewarded per deposited BDV of this Token. */
    getStalk(bdv?: TokenValue): TokenValue;
    /** Get the amount of Seeds rewarded per deposited BDV of this Token. */
    getSeeds(bdv?: TokenValue): TokenValue;
    abstract getContract(): BaseContract | null;
    abstract getBalance(account: string): Promise<TokenValue>;
    abstract getAllowance(account: string, spender: string): Promise<TokenValue | undefined>;
    abstract getTotalSupply(): Promise<TokenValue> | undefined;
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
     * Converts from a blockchain amount to a TokenAmount with this token's decimals set
     *
     * Ex: BEAN.fromHuman("3140000") => TokenValue holding value "3140000" and 6 decimals
     *
     * @param amount human readable amout, ex: "3.14" ether
     * @returns TokenValue
     */
    fromBlockchain(amount: string | number | BigNumber): TokenValue;
    /**
     * Converts from a human amount to a TokenAmount with this token's decimals set
     *
     * Ex: BEAN.fromHuman("3.14") => TokenValue holding value "3140000" and 6 decimals
     *
     * @param amount human readable amout, ex: "3.14" ether
     * @returns TokenValue
     */
    fromHuman(amount: string | number): TokenValue;
    /**
     * Alias to `.fromHuman()`
     *
     * Converts from a human amount to a TokenAmount with this token's decimals set
     *
     * Ex: BEAN.fromHuman("3.14") => TokenValue holding value "3140000" and 6 decimals
     *
     * @param amount human readable amout, ex: "3.14" ether
     * @returns TokenValue
     */
    amount(amount: string | number): TokenValue;
    /**
     * Converts from a blockchain value to a human readable form
     *
     * Ex: BEAN.toHuman(BigNumber.from('3140000)) => "3.14"
     * @param value A BigNumber with a value of this token, for ex: 1000000 would be 1 BEAN
     * @returns string
     */
    toHuman(value: BigNumber): string;
    toTokenValue(value: BigNumber): TokenValue;
}
