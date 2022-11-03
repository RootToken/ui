import { ethers } from "ethers";
import ENVIRONMENT from "../config";
import rootAbi from "../abi/Root.json";
import erc20Abi from "../abi/ERC20.json";

const defaultProvider = new ethers.providers.JsonRpcProvider(
  ENVIRONMENT.rpcUrl
);

export const createRootContract = (signer?: ethers.Signer) => {
  return new ethers.Contract(
    ENVIRONMENT.rootContractAddress,
    rootAbi,
    signer || defaultProvider
  );
};

export const createERC20Contract = (
  address: string,
  signer?: ethers.Signer
) => {
  return new ethers.Contract(address, erc20Abi, signer || defaultProvider);
};
