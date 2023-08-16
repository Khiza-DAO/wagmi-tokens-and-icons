import { avalancheFuji as avalancheFujiWagmiRef } from "@wagmi/chains";
import { ChainDict } from "../types";
import { avax, usdc } from "../../tokens";
import { zeroAddress } from "viem";
// import avalancheIcon from "@/icons/colored/chains/avalanche.svg";

export const avalancheFuji = {
  ...avalancheFujiWagmiRef,
  tokens: {
    avax: {
      ...avax,
      address: zeroAddress,
      isNative: true,
    },
    usdc: {
      ...usdc,
      address: "0x5425890298aed601595a70AB815c96711a31Bc65",
      decimals: 6,
    },
  },
} as const satisfies ChainDict;
