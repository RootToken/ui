import { Contract, ethers } from "ethers";
import create from "zustand";
import { BeanstalkSDK } from "../sdk/src";
import ENVIRONMENT from "./config";
import rootAbi from "./abi/Root.json";
import { createRootContract } from "./util/root";

interface AppState {
  connectedAddress?: string;
  beanstalkSdk: BeanstalkSDK;
  setBeanstalkSdk: (instance: BeanstalkSDK) => void;
  rootContract: Contract;
  setRootContract: (instance: ethers.Contract) => void;
}

const useAppStore = create<AppState>()((set) => ({
  setBeanstalkSdk: (instance) =>
    set((state) => ({ ...state, beanstalkSdk: instance })),
  beanstalkSdk: new BeanstalkSDK({
    subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
  }),
  rootContract: createRootContract(),
  setRootContract: (instance) =>
    set((state) => ({ ...state, rootContract: instance })),
}));

export default useAppStore;
