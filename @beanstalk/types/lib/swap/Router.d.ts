import { BeanstalkSDK } from "../../lib/BeanstalkSDK";
import { Token } from "../../classes/Token";
import { FarmFromMode, FarmToMode } from "../../lib/farm/types";
import { StepClass } from "../../classes/Workflow";
declare type RouterResult = {
    step: (account: string, fromMode?: FarmFromMode, toMode?: FarmToMode) => StepClass;
    from: string;
    to: string;
};
export declare class Router {
    private static sdk;
    private graph;
    constructor(sdk: BeanstalkSDK);
    findPath(tokenIn: Token, tokenOut: Token): RouterResult[];
    private searchGraph;
    private buildGraph;
    private buildSelfTransfer;
    getGraphCode(): string;
}
export {};
