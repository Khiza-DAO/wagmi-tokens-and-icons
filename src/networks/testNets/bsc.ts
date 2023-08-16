import { bscTestnet as bscTestnetWagmiRef } from "@wagmi/chains";
import { ChainDict } from "../types";
import { bnb, link, usdt } from "../../tokens";
import { zeroAddress } from "viem";
// import bscIcon from "@/icons/colored/chains/bsc.svg";

export const bscTestnet = {
  ...bscTestnetWagmiRef,
  tokens: {
    bnb: {
      ...bnb,
      address: zeroAddress,
      isNative: true,
    },
    usdt: {
      ...usdt,
      address: "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd",
    },
    link: {
      ...link,
      address: "0x84b9b910527ad5c03a9ca831909e21e236ea7b06",
    },
  },
} as const satisfies ChainDict;
