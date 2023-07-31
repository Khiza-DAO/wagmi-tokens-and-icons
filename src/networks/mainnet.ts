import { mainnet as wagmiRef, Chain } from "@wagmi/chains";
import {
  bnb,
  busd,
  dai,
  eth,
  frax,
  matic,
  steth,
  tusd,
  usdc,
  usdp,
  usdt,
  wbtc,
  weth,
} from "../tokens";
import Token from "../models/Token";
import { AditionalChainInfo } from "./types";

export const mainnet = {
  ...wagmiRef,
  tokens: {
    eth: new Token({
      ...eth,
      isNative: true,
    }),
    weth: new Token({
      ...weth,
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    }),
    usdt: new Token({
      ...usdt,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    }),
    usdc: new Token({
      ...usdc,
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    }),
    dai: new Token({
      ...dai,
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    }),
    matic: new Token({
      ...matic,
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    }),
    tusd: new Token({
      ...tusd,
      address: "0x0000000000085d4780B73119b644AE5ecd22b376",
    }),
    wbtc: new Token({
      ...wbtc,
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    }),
    busd: new Token({
      ...busd,
      address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    }),
    bnb: new Token({
      ...bnb,
      address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    }),
    usdp: new Token({
      ...usdp,
      address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
    }),
    steth: new Token({
      ...steth,
      address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    }),
    frax: new Token({
      ...frax,
      address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    }),
  },
  customContracts: {
    // toklyRegistry: {
    //   address: "0x",
    // },
  },
} as const satisfies Chain & AditionalChainInfo;

export default mainnet;
