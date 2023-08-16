import { eth, usdc } from "../../tokens";
import { sepolia as sepoliaWagmiRef } from "@wagmi/chains";
import { ChainDict } from "../types";
import { zeroAddress } from "../../models";
// import ethereumIcon from "@/icons/colored/chains/ethereum.svg";

export const sepolia = {
  ...sepoliaWagmiRef,
  tokens: {
    eth: {
      ...eth,
      address: zeroAddress,
      isNative: true,
    },
  },
} as const satisfies ChainDict;
