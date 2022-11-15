import { ethers } from "ethers";
import { RunContext, Step, StepClass } from "../../../classes/Workflow";
import { Token } from "../../../classes/Token";
import { FarmFromMode, FarmToMode } from "../types";
export declare class Exchange extends StepClass {
    private pool;
    private registry;
    private tokenIn;
    private tokenOut;
    private fromMode;
    private toMode;
    name: string;
    constructor(pool: string, registry: string, tokenIn: Token, tokenOut: Token, fromMode?: FarmFromMode, toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<string>>;
}
