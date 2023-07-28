type Address = `0x${string}`;

type chain = {
  address: Address;
  id?: string;
  name?: string;
  symbol?: string;
};

export type customContract = {
  id: string; // identificador
  name: string; // nome legível
  chains: {
    [any: number]: chain;
    // por padrão pega os dados acima, mas se passar aqui sobrescreve
  };
} & (
  | {
      type: "ERC20" | "ERC721"; // ERC20 (tokens), ERC721 (NFTs) ou custom
      symbol: string; // símbolo legível (somente para tokens e NFTs)
    }
  | {
      type: "custom"; // ERC20 (tokens), ERC721 (NFTs) ou custom
      abi: Object[]; // apenas custom
    }
);

const custom = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies customContract

export const dictionary = {};
//////////////////////////////////////////////////////////////////////////////
import { mainnet as wagmiMainnet } from "@wagmi/chains";
import { eth } from "../../tokens/eth";
import Token from "../../models/Token";
import _ from "lodash";
import {
  bnb,
  busd,
  dai,
  frax,
  matic,
  steth,
  tusd,
  usdc,
  usdp,
  usdt,
  wbtc,
  weth,
} from "../../tokens";

// type Obj = {[K in typeof Token]: InstanceType<Token>}

export const getTokenForNetwork = <TObj extends Record<string, Token>>(
  ArrayOfToken: Token[]
) =>
  // { [K in typeof Token]: InstanceType<Token> }
  {
    const returnObject: any = {};

    ArrayOfToken.forEach((token) => {
      returnObject[token.symbol.toLocaleLowerCase()] = _.cloneDeep(token);
    });

    return returnObject;
  };

export const mainnetTokens = {
  tokens: {
    eth: {
      ...eth,
      isNative: true,
    },
  },
};

export const arrayMainnet: Token[] = [
  new Token({
    ...weth,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  }),
  new Token({
    ...usdt,
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  }),
  new Token({
    ...usdc,
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  }),
  new Token({
    ...dai,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  }),
  new Token({
    ...matic,
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  }),
  new Token({
    ...tusd,
    address: "0x0000000000085d4780B73119b644AE5ecd22b376",
  }),
  new Token({
    ...wbtc,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  }),
  new Token({
    ...busd,
    address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
  }),
  new Token({
    ...bnb,
    address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
  }),
  new Token({
    ...usdp,
    address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
  }),
  new Token({
    ...steth,
    address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
  }),
  new Token({
    ...frax,
    address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  }),
];
