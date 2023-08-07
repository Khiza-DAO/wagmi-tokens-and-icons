import { Address } from "viem";
import Token from "./Token";

// type token = {
//   address: Address;
//   id?: string;
//   name?: string;
//   symbol?: string;
//   png?: string;
//   icon?: string;
// };

export type ContractDict = {
  id: string; // identifier
  name: string; // readable name
  chainsAddress: {
    [key: number]: Token;
  };
} & (
  | ({
      symbol: string; // readable symbol (only for tokens and NFTs)
    } & (
      | {
          type: "ERC20"; // ERC20 (tokens), ERC721 (NFTs) or custom
          icon: string;
        }
      | {
          type: "ERC721"; // ERC20 (tokens), ERC721 (NFTs) or custom
          png: string;
        }
    ))
  | {
      type: "custom"; // ERC20 (tokens), ERC721 (NFTs) or custom
      abi: readonly object[]; // ONLY custom
    }
);
