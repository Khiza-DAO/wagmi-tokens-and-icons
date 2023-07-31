import { AditionalChainInfo } from "./types";
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
// import optimismIcon from "@/icons/colored/chains/optimism.svg";

export const optimism = {
  // icon: "img:" + optimismIcon,
  ...optimismWagmiRef,
  tokens: {
    op: {
      ...op,
      address: "0x4200000000000000000000000000000000000042",
    },
    usdt: {
      ...usdt,
      address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    },
    usdc: {
      ...usdc,
      address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
      decimals: 6,
    },
    matic: {
      ...matic,
      address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    },
    frax: {
      ...frax,
      address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    },
    busd: {
      ...busd,
      address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
    },
    // uni: {
    //   ...uni,
    //   address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
    // },
    wbtc: {
      ...wbtc,
      address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    },
    // link: {
    //   ...link,
    //   address: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    // },
    dai: {
      ...dai,
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    },
  },
  contracts: {
    // [TODO][TODO-H] FALTA CONFIGURAR o endereço do ToklyRegistry em prod
    // new NetworkContract({
    //   name: "ToklyRegistry",
    //   address: "0x70ff3e6cAeDad0495A8D62BBC86F7963D4DB5246",
    // }),
  },
} as const satisfies Chain & AditionalChainInfo;

export default optimism;
