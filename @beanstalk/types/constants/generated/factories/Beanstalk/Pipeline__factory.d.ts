import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Pipeline, PipelineInterface } from "../../Beanstalk/Pipeline";
export declare class Pipeline__factory {
    static readonly abi: {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PipelineInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Pipeline;
}
