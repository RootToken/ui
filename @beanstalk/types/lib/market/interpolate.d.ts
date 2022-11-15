import { BigNumber } from "ethers";
import { DecimalBigNumber as DBN } from "../../utils/DecimalBigNumber";
/**
 * @FIXME
 * - math.js uses https://github.com/MikeMcl/decimal.js/ (unknown size)
 * - ethers.js uses https://www.npmjs.com/package/bn.js (unknown size)
 *    - this is required because of ethers' dependency on https://www.npmjs.com/package/elliptic
 * - we use https://mikemcl.github.io/bignumber.js/ (8kb minfied and gzipped)
 *    - this supports decimals
 *
 * @QUESTIONS
 * - is Interpolate.fromPoints intended to accept decimals or only integers? (constraining
 *   to integers makes sense, we just may need to help provide some helper functions to do this)
 *
 * @TODO
 * - remove `math` dependency
 * - add some helper func for calculateShifts
 * - figure out what math.format is doing
 */
export declare function calcShifts(n: string, c: number): number;
export declare function convertToRaisedInt(n: DBN, d: number): BigNumber;
export declare class Interpolate {
    static exponentBase: number;
    /**
     * @ref https://www.wikiwand.com/en/Monotone_cubic_interpolation
     * @param xs
     * @param ys
     * @returns
     */
    static fromPoints(xs: BigNumber[], ys: BigNumber[]): {
        breakpoints: BigNumber[];
        coefficients: BigNumber[];
        exponents: number[];
        signs: boolean[];
    };
}
