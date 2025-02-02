import { BeanstalkSDK, ERC20Token } from "@beanstalk/sdk";

export type ITokenSymbol =
  | "ETH"
  | "WETH"
  | "USDC"
  | "USDT"
  | "DAI"
  | "BEAN"
  | "BEAN DEPOSIT";

export interface IToken {
  name: string;
  symbol: ITokenSymbol;
  icon: string;
  address: string;
  decimals: number;
  formatDecimals: number;
  slippage: number;
  permit: boolean;
}

export const TOKENS: { [key in ITokenSymbol]: IToken } = {
  ETH: {
    name: "Ether",
    symbol: "ETH",
    icon: "/eth.svg",
    address: "0x",
    decimals: 18,
    formatDecimals: 4,
    slippage: 0.5,
    permit: false,
  },
  WETH: {
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: "/weth.png",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
    formatDecimals: 4,
    slippage: 0.5,
    permit: false,
  },
  BEAN: {
    name: "Bean",
    symbol: "BEAN",
    icon: "/bean.svg",
    address: "0xBEA0000029AD1c77D3d5D23Ba2D8893dB9d1Efab",
    decimals: 6,
    formatDecimals: 2,
    slippage: 0.5,
    permit: true,
  },
  "BEAN DEPOSIT": {
    name: "Bean Deposit",
    symbol: "BEAN DEPOSIT",
    icon: "/bean.svg",
    address: "0xBEA0000029AD1c77D3d5D23Ba2D8893dB9d1Efab",
    decimals: 6,
    formatDecimals: 2,
    slippage: 0,
    permit: true,
  },
  USDC: {
    name: "USD Coin",
    symbol: "USDC",
    icon: "/usdc.svg",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    formatDecimals: 2,
    slippage: 0.5,
    permit: true,
  },
  USDT: {
    name: "Tether",
    symbol: "USDT",
    icon: "/tether.svg",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    formatDecimals: 2,
    slippage: 0.5,
    permit: false,
  },
  DAI: {
    name: "Dai",
    symbol: "DAI",
    icon: "/dai.svg",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    formatDecimals: 2,
    slippage: 0.5,
    permit: true,
  },
  
};
