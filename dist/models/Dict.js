"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhizaContractDict = void 0;
const ERCabi_1 = require("../assets/ERCabi");
/**
 * Dictionary of known contracts with their associated information.
 */
class KhizaContractDict {
    /**
     * Constructs a new instance of the `KhizaContractDict` class.
     * @param config - An optional array of contract configurations to initialize the dictionary with.
     */
    constructor(config) {
        this.knownContracts = {};
        this.selectedChain = 1;
        this.defaultAbi = {
            ERC20: ERCabi_1.erc20ABI,
            ERC721: ERCabi_1.erc721ABI,
            custom: [],
        };
        config?.forEach((contract) => {
            this.addContract(contract.id, contract);
        });
    }
    /**
     * Adds a contract to the dictionary.
     * @param id - The identifier of the contract.
     * @param contract - The contract information.
     */
    addContract(id, contract) {
        this.knownContracts[id] = contract;
    }
    /**
     * Sets the selected chain.
     * @param chain - The chain key.
     */
    setChain(chain) {
        this.selectedChain = chain;
    }
    /**
     * Retrieves a contract from the dictionary.
     * @param id - The identifier of the contract.
     * @returns The contract information if found, or `undefined` otherwise.
     * @throws An error if no contracts were added or if ABI is required for custom contracts but not provided.
     */
    getContract(id) {
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
exports.KhizaContractDict = KhizaContractDict;
