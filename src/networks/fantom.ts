import { usdt, usdc, link, dai, ftm, wbtc, frax, weth } from "../tokens";
import { fantom as fantomWagmiRef } from "@wagmi/chains";
import { ChainDict } from "./types";
// import fantomIcon from "@/icons/colored/chains/fantom.svg";

export const fantom = {
  // icon: "img:" + fantomIcon,
  ...fantomWagmiRef,
  tokens: {
    ftm: {
      ...ftm,
      isNative: true,
    },
    usdt: {
      ...usdt,
      address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
      name: "Frapped USDT",
      symbol: "fUSDT",
    },
    usdc: {
      ...usdc,
      address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      decimals: 6,
    },
    wbtc: {
      ...wbtc,
      address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    },
    weth: {
      ...weth,
      address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
      note: "bridged through multichain",
    },
    frax: {
      ...frax,
      address: "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355",
    },
    // link:  {
    //   ...link,
    //   address: "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8",
    // },
    // dai:  {
    //   ...dai,
    //   address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    // },
  },
} as const satisfies ChainDict;
