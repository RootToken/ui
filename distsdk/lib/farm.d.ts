import { Work } from './farm/Work';
import { BeanstalkSDK } from './BeanstalkSDK';
import * as ActionLibrary from './farm/actions';
import { LibraryPresets } from './farm/LibraryPresets';
export declare class Farm {
    static sdk: BeanstalkSDK;
    readonly actions: typeof ActionLibrary;
    presets: LibraryPresets;
    constructor(sdk: BeanstalkSDK);
    create(): Work;
}
