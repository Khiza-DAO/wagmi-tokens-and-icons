# @khizadao/wagmi-dictionary

This repository provide popular token contacts and token icons (in development) for wagmi networks. Also provides types for adding those contract into a network and type for customContract

## Problem found

Env file can be full of addresses of tokens from N networks. Allowing the dev to fall in a LOT of problems, and even when not using env, code could get realy messed up!

Env example:

```
MAINNET_CONTRACT_A_ADDRESS=0x000abc
MAINNET_CONTRACT_B_ADDRESS=0x000abc
POLYGON_CONTRACT_A_ADDRESS=0x000cba
POLYGON_CONTRACT_B_ADDRESS=0x000cba
...
```

## Ready to use

- First, set your contracts.
- Second, iniciate the KhizaContractDict instance passing the contracts inside an array.
- Third, set the chain.
- Done, dict is ready to use

```typescript
// Setting a token for the dict
export const toklyRegistry = {
  id: "toklyRegistry",
  type: "custom",
  abi: ToklyRegistry.abi,
  chains: {
    [mainnet.id]: { address: "0xABC43990662bAF390a5DB684b069e0B962A615689" },
    [polygon.id]: { address: "0xDEFb4904c3CF17e4065057D9fcaf007b53878139" },
    [goerli.id]: { address: "0xABC3990662bAF390a5DB684b069e0B962A615689" },
    [polygonMumbai.id]: { address: "0xDEFb4904c3CF17e4065057D9fcaf007b53878139" }
  },
} as const satisfies ContractDict

import { KhizaContractDict } from "@khizadao/wagmi-dictionary";

// Iniciate KhizaContractDict
export const dict = new KhizaContractDict([toklyRegistry]);

// Set the chain
dict.setChain(1) // Evm chain id for ethereum
// OR
import {mainnet} from "@khizadao/wagmi-dictionary"
dict.setChain(mainnet.id) // 1

// Using the dict
const ToklyRegistryInCurrentNetwork = dict.getContract('toklyRegistry')

console.log(ToklyRegistryInCurrentNetwork.address) // 0xABC43990662bAF390a5DB684b069e0B962A615689
```

Note: dict.setChain is recomanded to be used inside a watchNetwork (from wagmi), so whenever you call dict.getContract it will return the contract from that chain without needing to setChain every time.

## Using custom Networks in createClient from Wagmi

Example using web3Modal:

```typescript
import {mainnet, polygon, ...} from '@khizadao/chain-directory'

const chains = [mainnet, polygon, ...]

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ chains**, version: 1, projectId }),
  provider,
});
```

Note \*\*: w3mConnectors does not extends Chains like configureChains, so it will show an error saying that is not a type of Chain, but it contains the needed chain informations. For now @ts-ignore is the way

# KhizaContractDict

The `KhizaContractDict` class represents a contract dictionary that allows you to store and retrieve information about known contracts.

## Constructor

- `constructor(config?: ContractDictConfig)`: The constructor for the `KhizaContractDict` class. It takes an optional `config` parameter which is an array of `ContractDict` objects. Each object in the `config` array represents a contract and its associated information. The `addContract` method is automatically called for each contract in the `config` array when the `KhizaContractDict` instance is created.

## Methods
- `addContract(id: string, contract: ContractDict): void`: Adds a contract to the contract dictionary. It takes an `id` parameter of type `string` which represents the internal identifier of the contract, and a `contract` parameter of type `ContractDict` which represents the contract object to be added.
- `setChain(chain: ChainKey): void`: Sets the selected chain for retrieving contract information. It takes a `chain` parameter of type `ChainKey`, which is a number representing the key of the chain to select
- `getContract(id: KnownContractKey): KnownContractReturn | undefined`: Retrieves a known contract from the contract dictionary based on its identifier. It takes an `id` parameter of type `KnownContractKey` which represents the internal identifier of the contract. It returns a `KnownContractReturn` object if the contract is found, or `undefined` if the contract does not exist in the dictionary.

## Properties
- `knownContracts: KnownContracts`: A property that represents the collection of known contracts stored in the contract dictionary. It is an object where each contract is identified by a unique string key.
- `selectedChain: ChainKey`: A property that represents the currently selected chain for retrieving contract information. It is a number representing the key of the selected chain.
- `defaultAbi: Record<ContractType, readonly any[]>`: A property that holds the default ABI (Application Binary Interface) for each contract type. It is an object where the keys are the possible contract types ("ERC20", "ERC721", and "custom") and the values are arrays containing the default ABI for each contract type.

## Example

```typescript
import { KhizaContractDict } from "your-module";

const token1 = {
  id: "1",
  name: "Token One",
  symbol: "TKN",
  type: "ERC20",
  chains: {
    1: {
      address: "0xabc123",
    },
    5: {
      address: "0xabc321",
    },
  },
} as const satisfies ContractDict;

const token2 = {
  id: "2",
  name: "NFT Two",
  symbol: "NFT",
  type: "ERC721",
  chains: {
    1: {
      address: "0xdef456",
    },
    5: {
      address: "0xdef654",
      name: "NFT Two Bridged",
    },
  },
} as const satisfies ContractDict;

const config = [token1, token2];

const contractDict = new KhizaContractDict(config);
contractDict.setChain(mainnet.id); // 1

const contract = contractDict.getContract("1");
console.log(contract);
// Expected output:
// {
//   id: "1",
//   name: "Token",
//   symbol: "TKN",
//   type: "ERC20",
//   abi: erc20ABI, //This will return a ABI in acording with the type
//   address: "0xabc123"
// }

contractDict.setChain(5);

const contract2 = contractDict.getContract("2");
console.log(contract2);
// Expected output:
// {
//   id: "2",
//   name: "NFT Two Bridged",
//   symbol: "NFT",
//   type: "ERC721",
//   abi: erc721ABI,
//   address: "0xdef654"
// }
```

In the above example, we create a `KhizaContractDict` instance with a `config` array containing two contract objects. We then retrieve the first contract using its identifier and print its details. After that, we set the selected chain to 2 and retrieve the second contract, printing its details.

Please note that this is just a documentation example and you may have additional properties or use cases based on your specific implementation.

# ChainDict Documentation

The `ChainDict` type represents a dictionary that combines the properties of the wagmi reference chain with additional token information. It is used to store information about various chains, including official networks and testnets.

## Wagmi Properties

- `Address`: Represents an Ethereum address in the format `0x{string}`.
- `Chain`: Represents a chain configuration.
  - `id: number`: The ID of the chain.
  - `name: string`: The human-readable name of the chain.
  - `network: string`: The internal network name of the chain.
  - `nativeCurrency: NativeCurrency`: The currency used by the chain.
    - `NativeCurrency`: Represents the native currency of a chain.
      - `name: string`: The name of the currency.
      - `symbol: string`: The symbol of the currency (2-6 characters long).
      - `decimals: number`: The number of decimal places used to represent the currency value.
  - `rpcUrls: object`: A collection of RPC endpoints for the chain.
    - `RpcUrls`: Represents a collection of RPC URLs for a chain.
      - `http: string[]`: An array of HTTP RPC URLs.
      - `webSocket?: string[]`: (Optional) An array of WebSocket RPC URLs.
  - `blockExplorers?: object`: (Optional) A collection of block explorers for the chain.
    - `BlockExplorer`: Defines the name and URL of a block explorer.
  - `contracts?: object`: (Optional) A collection of contracts for the chain.
    - `Contract`: Represents a contract configuration.
      - `address: Address`: The address of the contract.
      - `blockCreated?: number`: (Optional) The block number at which the contract was created.
  - `testnet?: boolean`: Flag indicating if the chain is a testnet.

### Token Properties

Each token property within the `tokens` object has the following structure:

- `tokens`: An object containing information about tokens associated with the chain.
  - `name: string`: The readable name of the token, used for display.
  - `address: Address`: The address of the token. Type Address is as `0x${string}`.
  - `symbol: string`: The symbol of the Token.
  - `decimals: number`: The number of decimal places used to represent the token value.
  - `maxSupply?: bigInt`: The max supply quantity available for the token.
  - `isNative?: boolean`: Flag indicating if the token is native of the network.
  - `note?: string`: Usefull information (ex: Bridged)

## Usage Example

```typescript
import { matic, usdc, usdt } from "../../tokens";
import { polygonMumbai as mumbaiWagmiRef } from "@wagmi/chains";
import { ChainDict } from "../types";
import { zeroAddress } from "../../models";

export const polygonMumbai = {
  ...mumbaiWagmiRef, // This is a Chain type
  tokens: {
    matic: {
      ...matic,
      address: zeroAddress,
      isNative: true,
    },
    usdc: {
      ...usdc,
      address: "0xE097d6B3100777DC31B34dC2c58fB524C2e76921",
      decimals: 6,
    },
    usdt: {
      ...usdt,
      address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
      decimals: 6,
    },
  },
} as const satisfies ChainDict;
```

In the above example, `polygonMumbai` is an instance of `ChainDict`. It includes the properties of the wagmi reference chain (`mumbaiWagmiRef`) and additional token information. The `tokens` object contains three tokens: `matic`, `usdc`, and `usdt`. Each token has an `address` and `decimals` property.
