import { BigNumberish } from 'ethers';
import { BeanNumber } from './BeanNumber';
export declare const parseUnits: (value: string, unitName?: BigNumberish) => BeanNumber;
export declare function trim(numberString: string, decimals: number): BeanNumber;
