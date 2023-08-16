import { eth, usdc } from "../../tokens";
import { optimismGoerli as optimismGoerliWagmiRef } from "@wagmi/chains";
import { ChainDict } from "../types";
import { zeroAddress } from "../../models";
// import optimismIcon from "@/icons/colored/chains/optimism.svg";

export const optimismGoerli = {
  ...optimismGoerliWagmiRef,
  tokens: {
    eth: {
      ...eth,
      address: zeroAddress,
      isNative: true,
    },
    // {
    //   ...usdc,
    //   // address: "0x5425890298aed601595a70AB815c96711a31Bc65",
    // },
  },
} as const satisfies ChainDict;
