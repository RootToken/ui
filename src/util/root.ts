import { ethers } from "ethers";
import ENVIRONMENT from "../config";
import rootAbi from "../abi/Root.json";

export const createRootContract = (signer?: ethers.Signer) => {
  return new ethers.Contract(ENVIRONMENT.rootContractAddress, rootAbi, signer);
};
