import { BigNumber, ContractTransaction } from "ethers";
import { PromiseOrValue } from "../../constants/generated/common";
import { ERC20Permit } from "../../constants/generated/ERC20Permit";
import { Token } from "./Token";
import { TokenValue } from "../../classes/TokenValue";
export declare class ERC20Token extends Token {
    contract: ERC20Permit;
    getContract(): ERC20Permit;
    /** @fixme */
    getName(): Promise<string>;
    /** @fixme */
    static getName(tokenAddress: string): Promise<string>;
    /**
     * Get the on-chain `.decimals()` for an ERC-20 token.
     * @todo make this work with ERC-1155 (does it already?)
     * @note stored onchain in hex format, need to decode.
     */
    static getDecimals(tokenAddress: string): Promise<number>;
    getBalance(account: string): Promise<TokenValue>;
    getAllowance(account: string, spender: string): Promise<TokenValue>;
    getTotalSupply(): Promise<TokenValue>;
    approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumber>): Promise<ContractTransaction>;
}
