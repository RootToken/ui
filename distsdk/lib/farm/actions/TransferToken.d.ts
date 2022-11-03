import { ethers } from 'ethers';
import { FarmFromMode, FarmToMode } from '../types';
import { Action, ActionResult, BaseAction } from '../types';
export declare class TransferToken extends BaseAction implements Action {
    private _tokenIn;
    private _recipient;
    private _fromMode;
    private _toMode;
    name: string;
    constructor(_tokenIn: string, _recipient: string, _fromMode?: FarmFromMode, _toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, _forward?: boolean): Promise<ActionResult>;
}
