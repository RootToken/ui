import { ethers } from 'ethers';
import { FarmToMode } from '../types';
import { Action, ActionResult, BaseAction } from '../types';
export declare class WrapEth extends BaseAction implements Action {
    private toMode;
    name: string;
    constructor(toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, _forward?: boolean): Promise<ActionResult>;
}
