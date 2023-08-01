import { TokensAddition } from "./types";
import {
  usdt,
  usdc,
  uni,
  wbtc,
  link,
  dai,
  busd,
  avax,
  tusd,
  frax,
  weth,
} from "../tokens";
import { avalanche as avalancheWagmiRef, Chain } from "@wagmi/chains";
import Token from "../models/Token";
// import avalancheIcon from "@/icons/colored/chains/avalanche.svg";

export const avalanche = {
  // icon: "img:" + avalancheIcon,
  ...avalancheWagmiRef,
  tokens: {
    avax: new Token({
      ...avax,
      isNative: true,
    }),
    usdt: new Token({
      ...usdt,
      address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    }),
    usdc: new Token({
      ...usdc,
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      decimals: 6,
    }),
    busd: new Token({
      ...busd,
      address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
    }),
    weth: new Token({
      ...weth,
      address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      note: "bridged through avalanche bridge",
    }),
    frax: new Token({
      ...frax,
      address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
    }),
    // uni: new Token({
    //   ...uni,
    //   address: "0x8ebaf22b6f053dffeaf46f4dd9efa95d89ba8580",
    // }),
    wbtc: new Token({
      ...wbtc,
      address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    }),
    // link: new Token({
    //   ...link,
    //   address: "0x5947bb275c521040051d82396192181b413227a3",
    // }),
    dai: new Token({
      ...dai,
      address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    }),
    tusd: new Token({
      ...tusd,
      address: "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB",
    }),
  },
} as const satisfies Chain & TokensAddition;

export default avalanche;
