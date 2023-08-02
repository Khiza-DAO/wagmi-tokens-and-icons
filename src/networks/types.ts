import { Chain } from "@wagmi/chains";
import Token from "../models/Token";

export type Icon = {
  icon: string;
};

export type Tokens = {
  tokens: {
    [key: string]: Token;
  };
};

export type ChainDict = Chain & Tokens
