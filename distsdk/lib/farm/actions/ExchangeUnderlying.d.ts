import { ethers } from 'ethers';
import { Token } from '../../../classes/Token';
import { FarmFromMode, FarmToMode } from '../types';
import { Action, ActionResult, BaseAction } from '../types';
export declare class ExchangeUnderlying extends BaseAction implements Action {
    private pool;
    private tokenIn;
    private tokenOut;
    private fromMode;
    private toMode;
    name: string;
    constructor(pool: string, tokenIn: Token, tokenOut: Token, fromMode?: FarmFromMode, toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, forward?: boolean): Promise<ActionResult>;
}
