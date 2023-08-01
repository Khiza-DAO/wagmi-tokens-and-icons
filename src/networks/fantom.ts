import { Chain } from "viem";
import { usdt, usdc, link, dai, ftm, wbtc, frax, weth } from "../tokens";
import { fantom as fantomWagmiRef } from "@wagmi/chains";
import { TokensAddition } from "./types";
import Token from "../models/Token";
// import fantomIcon from "@/icons/colored/chains/fantom.svg";

export const fantom = {
  // icon: "img:" + fantomIcon,
  ...fantomWagmiRef,
  tokens: {
    ftm: new Token({
      ...ftm,
      isNative: true,
    }),
    usdt: new Token({
      ...usdt,
      address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
    }),
    usdc: new Token({
      ...usdc,
      address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      decimals: 6,
    }),
    wbtc: new Token({
      ...wbtc,
      address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    }),
    weth: new Token({
      ...weth,
      address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
      note: "bridged through multichain",
    }),
    frax: new Token({
      ...frax,
      address: "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355",
    }),
    // link: new Token( {
    //   ...link,
    //   address: "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8",
    // }),
    // dai: new Token( {
    //   ...dai,
    //   address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    // }),
  },
} as const satisfies Chain & TokensAddition;

export default fantom;
