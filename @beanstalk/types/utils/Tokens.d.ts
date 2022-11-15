import { BigNumber } from "ethers";
import { TokenValue } from "../classes/TokenValue";
export declare const fromHuman: (value: string, decimals: number) => TokenValue;
export declare const toHuman: (value: BigNumber, decimals: number) => string;
