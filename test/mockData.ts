import { ContractDict } from "../src/models/ContractDict";
import mainnet from "../src/networks/mainnet";
import polygon from '../src/networks/polygon';

export const tokenERC20 = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

export const tokenERC721 = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC721",
  png: "",
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

export const tokenCustom = {
  id: "abc",
  name: "abc",
  type: "custom",
  abi: [],
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

export const tokenERC20asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;

export const tokenERC721asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC721",
  png: "",
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;

export const tokenCustomAsConst = {
  id: "abc",
  name: "abc",
  type: "custom",
  abi: [],
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;

export const wrongTokenERC20 = {
  id: "abc",
  name: "abc",
  type: "ERC20",
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

export const wrongTokenERC721 = {
  id: "abc",
  name: "abc",
  type: "ERC721",
  abi: [],
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

export const wrongTokenCustom = {
  id: "abc",
  name: "abc",
  type: "custom",
  symbol: "ABC",
  chains: {
    [mainnet.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    [polygon.id]: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};
