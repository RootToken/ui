import type { BeanstalkSDK } from './BeanstalkSDK';
import { Beanstalk, Curve3Pool, CurveCryptoFactory, CurveMetaFactory, CurveMetaPool, CurveRegistry, CurveTriCrypto2Pool, CurveZap, Root } from '../constants/generated';
import { BaseContract } from 'ethers';
declare type CurveContracts = {
    pools: {
        pool3: Curve3Pool;
        tricrypto2: CurveTriCrypto2Pool;
        beanCrv3: CurveMetaPool;
        [k: string]: BaseContract;
    };
    registries: {
        poolRegistry: CurveRegistry;
        metaFactory: CurveMetaFactory;
        cryptoFactory: CurveCryptoFactory;
        [k: string]: BaseContract;
    };
    zap: CurveZap;
};
export declare class Contracts {
    static sdk: BeanstalkSDK;
    readonly beanstalk: Beanstalk;
    readonly root: Root;
    readonly fertilizer: import("../constants/generated/index").BeanstalkFertilizer;
    readonly curve: CurveContracts;
    constructor(sdk: BeanstalkSDK);
}
export {};
