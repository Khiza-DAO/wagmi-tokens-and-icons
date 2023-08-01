# wagmi-tokens-and-icons

This repository provide icons and popular token contacts for wagmi networks. Also provides types for adding those contract into a network and type for customContract

```typescript
import { mainnet } from "@khizadao/chain-dictionary";

const ethIcon = mainnet.icon;

const ethTokens = mainnet.tokens;

// Como eu gostaria
const usdtTokenEthNetwork = mainnet.tokens.usdt;
```

## Problema

Ter que salvar em env/alguma outra forma endereços de contratos muito utilizados, permitindo confusões e erros.

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
import { mainnet, polygon } from "@khizadao/chain-dictionary";

// Define um tipo para definições de contratos conhecidos
const customContracts = {
  id: "usdc", // identificador
  name: "Circle USD", // nome legível
  symbol: "USDC", // símbolo legível (somente para tokens e NFTs)
  type: "ERC20", // ERC20 (tokens), ERC721 (NFTs) ou custom
  abi: [], // apenas custom
  chains: {
    [mainnet.id]: { address: "0x000cba" },
    // por padrão pega os dados acima, mas se passar aqui sobrescreve
    [polygon.id]: { address: "0x000cba", name: "(PoS) Tether USD" },
  },
} as const satisfies CustomContract;

// Instanciar um dicionário de redes passando as definições
// const dictionary = new ChainDictionary({
//     contracts: customContracts,
// })

// Ou registrar as definições posteriormente
// dictionary.register({
//     id: 'tokly-registry',
//     name: 'Tokly Registry',
//     type: 'custom',
//     abi: [...],
//     chains: {
//         [mainnet.id]: { address: '0x000cba' },
//         [polygon.id]: { address: '0x000cba' },
//     }
// })

// Pegar as definições de uma rede através do seu id
//const mainnet = dictionary.findByChainId(1)
import { mainnet } from "@khizadao/chain-dictionary";

// Exemplo: pegar o endereço de um contrato a partir da instância da rede
// mainnet.getContract('usdc').address
// mainnet.customContracts.usdc.address // Bônus: deixar por último
mainnet.tokens.usdc;

// Exemplo: acessar propriedades do @wagmi/chains
mainnet.blockExplorer.etherscan;

// Exemplo: pegar chain e contrato a partir do seletor de rede
// const chainId = 137 // que vem do seletor de rede
// dictionary.find(chainId).getContract('usdc').address
polygon.tokens.usdc.address;

// Pega custom Contracts
const myCustomContract = {
  id: "abc",
  name: "abc",
  type: "custom", // can be "ERC20" or "ERC721", those have symbol property
  abi: [], // abi is only for "custom"
  // icon or png only with "ERC20" or "ERC721"
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;
```

### ContractDict type

```typescript

type ContractDict = {
  id: string;
  name: string;
  chains: {
    [key: number]: { address: Address }; //chain
  };
} & (
  | ({
      symbol: string;
    } & (
      | {
          type: "ERC20";
          icon: string;
        }
      | {
          type: "ERC721";
          png: string;
        }
    ))
  | {
      type: "custom";
      abi: readonly object[];
    }
);

type chain = {
  address: Address;
    ... // any information you want
};
```

### Network extended example

```typescript
export const mainnet = {
  ...wagmiMainnet,
  tokens: {
    eth: new Token({
      ...eth,
      isNative: true,
    }),
    usdt: new Token({
      ...usdt,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    }),
    usdc: new Token({
      ...usdc,
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    }),
    matic: new Token({
      ...matic,
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    }),
    ...
  },
} as const satisfies Chain & ChainAddition;
    // from @wagmi/chains  & from your

export type TokensAddition = {
  tokens: {
    [key: string]: Token;
  };
};

```
