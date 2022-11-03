import { ethers } from 'ethers';
import { Token } from '../../../classes/Token';
import { FarmFromMode, FarmToMode } from '../types';
import { Action, ActionResult, BaseAction } from '../types';
export declare class Exchange extends BaseAction implements Action {
    private pool;
    private registry;
    private tokenIn;
    private tokenOut;
    private fromMode;
    private toMode;
    name: string;
    constructor(pool: string, registry: string, tokenIn: Token, tokenOut: Token, fromMode?: FarmFromMode, toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, _forward?: boolean): Promise<ActionResult>;
}
