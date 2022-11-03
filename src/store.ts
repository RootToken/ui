import { Contract, ethers } from "ethers";
import create from "zustand";
import { BeanstalkSDK } from "../distsdk/sdk.esm.js";
import ENVIRONMENT from "./config";
import { IAccount } from "./interfaces/account.js";
import { createERC20Contract, createRootContract } from "./util/contract.js";
import { TOKENS } from "./util/token.js";

interface AppState {
  connectedAddress?: string;
  beanstalkSdk: BeanstalkSDK;
  setBeanstalkSdk: (instance: BeanstalkSDK) => void;
  erc20Contract: {
    [address: string]: Contract;
  };
  setERC20Contract: (address: string, instance: ethers.Contract) => void;

  account?: IAccount;
  setAccount: (account: IAccount) => void;
}

const useAppStore = create<AppState>()((set) => ({
  setBeanstalkSdk: (instance) =>
    set((state) => ({ ...state, beanstalkSdk: instance })),
  beanstalkSdk: new BeanstalkSDK({
    subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
  }),
  erc20Contract: {
    [ENVIRONMENT.rootContractAddress]: createRootContract(),
    [TOKENS.BEAN.address]: createERC20Contract(TOKENS.BEAN.address),
    [TOKENS.USDC.address]: createERC20Contract(TOKENS.USDC.address),
    [TOKENS.USDT.address]: createERC20Contract(TOKENS.USDT.address),
    [TOKENS.DAI.address]: createERC20Contract(TOKENS.DAI.address),
    [TOKENS.WETH.address]: createERC20Contract(TOKENS.WETH.address),
  },
  setERC20Contract: (address, instance) =>
    set((state) => ({
      ...state,
      erc20Contract: { ...state.erc20Contract, [address]: instance },
    })),
  setAccount: (account) =>
    set((state) => ({
      ...state,
      account,
    })),
}));

export default useAppStore;
