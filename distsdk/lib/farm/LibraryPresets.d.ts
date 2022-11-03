import { BeanstalkSDK } from '../BeanstalkSDK';
import { FarmFromMode, FarmToMode } from './types';
import { Action } from './types';
declare type ActionBuilder = (fromMode?: FarmFromMode, toMode?: FarmToMode) => Action | Action[];
export declare class LibraryPresets {
    static sdk: BeanstalkSDK;
    readonly weth2usdt: ActionBuilder;
    readonly usdt2bean: ActionBuilder;
    readonly usdt2weth: ActionBuilder;
    readonly bean2usdt: ActionBuilder;
    readonly weth2bean: ActionBuilder;
    readonly bean2weth: ActionBuilder;
    constructor(sdk: BeanstalkSDK);
}
export {};
