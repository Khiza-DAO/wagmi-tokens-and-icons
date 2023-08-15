// ======================== Definição

import { Address } from "viem";

// [TODO] como armazenar endereços de carteiras (não contratos) conhecidas?
type KnownContractKey = string
type ContractType = 'ERC20' | 'ERC721' | 'custom'

type TokenContract = {
    id: KnownContractKey;   // identificador interno do projeto (usado pelo usuário do pacote)
    address?: Address;
    name: string;           // label legível para o usuário final
    symbol: string;         // label legível para o usuário final
    type: 'ERC20' | 'ERC721';
    abi?: any[];
}

type CustomContract = {
    id: KnownContractKey;   // identificador interno do projeto (usado pelo usuário do pacote)
    address?: Address;
    name?: string;
    symbol?: string;
    type: 'custom';
    abi: any[];
}

type KnownContract = TokenContract | CustomContract
type KnownContractReturn = KnownContract & Required<Pick<KnownContract, 'abi'>>

// teste
const a: KnownContractReturn = {
    type: "ERC20",
    id: '',
    address: '0x00',
    name: '',
    symbol: '',
    abi: [1],
}

type StopRecursion = 'id' | 'type'
type NestedKnownContract = Partial<Omit<KnownContract, StopRecursion>> & Required<Pick<KnownContract, 'address'>>
type RootKnownContract = KnownContract
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
    private defaultAbi: Record<ContractType, any[]> = {
        'ERC20': [],
        'ERC721': [],
        'custom': [],
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
        }

        const abi = ret.abi || this.defaultAbi[ret.type];
        if (!abi.length) {
            throw new Error(`ABI is required for custom contracts. ID: ${id}`)
        }

        return {
            ...ret,
            abi,
        };
    }
}

// ======================================== Uso no início do projeto - configs

import { bsc, mainnet, polygon } from "@wagmi/chains";

const usdcDef: ContractDict = {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
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