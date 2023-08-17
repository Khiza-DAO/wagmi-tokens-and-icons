import { ChainKey, ContractDict, ContractDictConfig, KnownContractKey, KnownContractReturn } from "./ContractDict";
/**
 * Dictionary of known contracts with their associated information.
 */
export declare class KhizaContractDict {
    private knownContracts;
    private selectedChain;
    private defaultAbi;
    /**
     * Constructs a new instance of the `KhizaContractDict` class.
     * @param config - An optional array of contract configurations to initialize the dictionary with.
     */
    constructor(config: ContractDictConfig);
    /**
     * Adds a contract to the dictionary.
     * @param id - The identifier of the contract.
     * @param contract - The contract information.
     */
    addContract(id: string, contract: ContractDict): void;
    /**
     * Sets the selected chain.
     * @param chain - The chain key.
     */
    setChain(chain: ChainKey): void;
    /**
     * Retrieves a contract from the dictionary.
     * @param id - The identifier of the contract.
     * @returns The contract information if found, or `undefined` otherwise.
     * @throws An error if no contracts were added or if ABI is required for custom contracts but not provided.
     */
    getContract(id: KnownContractKey): KnownContractReturn | undefined;
}
