import { BeanstalkSDK } from './BeanstalkSDK';
export declare class Sun {
    static sdk: BeanstalkSDK;
    constructor(sdk: BeanstalkSDK);
    getSeason(): Promise<number>;
}
