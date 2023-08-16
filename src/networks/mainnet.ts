import { mainnet as wagmiRef } from "@wagmi/chains";
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
import { ChainDict } from "./types";
import { zeroAddress } from "../models";

export const mainnet = {
  ...wagmiRef,
  tokens: {
    eth: {
      ...eth,
      address: zeroAddress,
      isNative: true,
    },
    weth: {
      ...weth,
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    usdt: {
      ...usdt,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    usdc: {
      ...usdc,
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    dai: {
      ...dai,
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    },
    matic: {
      ...matic,
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    },
    tusd: {
      ...tusd,
      address: "0x0000000000085d4780B73119b644AE5ecd22b376",
    },
    wbtc: {
      ...wbtc,
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    },
    busd: {
      ...busd,
      address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    },
    bnb: {
      ...bnb,
      address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    },
    usdp: {
      ...usdp,
      address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
    },
    steth: {
      ...steth,
      address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    },
    frax: {
      ...frax,
      address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    },
  },
} as const satisfies ChainDict;
