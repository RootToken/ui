import { BigNumber } from 'ethers';
declare module './BeanNumber' {
    interface BeanNumber {
        toHuman(decimals: number): string;
        display(decimals: number, allowNegative?: boolean): string;
        displayFull(maxDecimals?: number, minDecimals?: number): string;
        trimDecimals(allowNegative?: boolean): BeanNumber;
        trim(numberString: string, decimals: number): BeanNumber;
    }
    namespace BeanNumber {
        let fromHuman: (value: string, decimals: number) => BeanNumber;
        let fromBigNumber: (bn: BigNumber, decimals?: number) => BeanNumber;
    }
}
