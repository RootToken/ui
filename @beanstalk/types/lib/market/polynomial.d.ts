import { BigNumber } from "ethers";
export declare function bnToHex(bn: string | number | bigint | boolean): string;
export declare function hexToBn(hex: string): bigint;
export declare function bitnot(bn: bigint): bigint;
export declare class Polynomial {
    breakpoints: BigNumber[];
    coefficients: BigNumber[];
    exponents: number[];
    signs: boolean[];
    constructor(breakpoints: BigNumber[], coefficients: BigNumber[], exponents: number[], signs: boolean[]);
    /**
     * Count the number of piecewise functions in this polynomial.
     *
     * @returns number
     */
    get length(): number;
    evaluate(x: BigNumber, pieceIndex: number): BigNumber;
    integrate(start: BigNumber, end: BigNumber, pieceIndex: number): BigNumber;
    getAmountListing(placeInLine: BigNumber, amountBeans: BigNumber): BigNumber;
    getAmountOrder(placeInLine: BigNumber, amountPodsFromOrder: BigNumber): BigNumber;
    /**
     * Pack this polynomial into a hex string.
     *
     * @returns Packed polynomial as a string
     */
    pack(): string;
    /**
     * Unpack a hex-encoded polynomial into its respective parts
     *
     * @TODO unpacking logic
     */
    static unpack(f: string): {
        breakpoints: BigNumber[];
        coefficients: BigNumber[];
        exponents: number[];
        signs: boolean[];
    };
    /**
     *
     * @param _array
     * @param _value
     * @param _high
     */
    static findIndex(_array: BigNumber[], _value: BigNumber, _high: number): number;
    /**
     *
     * @param values
     * @param pieceIndex
     * @returns
     */
    static getValueArray(values: any[], pieceIndex: number): any[];
    /**
     *
     * @param array
     * @param maxPieces
     * @returns
     */
    static getNumPieces(array: any[], maxPieces: number): number;
    /**
     * Create a new polynomial by interpolating points
     *
     * @param xs x coordinates to interpolate
     * @param ys y coordinates to interpolate
     * @returns Polynomial
     */
    static fromPoints(xs: BigNumber[], ys: BigNumber[]): Polynomial;
    /**
     * Create a new polynomial by unpacking an existing hex-encoded function
     *
     * @param f the hex-encoded polynomial function to unpack
     * @returns Polynomial
     */
    static fromHex(f: string): Polynomial;
}
