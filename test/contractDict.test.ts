import { expectTypeOf } from "vitest";
import { avalanche, mainnet } from "../src/networks";
import {
  tokenCustom,
  tokenCustomAsConst,
  tokenERC20,
  tokenERC20asConst,
  tokenERC721,
  tokenERC721asConst,
} from "./mockData";

describe("tokenERC20:", () => {
  test("-> tokenERC20asConst equal to tokenERC20          => true", () => {
    expect(tokenERC20asConst).toEqual(tokenERC20);
  });

  test("-> tokenERC20asConst.chains[1].address            => '0xC02a...56Cc2'", () => {
    expect(tokenERC20asConst.chains[1].address).toContain(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

  test("-> tokenERC20asConst.chains[mainnet.id = 1]       => {address:'0xC02a...56Cc2'}", () => {
    expect(tokenERC20asConst.chains[mainnet.id]).toContain({
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    });
  });

  test("-> tokenERC20asConst.chains[mainnet.id = 1].address => '0xC02a...56Cc2'", () => {
    expect(tokenERC20asConst.chains[mainnet.id].address).toContain(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

  test("-> tokenERC20asConst.chains[avalanche.id = ?]     => undefined", () => {
    expect(tokenERC20asConst.chains[avalanche.id]).toBeUndefined();
  });
});

describe("tokenERC721:", () => {
  test("-> tokenERC721asConst equal to tokenERC721         => true", () => {
    expect(tokenERC721asConst).toEqual(tokenERC721);
  });

  test("-> tokenERC721asConst.chains[1].address            => '0xC02a...56Cc2'", () => {
    expect(tokenERC721asConst.chains[1].address).toContain(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

  test("-> tokenERC721asConst.chains[mainnet.id = 1]       => {address:'0xC02a...56Cc2'}", () => {
    expect(tokenERC721asConst.chains[mainnet.id]).toContain({
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    });
  });

  test("-> tokenERC721asConst.chains[mainnet.id = 1].address => '0xC02a...56Cc2'", () => {
    expect(tokenERC721asConst.chains[mainnet.id].address).toContain(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

  test("-> tokenERC721asConst.chains[avalanche.id = ?]     => undefined", () => {
    expect(tokenERC721asConst.chains[avalanche.id]).toBeUndefined();
  });
});

describe("tokenCustom", () => {
  test("-> equal to tokenCustom         => true", () => {
    expect(tokenCustomAsConst).toEqual(tokenCustom);
  });

  test("->.chains[1].address            => '0xC02a...56Cc2'", () => {
    expect(tokenCustomAsConst.chains[1].address).toContain(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

  test("->.chains[mainnet.id = 1]       => {address:'0xC02a...56Cc2'}", () => {
    expect(tokenCustomAsConst.chains[mainnet.id]).toContain({
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    });
  });

  test("->.chains[mainnet.id = 1].address => '0xC02a...56Cc2'", () => {
    expect(tokenCustomAsConst.chains[mainnet.id].address).toContain(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });

  test("->.chains[avalanche.id = ?]     => undefined", () => {
    expect(tokenCustomAsConst.chains[avalanche.id]).toBeUndefined();
  });
});
