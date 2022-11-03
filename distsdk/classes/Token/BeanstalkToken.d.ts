import BigNumber from "bignumber.js";
import { Token } from "./Token";
export declare class BeanstalkToken extends Token {
    getContract(): null;
    getBalance(): Promise<import("../..").BeanNumber>;
    getAllowance(): Promise<BigNumber>;
    getTotalSupply(): undefined;
}
