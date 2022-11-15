# Root Token UI


## How to run it

```
1. Clone the repo
2. run `yarn install`
3. Setup beanstalk SDK locally (check below)
4. Link beanstalk SDK into the UI `npm link @beanstalk/sdk --force`
5. run `yarn dev` to start the development server

```

## How to setup Beanstalk SDK

```
1. Clone the repo
2. cd into `packages/src` folder
3. run `yarn install`
4. run `yarn generate`
5. Update new ROOT/pipeline/depot address inside of `Addresses.ts` (maybe ask SiloChad to do it)
6. run `yarn build`
7. run `npm link`

```