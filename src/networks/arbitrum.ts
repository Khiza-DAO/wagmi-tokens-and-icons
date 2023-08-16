import { ChainDict } from "./types";
import { usdt, usdc, wbtc, dai, tusd, frax, eth, weth } from "../tokens";
import { arbitrum as arbitrumWagmiRef } from "@wagmi/chains";
// import arbitrumIcon from "@/icons/colored/chains/arbitrum.svg";

export const arbitrum = {
  // icon: "img:" + arbitrumIcon,
  ...arbitrumWagmiRef,
  tokens: {
    eth: {
      ...eth,
      isNative: true,
    },
    // Isso é o token de governança da Arbitrum e não seu token nativo
    // arb: {
    //   ...arb,
    //   address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
    // },
    usdt: {
      ...usdt,
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    },
    usdc: {
      ...usdc,
      address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      decimals: 6,
    },
    // uni: {
    //   ...uni,
    //   address: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
    // },
    wbtc: {
      ...wbtc,
      address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    },
    weth: {
      ...weth,
      address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    },
    frax: {
      ...frax,
      address: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
    },
    // link: {
    //   ...link,
    //   address: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    // },
    dai: {
      ...dai,
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    },
    tusd: {
      ...tusd,
      address: "0x4D15a3A2286D883AF0AA1B3f21367843FAc63E07",
    },
  },
} as const satisfies ChainDict;