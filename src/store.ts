import { Contract, ethers } from "ethers";
import create from "zustand";
import { BeanstalkSDK } from "../distsdk/sdk.esm.js";
import ENVIRONMENT from "./config";
import { IAccount } from "./interfaces/account.js";
import {
  getDefaultClaimFormState,
  getDefaultMintFormState,
  getDefaultRedeemFormState,
  IClaimFormState,
  IMintFormState,
  IRedeemFormState,
} from "./interfaces/mintForm.js";
import { ITokenSymbol, TOKENS } from "./interfaces/token.js";
import { createERC20Contract, createRootContract } from "./util/contract.js";

interface AppState {
  connectedAddress?: string;
  beanstalkSdk: BeanstalkSDK;
  setBeanstalkSdk: (instance: BeanstalkSDK) => void;
  erc20Contract: {
    [address: string]: Contract;
  };
  setERC20Contract: (address: string, instance: ethers.Contract) => void;

  account?: IAccount;
  setAccount: (account?: IAccount) => void;

  mintFormState: IMintFormState;
  onChangeMintFormStateField: (field: keyof IMintFormState, value: any) => void;
  onResetMintFormState: () => void;

  redeemFormState: IRedeemFormState;
  onChangeRedeemFormStateField: (
    field: keyof IRedeemFormState,
    value: any
  ) => void;
  onResetRedeemFormState: () => void;

  claimFormState: IClaimFormState;
  onChangeClaimFormStateField: (
    field: keyof IClaimFormState,
    value: any
  ) => void;
  onResetClaimFormState: () => void;

  prices?: {
    [key in ITokenSymbol]: number;
  };
  setPrices: (prices: {
    [key in ITokenSymbol]: number;
  }) => void;
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

  mintFormState: getDefaultMintFormState(),
  onChangeMintFormStateField: (field, value) =>
    set((state) => ({
      ...state,
      mintFormState: { ...state.mintFormState, [field]: value },
    })),
  onResetMintFormState: () =>
    set((state) => ({
      ...state,
      mintFormState: getDefaultMintFormState(),
    })),

  redeemFormState: getDefaultRedeemFormState(),
  onChangeRedeemFormStateField: (field, value) =>
    set((state) => ({
      ...state,
      redeemFormState: { ...state.redeemFormState, [field]: value },
    })),
  onResetRedeemFormState: () =>
    set((state) => ({
      ...state,
      redeemFormState: getDefaultRedeemFormState(),
    })),

  claimFormState: getDefaultClaimFormState(),
  onChangeClaimFormStateField: (field, value) =>
    set((state) => ({
      ...state,
      claimFormState: { ...state.claimFormState, [field]: value },
    })),
  onResetClaimFormState: () =>
    set((state) => ({
      ...state,
      claimFormState: getDefaultClaimFormState(),
    })),

  setPrices: (prices) =>
    set((state) => ({
      ...state,
      prices,
    })),
}));

export default useAppStore;
