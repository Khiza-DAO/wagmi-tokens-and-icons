import { mainnet, polygon } from "@wagmi/chains";
import { ContractDict } from "../src/models/ContractDict";
import { KhizaContractDict } from "../src/models/Dict";
import { erc20ABI, erc721ABI } from "../src/assets/ERCabi";

describe("Dict class", () => {
  let dict: KhizaContractDict;

  const token = {
    decimals: 18,
    icon: "icon",
    name: "Khiza Token",
    symbol: "KZT",
  } as const;

  const kzt = {
    decimals: 18,
    icon: "",
    name: "Khiza Token",
    symbol: "KZT",
  } as const;

  const tokenERC20asConst = {
    id: "KZT",
    name: token.name,
    symbol: token.symbol,
    type: "ERC20",
    chains: {
      [mainnet.id]: {
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      [polygon.id]: {
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc",
      },
    },
  } as const satisfies ContractDict;

  beforeEach(() => {
    dict = new KhizaContractDict([tokenERC20asConst]);
  });

  test("should return an empty list when no items have been added", () => {
    const anotherDict = new KhizaContractDict([]);

    expect(() => anotherDict.getContract("")).toThrow(Error);
  });

  test("should add tokenERC20asConst to dict", () => {
    dict.addContract("KZT2", tokenERC20asConst);

    expect(dict.getContract("KZT2")).toBeDefined();
    expect(dict.getContract("KZT2")).toContain(tokenERC20asConst);
  });

  test('should find the item with id "KZT"', () => {
    dict.addContract("KZT", tokenERC20asConst);

    const item = dict.getContract("KZT");

    expect(item).toBeDefined();
    expect(item?.id).toBe("KZT");
  });

  test("should return undefined when trying to find an item that does not exist", () => {
    const item = dict.getContract("nonexistent");

    expect(item).toBeUndefined();
  });

  test("should return defined when trying to find an item that does exist", () => {
    dict.addContract("KZT", tokenERC20asConst);

    const item = dict.getContract("KZT");

    expect(item).toBeDefined();
    expect(item).toContain(tokenERC20asConst);
  });

  describe('Functions test',() => {
    
    test("addContract", () => {
      const contract1 = {
        id: "contract1",
        name: "Contract One",
        symbol: "C1",
        type: "ERC20",
        chains: { [mainnet.id]: { address: "0x123", name: "Chain 1" } },
      } as const satisfies ContractDict;
      
      const dict = new KhizaContractDict([]);
      
      dict.addContract("contract1", contract1);
      
      expect(dict.getContract("contract1")).toEqual({
        ...contract1,
        id: "contract1",
        name: "Chain 1",
        address: "0x123",
        symbol: "C1",
        type: "ERC20",
        chains: { [mainnet.id]: { address: "0x123", name: "Chain 1" } },
        abi: erc20ABI,
      } satisfies ContractDict);
    });
    
    // Test case for setting the chain
    test("setChain", () => {
      const dict = new KhizaContractDict([]);
      dict.setChain(2);
      
      expect(dict["selectedChain"]).toBe(2);
    });
    
    // Test case for getting a contract
    test("getContract", () => {
      const dict = new KhizaContractDict([
        {
          id: "contract1",
          name: "Contract One",
          symbol: "C1",
          type: "ERC20",
          chains: { [mainnet.id]: { address: "0x123", name: "Contract 1" } },
        },
        {
          id: "contract2",
          name: "Contract Two",
          symbol: "C2",
          type: "ERC721",
          chains: { [mainnet.id]: { address: "0x456", name: "Contract 2" } },
        },
      ]);
      
      dict.setChain(1);
      
      expect(dict.getContract("contract1")).toEqual({
        id: "contract1",
        type: "ERC20",
        symbol: "C1",
        address: "0x123",
        name: "Contract 1",
        abi: erc20ABI,
        chains: { [mainnet.id]: { address: "0x123", name: "Contract 1" } },
      });
      
      expect(dict.getContract("contract2")).toEqual({
        id: "contract2",
        type: "ERC721",
        symbol: "C2",
        address: "0x456",
        name: "Contract 2",
        abi: erc721ABI,
        chains: { [mainnet.id]: { address: "0x456", name: "Contract 2" } },
      });
    });
  })
    
    // test("should update an existing item in the list", () => {
      //   const updatedItem = {
        //     ...tokenERC20asConst,
        //     name: "updated",
        //   };
        
        //   dict.update(updatedItem);
        
  //   const item = dict.list.find((ContractDict) => {
  //     return ContractDict.id === "abc";
  //   });
  
  //   expect(item).toEqual(updatedItem);
  // });

  // test("should remove an item from the list", () => {
  //   dict.add(tokenERC20asConst);
  //   dict.remove("abc");

  //   const item = dict.list.find((ContractDict) => {
  //     return ContractDict.id === "abc";
  //   });

  //   expect(item).toBeUndefined();
  // });
});
