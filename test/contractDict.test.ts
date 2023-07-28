import _ from "lodash";
import { ContractDict } from "../src/models/ContractDict";

const tokenERC20 = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

const tokenERC721 = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC721",
  png: "",
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

const tokenCustom = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "custom",
  abi: [],
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
};

const tokenERC20asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC20",
  icon: "",
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;

const tokenERC721asConst = {
  id: "abc",
  name: "abc",
  symbol: "abc",
  type: "ERC721",
  png: "",
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict;

const tokenCustomAsConst ={
  id: "abc",
  name: "abc",
  type: "custom",
  abi: [],
  chains: {
    1: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    137: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  },
} as const satisfies ContractDict

describe("contractDict", () => {
  test("Has chains", () => {
    expect(tokenERC20asConst.chains).toEqual(tokenERC20.chains);
  });

  test("", () => {});
});
