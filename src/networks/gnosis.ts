import { usdt, usdc, link, dai, wbtc, busd, uni, xdai, weth } from "../tokens";
import { gnosis as gnosisWagmiRef } from "@wagmi/chains";
import { ChainDict } from "./types";
import { zeroAddress } from "../models";
// import gnosisIcon from "@/icons/colored/chains/gnosis.svg";

export const gnosis = {
  // icon: "img:" + gnosisIcon,
  ...gnosisWagmiRef,
  tokens: {
    xdai: {
      ...xdai,
      address: zeroAddress,
      isNative: true,
    },
    dai: {
      ...dai,
      address: "0x44fA8E6f47987339850636F88629646662444217",
    },
    usdt: {
      ...usdt,
      address: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
    },
    usdc: {
      ...usdc,
      address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
      decimals: 6,
    },
    weth: {
      ...weth,
      address: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
    },
    busd: {
      ...busd,
      address: "0xdd96b45877d0e8361a4ddb732da741e97f3191ff",
    },
    // uni:
    //   ...uni,
    //   address: "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
    // },
    wbtc: {
      ...wbtc,
      address: "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252",
    },
    // link: {
    //   ...link,
    //   address: "0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2",
    // },
  },
} as const satisfies ChainDict;
