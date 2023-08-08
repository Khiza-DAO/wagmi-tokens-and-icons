// ======================== Definição

import { Address } from "viem";

// [TODO] como armazenar endereços de carteiras (não contratos) conhecidas?
type KnownContractKey = string

type TokenContract = {
    id: KnownContractKey;   // identificador interno do projeto (usado pelo usuário do pacote)
    address: Address;
    name: string;           // label legível para o usuário final
    symbol: string;         // label legível para o usuário final
    type: 'ERC20' | 'ERC721';
}

type CustomContract = {
    id: KnownContractKey;   // identificador interno do projeto (usado pelo usuário do pacote)
    address: Address;
    name?: string;
    symbol?: string;
    type: 'custom';
    abi: any;
    // abi: any[];
}

type KnownContract = TokenContract | CustomContract

type StopRecursion = 'id' | 'type'
type NestedKnownContract = Partial<Omit<KnownContract, StopRecursion>> & Pick<KnownContract, 'address'>
type RootKnownContract = Omit<KnownContract, 'address'>
type ChainKey = number

type ContractDict = RootKnownContract & {
    chains: {
        [key: ChainKey]: NestedKnownContract;
    }
}

type KnownContracts = {
    [key: string]: ContractDict;
}

type ContractDictConfig = {
    knownContracts?: ContractDict[];
}


class KhizaContractDict {
    private knownContracts: KnownContracts = {};
    private selectedChain: ChainKey;

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

    getContract(id: KnownContractKey): KnownContract | null {
        const rootContract = this.knownContracts[id];
        if (!rootContract) {
            return null;
        }

        const chain = rootContract.chains[this.selectedChain] || {};

        return {
            ...rootContract,
            ...chain,
        }
    }
}

// ======================================== Uso no início do projeto - configs

import { bsc, mainnet, polygon } from "@wagmi/chains";

const usdcDef: ContractDict = {
    id: 'usdc',
    // name: 'USD Coin',
    // symbol: 'USDC',
    type: 'ERC20',
    chains: {
        [mainnet.id]: {
            address: '0x123',
        },
        [bsc.id]: {
            address: '0x456',
            name: 'Binance USD Coin',
            symbol: 'BUSD',
        },
    },
}
const toklyRegistryDef: ContractDict = {
    id: 'ToklyRegistry',
    type: 'custom',
    abi: [2],
    chains: {
        [mainnet.id]: {
            address: '0x123',
        },
        [bsc.id]: {
            address: '0x456',
        },
    },
}

const dict = new KhizaContractDict({
    knownContracts: [usdcDef, toklyRegistryDef]
})

// Uso no meio do projeto

dict.setChain(mainnet.id)

const usdcContract = dict.getContract('usdc')
if (!usdcContract)
    throw new Error('Contract not found')
usdcContract.address

dict.setChain(polygon.id)

dict.setChain(bsc.id)

// [TODO] Tratar ícones (opc.)