import { DecimalBigNumber as DBN } from '../../utils/DecimalBigNumber';
export declare function bnToHex(bn: string | number | bigint | boolean): string;
export declare function hexToBn(hex: string): bigint;
export declare function bitnot(bn: bigint): bigint;
export declare class Polynomial {
    breakpoints: DBN[];
    coefficients: DBN[];
    exponents: number[];
    signs: boolean[];
    constructor(breakpoints: DBN[], coefficients: DBN[], exponents: number[], signs: boolean[]);
    /**
     * Count the number of piecewise functions in this polynomial.
     *
     * @returns number
     */
    get length(): number;
    evalulate(x: number, pieceIndex: number): void;
    integrate(start: number, end: number, pieceIndex: number): void;
    getAmountListing(placeInLine: BigInt, amountBeans: BigInt): void;
    getAmountOrder(placeInLine: BigInt, amountPodsFromOrder: BigInt): void;
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
        breakpoints: DBN[];
        coefficients: DBN[];
        exponents: number[];
        signs: boolean[];
    };
    /**
     *
     * @param _array
     * @param _value
     * @param _high
     */
    static findIndex(_array: DBN[], _value: DBN, _high: number): number;
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
    static fromPoints(xs: DBN[], ys: DBN[]): Polynomial;
    /**
     * Create a new polynomial by unpacking an existing hex-encoded function
     *
     * @param f the hex-encoded polynomial function to unpack
     * @returns Polynomial
     */
    static fromHex(f: string): Polynomial;
}
