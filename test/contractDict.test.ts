import { Address } from "viem";
import { mainnet, avalanche, polygon } from "../src/networks";
import {
  KnownContract,
  TokenContract,
  CustomContract,
  ContractDict,
  KnownContracts,
} from "../src/models/ContractDict"; // Replace with the correct path to your module
import {
  tokenCustom,
  tokenCustomAsConst,
  tokenERC20,
  tokenERC20asConst,
  tokenERC721,
  tokenERC721asConst,
} from "./mockData";

describe("Known Contracts", () => {
  const tokenContract: TokenContract = {
    id: "123",
    address: "0xabc123",
    name: "Token",
    symbol: "TKN",
    type: "ERC20",
    abi: [],
  };

  const customContract: CustomContract = {
    id: "456",
    address: "0xdef456",
    name: "Custom",
    symbol: "CST",
    type: "custom",
    abi: [],
  };

  const contractDict: ContractDict = {
    chains: {
      [mainnet.id]: {
        address: "0xaaa111",
        name: "Chain 1",
        symbol: "CHN1",
      },
      [polygon.id]: {
        address: "0xbbb222",
        name: "Chain 2",
        symbol: "CHN2",
        abi: [],
      },
    },
    ...tokenContract,
  };

  const knownContracts: KnownContracts = {
    "contract-1": contractDict,
  };

  test("Token contract should have required properties", () => {
    expect(tokenContract.id).toBeDefined();
    expect(tokenContract.name).toBeDefined();
    expect(tokenContract.symbol).toBeDefined();
    expect(tokenContract.type).toBeDefined();
    expect(tokenContract.abi).toBeDefined();
  });

  test("Custom contract should have required properties", () => {
    expect(customContract.id).toBeDefined();
    expect(customContract.type).toBeDefined();
    expect(customContract.abi).toBeDefined();
  });

  test("Contract dictionary should have chains and contract properties", () => {
    expect(contractDict.chains).toBeDefined();
    expect(contractDict.id).toBeDefined();
    // Add more assertions for other properties as needed
  });

  test("Known contracts should be defined", () => {
    expect(knownContracts["contract-1"]).toBeDefined();
    // Add more assertions for other known contracts as needed
  });
});

type testSample = {
  dict: ContractDict;
  obj: any;
  expected: boolean | string;
};

const testCases = [
  { dict: tokenCustomAsConst, obj: tokenCustom, expected: true },
  { dict: tokenERC20asConst, obj: tokenERC20, expected: true },
  { dict: tokenERC721asConst, obj: tokenERC721, expected: true },
] satisfies testSample[];

describe("contractDict automated tests", () => {
  describe.each(testCases)(
    `$dict.type`,
    ({ dict, obj, expected }: testSample) => {
      test(`-> ${dict.type} asConst equal to ${obj.type}                    => ${expected}`, () => {
        expect(dict).toEqual(obj);
      });

      test(`-> .chains[1] contains obj's address       => ${expected}`, () => {
        expect(dict.chains[1]).toContain({
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        });
      });

      test(`-> .chains[1] contains obj's address       => ${expected}`, () => {
        expect(dict.chains[mainnet.id]).toContain({
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        });
      });

      test(`-> .chains[mainnet.id = 1]                 => ${expected}`, () => {
        expect(dict.chains[mainnet.id]).toContain({
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        });
      });

      test(`-> .chains[avalanche.id = ?]               => undefined`, () => {
        expect(dict.chains[avalanche.id]).toBeUndefined();
      });

      test(`-> Type property working properly`, () => {
        if (dict.type === "ERC20")
          expect(/*dict.icon && */ dict.symbol).toBeDefined();
        else if (dict.type === "ERC721")
          expect(/*dict.png && */ dict.symbol).toBeDefined();
        else if (dict.type === "custom") expect(dict.abi).toBeDefined();
      });
    }
  );
});
