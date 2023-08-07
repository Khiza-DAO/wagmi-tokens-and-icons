import { ContractDict } from "../src/models/ContractDict";
import { avalanche, mainnet } from "../src/networks";
import {
  tokenCustom,
  tokenCustomAsConst,
  tokenERC20,
  tokenERC20asConst,
  tokenERC721,
  tokenERC721asConst,
} from "./mockData";

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

      test(`-> .chainsAddress[1] contains obj's address       => ${expected}`, () => {
        expect(dict.chainsAddress[1]).toContain({
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        });
      });

      test(`-> .chainsAddress[1] contains obj's address       => ${expected}`, () => {
        expect(dict.chainsAddress[mainnet.id]).toContain({
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        });
      });

      test(`-> .chainsAddress[mainnet.id = 1]                 => ${expected}`, () => {
        expect(dict.chainsAddress[mainnet.id]).toContain({
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        });
      });

      test(`-> .chainsAddress[avalanche.id = ?]               => undefined`, () => {
        expect(tokenERC20asConst.chainsAddress[avalanche.id]).toBeUndefined();
      });
    }
  );
});
