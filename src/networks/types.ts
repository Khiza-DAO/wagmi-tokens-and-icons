import { Address } from "viem";
import Token from "../models/Token";

export type customContract = {
  address: Address;
};

export type TokensAddition = {
  tokens: {
    [key: string]: Token;
  };
};
