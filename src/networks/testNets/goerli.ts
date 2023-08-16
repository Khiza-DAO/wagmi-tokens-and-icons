import { usdc, eth, weth } from "../../tokens/";
import { goerli as goerliWagmiRef } from "@wagmi/chains";
import { zeroAddress } from "../../models";
import { ChainDict } from "../types";
// import ethereumIcon from "@/icons/colored/chains/ethereum.svg";

export const goerli = {
  ...goerliWagmiRef,
  tokens: {
    eth: {
      ...eth,
      address: zeroAddress,
      isNative: true,
    },
    usdc: {
      ...usdc,
      decimals: 6,
      address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
    },
    weth: {
      ...weth,
      address: "0x695364ffaa20f205e337f9e6226e5e22525838d9",
      decimals: 18,
    },
  },
} as const satisfies ChainDict;
