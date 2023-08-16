import { Chain } from "@wagmi/chains";
import IToken from "../models/interfaces/IToken";

export type Icon = {
  icon: string;
};

/**
 * Represents a dictionary of tokens.
 */
export type Tokens = {
  tokens: {
    [key: string]: IToken & Required<Pick<IToken, 'address'>>;
  };
};

/**
 * Represents a chain dictionary that combines both the Chain object and Tokens object.
 */
export type ChainDict = Chain & Tokens;
