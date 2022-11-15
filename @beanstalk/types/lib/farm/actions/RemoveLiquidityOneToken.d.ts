import { ethers } from "ethers";
import { RunContext, Step, StepClass } from "../../../classes/Workflow";
import { FarmFromMode, FarmToMode } from "../types";
export declare class RemoveLiquidityOneToken extends StepClass<string> {
    private _pool;
    private _registry;
    private _tokenOut;
    private _fromMode;
    private _toMode;
    name: string;
    constructor(_pool: string, _registry: string, _tokenOut: string, _fromMode?: FarmFromMode, _toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<string>>;
}
