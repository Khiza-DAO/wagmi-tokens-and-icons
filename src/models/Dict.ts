import _ from "lodash";
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

export class KhizaContractDict {
  private knownContracts: KnownContracts = {};
  private selectedChain: ChainKey = 1;
  private defaultAbi: Record<ContractType, readonly any[]> = {
    ERC20: erc20ABI,
    ERC721: erc721ABI,
    custom: [],
  };

  constructor(config: ContractDictConfig) {
    for (const contract of config.knownContracts || []) {
      this.addContract(contract.id, contract);
    }
  }

  addContract(id: string, contract: ContractDict) {
    this.knownContracts[id] = contract;
  }

  setChain(chain: ChainKey) {
    this.selectedChain = chain;
  }

  getContract(id: KnownContractKey): KnownContractReturn | null {
    const rootContract = this.knownContracts[id];
    if (!rootContract) {
      return null;
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
