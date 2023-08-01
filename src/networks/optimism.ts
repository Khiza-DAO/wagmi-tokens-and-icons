import { TokensAddition } from "./types";
import {
  usdt,
  usdc,
  link,
  dai,
  wbtc,
  busd,
  uni,
  op,
  matic,
  frax,
} from "../tokens";
import { optimism as optimismWagmiRef, Chain } from "@wagmi/chains";
import Token from "../models/Token";
// import optimismIcon from "@/icons/colored/chains/optimism.svg";

export const optimism = {
  // icon: "img:" + optimismIcon,
  ...optimismWagmiRef,
  tokens: {
    op: new Token({
      ...op,
      address: "0x4200000000000000000000000000000000000042",
    }),
    usdt: new Token({
      ...usdt,
      address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    }),
    usdc: new Token({
      ...usdc,
      address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
      decimals: 6,
    }),
    matic: new Token({
      ...matic,
      address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    }),
    frax: new Token({
      ...frax,
      address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    }),
    busd: new Token({
      ...busd,
      address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
    }),
    // uni: new Token({
    //   ...uni,
    //   address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
    // }),
    wbtc: new Token({
      ...wbtc,
      address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    }),
    // link:new Token( {
    //   ...link,
    //   address: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    // }),
    dai: new Token({
      ...dai,
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    }),
  },
} as const satisfies Chain & TokensAddition;

export default optimism;
