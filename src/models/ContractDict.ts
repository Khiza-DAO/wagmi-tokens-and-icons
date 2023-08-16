import { Address } from "./Address";

// Represents the internal identifier of a known contract
export type KnownContractKey = string;

// Represents the types of contracts that can be known
export type ContractType = "ERC20" | "ERC721" | "custom";

// Represents a token contract
export type TokenContract = {
  id: KnownContractKey; // Internal identifier of the project (used by the package user)
  address?: Address; // Address of the contract
  name: string; // Readable label for the end-user
  symbol: string; // Readable label for the end-user
  type: "ERC20" | "ERC721"; // Type of the contract
  abi?: readonly any[]; // Optional ABI (Application Binary Interface) of the contract
};

// Represents a custom contract
export type CustomContract = {
  id: KnownContractKey; // Internal identifier of the project (used by the package user)
  address?: Address; // Address of the contract
  name?: string; // Optional readable label for the end-user
  symbol?: string; // Optional readable label for the end-user
  type: "custom"; // Type of the contract (custom)
  abi: readonly any[]; // ABI (Application Binary Interface) of the contract
};

// Represents a known contract, which can be either a TokenContract or a CustomContract
export type KnownContract = TokenContract | CustomContract;

// Represents a known contract with required ABI information
export type KnownContractReturn = KnownContract &
  Required<Pick<KnownContract, "abi">>;

// Represents the stop recursion fields for nested known contracts
export type StopRecursion = "id" | "type";

// Represents a nested known contract without stop recursion fields
export type NestedKnownContract = Partial<Omit<KnownContract, StopRecursion>> &
  Required<Pick<KnownContract, "address">>;

// Represents the root known contract
export type RootKnownContract = KnownContract;

// Represents the key for a chain
export type ChainKey = number;

// Represents a contract dictionary with root known contracts and their associated chains
export type ContractDict = RootKnownContract & {
  chains: {
    [key: ChainKey]: NestedKnownContract;
  };
};

// Represents a collection of known contracts stored by keys
export type KnownContracts = {
  [key: string]: ContractDict;
};

// Represents the configuration for a contract dictionary
export type ContractDictConfig = ContractDict[];
