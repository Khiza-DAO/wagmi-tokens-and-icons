import { TokensAddition } from "./types";
import {
  usdt,
  usdc,
  uni,
  link,
  dai,
  busd,
  matic,
  bnb,
  tusd,
  usdp,
  frax,
  avax,
  eth,
  weth,
} from "../tokens";
import { bsc as bscWagmiRef, Chain } from "@wagmi/chains";
import Token from "../models/Token";
// import bscIcon from "@/icons/colored/chains/bsc.svg";

export const bsc = {
  // icon: "img:" + bscIcon,
  ...bscWagmiRef,
  tokens: {
    bnb: new Token({
      ...bnb,
      isNative: true,
    }),
    // Isso está estranho
    // usdt:new Token({
    //   ...usdt,
    //   address: "0x55d398326f99059ff775485246999027b3197955",
    // }),
    usdc: new Token({
      ...usdc,
      address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      decimals: 18,
    }),
    dai: new Token({
      ...dai,
      address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    }),
    eth: new Token({
      ...eth,
      address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      note: "Binance-Peg Ethereum Token",
    }),
    weth: new Token({
      ...weth,
      address: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA",
      name: "Wrapped Ether",
      note: "Bridged through Wormhole",
    }),
    matic: new Token({
      ...matic,
      address: "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
    }),
    usdp: new Token({
      ...usdp,
      address: "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
    }),
    busd: new Token({
      ...busd,
      address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    }),
    frax: new Token({
      ...frax,
      address: "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40",
    }),
    // uni:new Token({
    //   ...uni,
    //   address: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
    // }),
    // link:new Token({
    //   ...link,
    //   address: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    // }),
    tusd: new Token({
      ...tusd,
      address: "0x14016e85a25aeb13065688cafb43044c2ef86784",
    }),
    avax: new Token({
      ...avax,
      address: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
    }),
  },
} as const satisfies Chain & TokensAddition;

export default bsc;
