import { ethers } from 'ethers';
import { Action, ActionResult, BaseAction } from '../types';
export declare class ActionTemplate extends BaseAction implements Action {
    name: string;
    constructor();
    run(_amountInStep: ethers.BigNumber, _forward?: boolean): Promise<ActionResult>;
}
