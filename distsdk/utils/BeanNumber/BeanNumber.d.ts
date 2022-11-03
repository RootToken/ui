/**
 *  BigNumber
 *
 *  Extened from ethers.BigNumber
 *  https://github.com/ethers-io/ethers.js/blob/master/packages/bignumber/src.ts/bignumber.ts
 *
 *  Minimal changs here. Extended through BeanNumberExtend.ts
 *
 */
import { Bytes, Hexable } from '@ethersproject/bytes';
import { BigNumber } from 'ethers';
declare type BigNumberish = BeanNumber | BigNumber | Bytes | bigint | string | number;
export declare class BeanNumber implements Hexable {
    readonly _hex: string;
    readonly _isBigNumber: boolean;
    private _decimals;
    constructor(constructorGuard: any, hex: string);
    get decimals(): number;
    set decimals(decimals: number);
    fromTwos(value: number): BeanNumber;
    toTwos(value: number): BeanNumber;
    abs(): BeanNumber;
    add(other: BigNumberish): BeanNumber;
    sub(other: BigNumberish): BeanNumber;
    div(other: BigNumberish): BeanNumber;
    mul(other: BigNumberish): BeanNumber;
    mod(other: BigNumberish): BeanNumber;
    pow(other: BigNumberish): BeanNumber;
    and(other: BigNumberish): BeanNumber;
    or(other: BigNumberish): BeanNumber;
    xor(other: BigNumberish): BeanNumber;
    mask(value: number): BeanNumber;
    shl(value: number): BeanNumber;
    shr(value: number): BeanNumber;
    eq(other: BigNumberish): boolean;
    lt(other: BigNumberish): boolean;
    lte(other: BigNumberish): boolean;
    gt(other: BigNumberish): boolean;
    gte(other: BigNumberish): boolean;
    isNegative(): boolean;
    isZero(): boolean;
    toNumber(): number;
    toBigInt(): bigint;
    toString(): string;
    toHexString(): string;
    toJSON(key?: string): any;
    static from(value: any): BeanNumber;
    static isBigNumber(value: any): value is BigNumber | BeanNumber;
}
export {};
