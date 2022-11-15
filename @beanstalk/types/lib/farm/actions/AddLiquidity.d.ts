import { ethers } from "ethers";
import { RunContext, Step, StepClass } from "../../../classes/Workflow";
import { FarmFromMode, FarmToMode } from "../types";
export declare class AddLiquidity extends StepClass {
    private _pool;
    private _registry;
    private _amounts;
    private _fromMode;
    private _toMode;
    name: string;
    constructor(_pool: string, _registry: string, _amounts: readonly [number, number] | readonly [number, number, number], _fromMode?: FarmFromMode, _toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<string>>;
}
