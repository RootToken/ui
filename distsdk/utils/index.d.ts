export * as tokens from './Tokens';
export declare const enumFromValue: <T extends Record<number, string>>(val: number, _enum: T) => T[keyof T];
export declare function assert(condition: boolean, message?: string): asserts condition is true;
export declare const zeros: (numZeros: number) => string;
