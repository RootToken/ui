import { ethers } from "ethers";
declare enum ClipboardType {
    STATIC = 0,
    SINGLE = 1,
    MULTI = 2
}
declare type PasteParams = Readonly<[
    /** what Pipe to Copy from */
    returnDataIndex: number,
    /** index in returnData to copy from */
    copyIndex: number,
    /** index in callData to paste into */
    pasteIndex: number
]>;
declare type PasteParamsByType = {
    [ClipboardType.STATIC]: Readonly<[]>;
    [ClipboardType.SINGLE]: Readonly<PasteParams>;
    [ClipboardType.MULTI]: Readonly<PasteParams[]>;
};
export declare class Clipboard {
    /**
     * Encode "advanced data" for copying calldata between pipeline calls.
     *
     * @note calldata byte positions use their "assembly" indices.
     *
     * - for the "copyIndex" encoded in `copyData[1]`, bytes 0-31 encode
     *   the length of the return tuple. the first element is stored at
     *   byte 32.
     *
     * - for the "pasteIndex" encoded in `copyData[2]`, bytes 0-3 encode
     *   the function signature and bytes 4-35 encode the length of the following
     *   data. so the first slot begins at index 36:
     *   - `0x` (0x is trimmed in solidity)
     *   - `ab01cd23` (first 8 hex characters = 4 bytes is the length of data)
     *   - `0000....` (next 64 hex characters = 32 bytes is first element)
     */
    static encode(pasteParams: PasteParamsByType[ClipboardType], etherValue?: ethers.BigNumber): string;
    /**
     * @fixme assert all params are integers
     * @param returnDataIndex
     * @param copySlot
     * @param pasteSlot
     * @returns
     */
    static encodeSlot(returnDataIndex: number, copySlot: number, pasteSlot: number, etherValue?: ethers.BigNumber): string;
    /**
     * Pack a Paste operation.
     *
     * @dev preBytes is optional and should be used if the function call performs exactly 1 data copy operation
     * in which case it should be set to `0x0${type}0${useEtherFlag}`
     * where type is 0, 1 or 2 and useEtherFlag is 0 or 1.
     */
    private static pack;
    /**
     * Prepare types and packed data for a Paste operation.
     */
    private static prepare;
}
export {};
