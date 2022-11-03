import BigNumber from 'bignumber.js';
import { BeanNumber } from '../../utils/BeanNumber';
import { Token } from './Token';
export declare class NativeToken extends Token {
    getContract(): null;
    getBalance(account: string): Promise<BeanNumber>;
    getAllowance(): Promise<BigNumber | undefined>;
    getTotalSupply(): undefined;
    equals(other: NativeToken): boolean;
}
