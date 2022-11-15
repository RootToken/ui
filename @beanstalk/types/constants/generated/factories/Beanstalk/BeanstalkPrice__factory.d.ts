import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BeanstalkPrice, BeanstalkPriceInterface } from "../../Beanstalk/BeanstalkPrice";
export declare class BeanstalkPrice__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BeanstalkPriceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BeanstalkPrice;
}
