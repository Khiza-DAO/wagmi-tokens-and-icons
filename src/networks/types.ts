import { Chain } from "@wagmi/chains";
import IToken from "../models/interfaces/IToken";

export type Icon = {
  icon: string;
};

export type Tokens = {
  tokens: {
    [key: string]: IToken;
  };
};

export type ChainDict = Chain & Tokens;
