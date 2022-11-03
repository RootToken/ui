import { ethers } from 'ethers';
import { FarmFromMode, FarmToMode } from '../types';
import { Action, ActionResult, BaseAction } from '../types';
export declare class RemoveLiquidityOneToken extends BaseAction implements Action {
    private _pool;
    private _registry;
    private _tokenOut;
    private _fromMode;
    private _toMode;
    name: string;
    constructor(_pool: string, _registry: string, _tokenOut: string, _fromMode?: FarmFromMode, _toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, _forward?: boolean): Promise<ActionResult>;
}
