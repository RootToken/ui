import { Token } from "./Token";
import { TokenValue } from "../TokenValue";
export declare class BeanstalkToken extends Token {
    getContract(): null;
    getBalance(): Promise<TokenValue>;
    getAllowance(): Promise<TokenValue>;
    getTotalSupply(): undefined;
}
