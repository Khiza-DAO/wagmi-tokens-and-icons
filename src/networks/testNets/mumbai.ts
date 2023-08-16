import { matic, usdc, usdt } from "../../tokens";
import { polygonMumbai as mumbaiWagmiRef } from "@wagmi/chains";
import { ChainDict } from "../types";
import { zeroAddress } from "../../models";
// import polygonIcon from '@/icons/colored/chains/polygon.svg'

export const polygonMumbai = {
  ...mumbaiWagmiRef,
  tokens: {
    matic: {
      ...matic,
      address: zeroAddress,
      isNative: true,
    },
    usdc: {
      ...usdc,
      address: "0xE097d6B3100777DC31B34dC2c58fB524C2e76921",
      decimals: 6,
    },
    usdt: {
      ...usdt,
      address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
      decimals: 6,
    },
  },
} as const satisfies ChainDict;
