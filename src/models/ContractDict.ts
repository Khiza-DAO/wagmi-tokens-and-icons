import { Address } from "viem";

// [TODO] como armazenar endereços de carteiras (não contratos) conhecidas?
export type KnownContractKey = string;
export type ContractType = "ERC20" | "ERC721" | "custom";

export type TokenContract = {
  id: KnownContractKey; // identificador interno do projeto (usado pelo usuário do pacote)
  address?: Address;
  name: string; // label legível para o usuário final
  symbol: string; // label legível para o usuário final
  type: "ERC20" | "ERC721";
  abi?: readonly any[];
};

export type CustomContract = {
  id: KnownContractKey; // identificador interno do projeto (usado pelo usuário do pacote)
  address?: Address;
  name?: string;
  symbol?: string;
  type: "custom";
  abi: readonly any[];
};

export type KnownContract = TokenContract | CustomContract;
export type KnownContractReturn = KnownContract &
  Required<Pick<KnownContract, "abi">>;

export type StopRecursion = "id" | "type";
export type NestedKnownContract = Partial<Omit<KnownContract, StopRecursion>> &
  Required<Pick<KnownContract, "address">>;
export type RootKnownContract = KnownContract;
export type ChainKey = number;

export type ContractDict = RootKnownContract & {
  chains: {
    [key: ChainKey]: NestedKnownContract;
  };
};

export type KnownContracts = {
  [key: string]: ContractDict;
};

export type ContractDictConfig = {
  knownContracts?: ContractDict[];
};
