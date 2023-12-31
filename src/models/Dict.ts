import {
  ChainKey,
  ContractDict,
  ContractDictConfig,
  ContractType,
  KnownContractKey,
  KnownContractReturn,
  KnownContracts,
} from "./ContractDict";
import { erc20ABI, erc721ABI } from "../assets/ERCabi";

/**
 * Dictionary of known contracts with their associated information.
 */
export class KhizaContractDict {
  private knownContracts: KnownContracts = {};
  private selectedChain: ChainKey = 1;
  private defaultAbi: Record<ContractType, readonly any[]> = {
    ERC20: erc20ABI,
    ERC721: erc721ABI,
    custom: [],
  };

  /**
   * Constructs a new instance of the `KhizaContractDict` class.
   * @param config - An optional array of contract configurations to initialize the dictionary with.
   */
  constructor(config: ContractDictConfig) {
    config?.forEach((contract) => {
      this.addContract(contract.id, contract);
    });
  }

  /**
   * Adds a contract to the dictionary.
   * @param id - The identifier of the contract.
   * @param contract - The contract information.
   */
  addContract(id: string, contract: ContractDict) {
    this.knownContracts[id] = contract;
  }

  /**
   * Sets the selected chain.
   * @param chain - The chain key.
   */

  setChain(chain: ChainKey) {
    this.selectedChain = chain;
  }

  /**
   * Retrieves a contract from the dictionary.
   * @param id - The identifier of the contract.
   * @returns The contract information if found, or `undefined` otherwise.
   * @throws An error if no contracts were added or if ABI is required for custom contracts but not provided.
   */
  getContract(id: KnownContractKey): KnownContractReturn | undefined {
    if (Object.keys(this.knownContracts).length === 0)
      throw new Error("No contracts were added");

    const rootContract = this.knownContracts[id];
    if (!rootContract) {
      return undefined;
    }

    const chain = rootContract.chains[this.selectedChain] || {};

    const ret = {
      ...rootContract,
      ...chain,
    };

    const abi = ret.abi || this.defaultAbi[ret.type];
    if (!abi.length) {
      throw new Error(`ABI is required for custom contracts. ID: ${id}`);
    }

    return {
      ...ret,
      abi,
    };
  }
}
