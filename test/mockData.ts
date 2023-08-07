import { ContractDict } from "../src/models/ContractDict";
import Token from "../src/models/Token";
import mainnet from "../src/networks/mainnet";
import polygon from "../src/networks/polygon"

const token = new Token({
  decimals: 18,
  icon: "icon",
  name: "Khiza Token",
  symbol: "KZT",
});

export const tokenERC20 = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
};

export const tokenERC721 = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC721",
  png: "",
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
};

export const tokenCustom = {
  id: "abc",
  name: "abc",
  type: "custom",
  abi: [],
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
};

export const tokenERC20asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
} as const satisfies ContractDict;

export const tokenERC721asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC721",
  png: "",
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
} as const satisfies ContractDict;

export const tokenCustomAsConst = {
  id: "abc",
  name: "abc",
  type: "custom",
  abi: [],
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
} as const satisfies ContractDict;

export const wrongTokenERC20 = {
  id: "abc",
  name: "abc",
  type: "ERC20",
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
};

export const wrongTokenERC721 = {
  id: "abc",
  name: "abc",
  type: "ERC721",
  abi: [],
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
};

export const wrongTokenCustom = {
  id: "abc",
  name: "abc",
  type: "custom",
  symbol: "ABC",
  chainsAddress: {
    [mainnet.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
    [polygon.id]: token.setNewAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"),
    '20': token.setNewAddress('0xa')
  },
};
