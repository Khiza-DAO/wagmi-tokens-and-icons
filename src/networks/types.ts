import { Address } from "viem";
import Token from "../models/Token";

export type customContract = {
  address: Address;
};

export type AditionalChainInfo = {
  tokens: {
    [key: string]: Token;
  };
  customContracts?: {
    [key: string]: customContract;
  };
};
