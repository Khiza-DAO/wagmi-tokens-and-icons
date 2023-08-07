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

// Pegar as definições de uma rede através do seu id
//const mainnet = dictionary.findByChainId(1)
import { mainnet } from "@khizadao/chain-dictionary";

// Exemplo: pegar o endereço de um contrato a partir da instância da rede
mainnet.tokens.usdc.address;

// Exemplo: acessar propriedades do @wagmi/chains
mainnet.blockExplorer.etherscan;

// Exemplo: pegar chain e contrato a partir do seletor de rede
(some kind of web3plugin).network.tokens.usdc.address;

// Pega custom Contracts
const myCustomContract = {
  id: "abc",
  name: "abc",
  type: "custom", // can be "ERC20" or "ERC721", those have symbol property
  abi: [], // abi is only for "custom"
  // icon or png only with "ERC20" or "ERC721"
  chainsAddress: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;

// Define um tipo para definições de contratos conhecidos
const customContracts = {
  id: "usdc", // identificador
  name: "Circle USD", // nome legível
  symbol: "USDC", // símbolo legível (somente para tokens e NFTs)
  type: "ERC20", // ERC20 (tokens), ERC721 (NFTs) ou custom
  //abi: [],  apenas custom
  chainsAddress: {
    [mainnet.id]: { address: "0x000cba" },
    // por padrão pega os dados acima, mas se passar aqui sobrescreve
    [polygon.id]: { address: "0x000cba", name: "(PoS) Tether USD" },
  },
} as const satisfies CustomContract;
```

### ContractDict type

Contract Dict is type definition for custom contracts, allowing to pass the chainId as a property, that will be a number, and is acessable dynamicly!

```typescript
type ContractDict = {
  id: string;
  name: string;
  chainsAddress: {
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

### Example

```typescript
customTokenERC20asConst.chainsAddress[mainnet.id].address;
```

### Network extended example

```typescript
export const mainnet = {
  ...wagmiMainnet,
  tokens: {
    eth: new Token({
      ...eth, // this guys are the base of the token, only having a few properties
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
} as const satisfies ChainDict;

// from @wagmi/chains & aditional infos, you can extends as much as you need
type ChainDict = Chain & Tokens

export type Tokens = {
  tokens: {
    [key: string]: Token;
  };
};
```

## Usando custom Network com createClient do Wagmi

Exemplo do Tokly

```typescript
const chains = supported_networks
  .map((network) => network.wagmiRef!)
  .filter(Boolean);

// 2. Configure wagmi client
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ chains, version: 1, projectId }),
  provider,
});
```

# Genie

# Documentation for ContractDict Type

The `ContractDict` type is a TypeScript type that provides a custom contract object with the addresses of the smart contract in different networks. It has the following properties:

1. **id** (string): An identifier that uniquely identifies the contract.
2. **name** (string): A human-readable name for the contract.
3. **chainsAddress** (object): An object that contains chain addresses for the contract. Each key in this object represents a network chain, and the corresponding value is an `Address` type.
   - `Address` type: This is a custom type that represents a network address. You should define this type according to your particular use case.

In addition to the above properties, the `ContractDict` type also has the following conditional properties based on the contract type:

1. **symbol** (string): A readable symbol for the contract. This property only exists if the contract is of type `ERC20` or `ERC721`.
2. **type** (string): The type of the contract. It can be one of the following:
   - `"ERC20"`: Indicates that the contract is an ERC20 token.
   - `"ERC721"`: Indicates that the contract is an ERC721 non-fungible token (NFT).
   - `"custom"`: Indicates that the contract is a custom contract.
3. **icon** (string): An icon representing the contract. This property only exists if the contract is of type `ERC20` and has the `symbol` property.
4. **png** (string): A PNG image representing the contract. This property only exists if the contract is of type `ERC721` and has the `symbol` property.
5. **abi** (readonly object[]): An array of objects representing the Application Binary Interface (ABI) of the contract. This property only exists if the contract is of type `custom`.

Please note that the `ContractDict` type provides a flexible structure for representing different types of contracts with their addresses in various networks. You can customize this type to suit your specific requirements by modifying or extending its properties and conditional logic.

Example usage:

```typescript
const exampleContract = {
  id: "abc123",
  name: "Example Token",
  type: "ERC20",
  symbol: "ETK",
  icon: "https://example.com/etk_icon.png",
  chainsAddress: {
    1: { address: "0xfedcba987654321D0A0e5C4F27eAD9083C756Cc2" }, // You may want to add more information to chain type, fell free
    137: { address: "0xfedcba987654321D0A0e5C4F27eAD9083C756Cc2" }
  },
} as const satisfies ContractDict;


type chain = {
  address: Address;
  id?: string;
  name?: string;
};

export const tokenERC20asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chainsAddress: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;
```

In this example, `exampleContract` represents an ERC20 contract with the symbol "ETK" and an icon located at "https://example.com/etk_icon.png". The contract has addresses for chain ids 1 and 137.

Feel free to modify this type according to your needs and use it as a reference for creating custom contract objects with their respective addresses in different networks.

# Documentation for ChainDict Type

The `mainnet` object is a TypeScript constant that represents the mainnet network configuration. It is an extension of the `wagmiMainnet` object and includes additional token configurations under the `tokens` property. The `mainnet` object has the following structure:

```typescript
import { mainnet as wagmiMainnet } from "@wagmi/chains";

const mainnet = {
  ...wagmiMainnet,
  tokens: {
    eth: new Token({ ... }),
    usdt: new Token({ ... }),
    usdc: new Token({ ... }),
    matic: new Token({ ... }),
    ...
  },
} as const satisfies ChainDict;
```

Here's a breakdown of the properties and types used in the `mainnet` object:

1. **...wagmiMainnet**: This syntax spreads the properties from the `wagmiMainnet` object into the `mainnet` object.
2. **tokens**: This property represents a collection of tokens on the mainnet network. Each token is defined as a key-value pair, where the key is the token symbol and the value is an instance of the `Token` class.
   - **[key: string]**: This is an index signature that specifies that the keys of the `tokens` object can be any string.
   - **Token**: This is a custom class defined elsewhere in the codebase. Please refer to the codebase for its implementation.

Additionally, there are two type definitions used in this code snippet:

1. **ChainDict**: This type is an intersection (`&`) of two other types: `Chain` and `Tokens`. It represents a dictionary of chains and their associated tokens.

   - **Chain**: This type represents the configuration of a blockchain chain. Its properties and types are defined elsewhere in the codebase.
   - **Tokens**: This type represents a collection of tokens. It has a property called `tokens`, which is an object with string keys and `Token` values.

2. **Tokens**: This type is an interface that defines the structure of the `tokens` property in the `ChainDict` type. It is an object with string keys and `Token` values.

Please note that the documentation provided above assumes that you have access to the full source code, including the definitions of the `wagmiMainnet` object, `Token` class, `Chain` type, and any other relevant dependencies. Make sure to replace the placeholder values and types with the actual values and types from your codebase.

Feel free to extend and modify the `mainnet` object and the associated types (`ChainDict`, `Tokens`, etc.) according to your needs.
