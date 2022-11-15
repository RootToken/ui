import { ethers } from "ethers";
export declare type Provider = ethers.providers.JsonRpcProvider;
export declare type Signer = ethers.Signer;
export declare type BeanstalkConfig = Partial<{
    provider: Provider;
    signer: Signer;
    rpcUrl: string;
    subgraphUrl: string;
    source: DataSource;
    DEBUG: boolean;
}>;
export declare type Reconfigurable = Pick<BeanstalkConfig, "source">;
export declare type MapValueType<A> = A extends Map<any, infer V> ? V : never;
export declare type StringMap<T> = {
    [address: string]: T;
};
export declare enum DataSource {
    LEDGER = 1,
    SUBGRAPH = 2
}
