import axios from "axios";
import { ITokenSymbol } from "../interfaces/token";

export const getPrices = async (): Promise<{
  [id in ITokenSymbol]: number;
}> => {
  try {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=usd-coin%2Cethereum%2Cdai%2Ctether%2Cweth&vs_currencies=usd&precision=2"
    );
    return {
      DAI: data.data.dai.usd,
      WETH: data.data.weth.usd,
      ETH: data.data.ethereum.usd,
      USDC: data.data["usd-coin"].usd,
      USDT: data.data["tether"].usd,
      BEAN: 1,
      "BEAN DEPOSIT": 1,
    };
  } catch (err) {
    throw err;
  }
};
