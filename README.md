# wagmi-tokens-and-icons

This repository provide icons and popular token contacts for wagmi networks

```typescript
import { mainnet } from 'wagmi-tokens-and-icons'

const ethIcon = mainnet.icon


const ethTokens = mainnet.tokens
// tokens: [
//     {
//       ...eth,
//       isNative: true,
//     },
//     {
//       ...weth,
//       address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
//     },
//     {
//       ...usdt,
//       address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
//     }]

// Como eu gostaria
const usdtTokenEthNetwork = mainnet.tokens.usdt

// Ideia atual
// const usdtTokenEthNetwork = ethereum.tokens?.find((token)=> token.symbol === 'usdt')
```

## Problema

O env fica assim:

```
MAINNET_CONTRACT_A_ADDRESS=0x000abc
MAINNET_CONTRACT_B_ADDRESS=0x000abc
POLYGON_CONTRACT_A_ADDRESS=0x000cba
POLYGON_CONTRACT_B_ADDRESS=0x000cba
...
```

## Minha ideia

```typescript
import ChainDictionary, { mainnet, polygon } from '@khizadao/chain-dictionary'

// Define um tipo para definições de contratos conhecidos
const customContracts: CustomContract[] = [
    {
        id: 'usdc',         // identificador
        name: 'Circle USD', // nome legível
        symbol: 'USDC',     // símbolo legível (somente para tokens e NFTs)
        abi: [],            // apenas custom
        type: 'ERC20',      // ERC20 (tokens), ERC721 (NFTs) ou custom
        chains: {
            [mainnet.id]: { address: '0x000cba' },
            // por padrão pega os dados acima, mas se passar aqui sobrescreve
            [polygon.id]: { address: '0x000cba', name: '(PoS) Tether USD' },
        }
    }
]

// Instanciar um dicionário de redes passando as definições
const dictionary = new ChainDictionary({
    contracts: customContracts,
})

// Ou registrar as definições posteriormente
dictionary.register({
    id: 'tokly-registry',
    name: 'Tokly Registry',
    abi: [...],
    type: 'custom',
    chains: {
        [mainnet.id]: { address: '0x000cba' },
        [polygon.id]: { address: '0x000cba' },
    }
})

// Pegar as definições de uma rede através do seu id
const mainnet = dictionary.findByChainId(1)

// Exemplo: pegar o endereço de um contrato a partir da instância da rede
mainnet.getContract('usdc').address
mainnet.customContracts.usdc.address // Bônus: deixar por último

// Exemplo: acessar propriedades do @wagmi/chains
mainnet.blockExplorer.etherscan

// Exemplo: pegar chain e contrato a partir do seletor de rede
const chainId = 137 // que vem do seletor de rede
dictionary.find(chainId).getContract('usdc').address

```
