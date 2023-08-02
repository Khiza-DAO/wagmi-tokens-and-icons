import { Address } from "viem";

type chain = {
  address: Address;
  id?: string;
  name?: string;
};

export type ContractDict = {
  id: string; // identificador
  name: string; // nome legível
  chainsAddress: {
    [key: number]: chain;
    // por padrão pega os dados acima, mas se passar aqui sobrescreve
  };
} & (
  | ({
      symbol: string; // símbolo legível (somente para tokens e NFTs)
    } & (
      | {
          type: "ERC20"; // ERC20 (tokens), ERC721 (NFTs) ou custom
          icon: string;
        }
      | {
          type: "ERC721"; // ERC20 (tokens), ERC721 (NFTs) ou custom
          png: string;
        }
    ))
  | {
      type: "custom"; // ERC20 (tokens), ERC721 (NFTs) ou custom
      abi: readonly object[]; // apenas custom
    }
);
