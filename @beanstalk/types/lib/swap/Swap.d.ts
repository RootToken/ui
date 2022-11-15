import { BeanstalkSDK } from "../BeanstalkSDK";
import { Token } from "../../classes/Token";
import { FarmFromMode, FarmToMode } from "../farm/types";
import { Router } from "./Router";
import { SwapOperation } from "./SwapOperation";
export declare class Swap {
    private static sdk;
    router: Router;
    constructor(sdk: BeanstalkSDK);
    buildSwap(tokenIn: Token, tokenOut: Token, account: string, _from?: FarmFromMode, _to?: FarmToMode): SwapOperation;
    /**
     * Generate text to paste into http://www.webgraphviz.com/
     * which will show an image based visualization of the current
     * graph
     */
    getGraph(): void;
}
