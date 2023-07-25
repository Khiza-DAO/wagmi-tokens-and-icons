import Token from "../src/models/Token";
import {
  arrayMainnet,
  getTokenForNetwork,
} from "../src/networks/tokensPerNetwork/mainnet";

const weth = new Token({
  decimals: 18,
  symbol: "WETH",
  name: "Wrapped Ether",
  icon: "ethIcon",
  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
});

const usdt = new Token({
  decimals: 18,
  symbol: "USDT",
  name: "Theter",
  icon: "usdtIcon",
  address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
});
const usdc = new Token({
  decimals: 18,
  symbol: "USDC",
  name: "USD Coin",
  icon: "usdcIcon",
  address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
});

const dai = new Token({
  decimals: 18,
  symbol: "DAI",
  name: "DAI",
  icon: "daiIcon",
  address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
});

test("getTokenForNetwork test function", () => {
  expect(getTokenForNetwork(arrayMainnet)).toStrictEqual({
    weth: weth,
    usdt: usdt,
    usdc: usdc,
    dai: dai,
  });
});
