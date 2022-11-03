import { BigNumber as BigNumberEthers, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';
export declare class Num {
    static toBigNumberJs(number: BigNumberish): BigNumber;
    static toBigNumberEthers(number: BigNumber): BigNumberEthers;
    /**
     * @ref ?
     * @param bi
     * @returns
     */
    static toHex(_bi: BigInt | number): string;
    /**
     * @ref ?
     * @param _bi
     * @returns
     */
    static bitnot(_bi: BigInt): bigint;
}
