// import { mainnet, polygon } from "@wagmi/chains";
// import { ContractDict } from "../src/models/ContractDict";
// import { Dict } from "../src/models/Dict";
// import _ from "lodash";
// import Token from "../src/models/Token";

// describe("Dict class", () => {
//   let dict: Dict;

//   const token = new Token({
//     decimals: 18,
//     icon: "icon",
//     name: "Khiza Token",
//     symbol: "KZT",
//   });

//   const kzt = {
//     decimals: 18,
//     icon: '',
//     name: 'Khiza Token',
//     symbol: 'KZT'
//   }

//   const tokenERC20asConst = {
//     id: "KZT",
//     name: token.name,
//     symbol: token.symbol,
//     type: "ERC20",
//     icon: token.icon,
//     chainsAddress: {
//       [mainnet.id]:
//         token.setNewAddress(
//         "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
//       )
//       // {
//       //   ...kzt,
//       //   address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
//       // }
//       ,
//       [polygon.id]: token.setNewAddress(
//         "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756abc"
//       ),
//     },
//   } as const satisfies ContractDict;

//   beforeEach(() => {
//     dict = new Dict();
//   });

//   test("should add tokenERC20asConst to dict", () => {
//     dict.add(tokenERC20asConst);

//     expect(dict.list.length).toBe(1);
//     expect(dict.list[0]).toEqual(tokenERC20asConst);
//   });

//   test('should find the item with id "KZT"', () => {
//     dict.add(tokenERC20asConst);

//     const item = dict.list.find((ContractDict) => {
//       return ContractDict.id === "KZT";
//     });

//     expect(item).toBeDefined();
//     expect(item?.id).toBe("KZT");
//   });

//   test("should return an empty list when no items have been added", () => {
//     expect(dict.list.length).toBe(0);
//   });

//   test("should return undefined when trying to find an item that does not exist", () => {
//     const item = dict.list.find((ContractDict) => {
//       return ContractDict.id === "nonexistent";
//     });

//     expect(item).toBeUndefined();
//   });

//   test("should return defined when trying to find an item that does exist", () => {
//     dict.add(tokenERC20asConst);

//     const item = dict.filterById("KZT");

//     expect(item).toBeDefined();
//     expect(item).toEqual(tokenERC20asConst);
//   });

  // test('should update an existing item in the list', () => {

  //   const updatedItem = {
  //     ...tokenERC20asConst,
  //     name: 'updated',
  //   };

  //   dict.update(updatedItem);

  //   const item = dict.list.find((ContractDict) => {
  //     return ContractDict.id === 'abc';
  //   });

  //   expect(item).toEqual(updatedItem);
  // });

  // test('should remove an item from the list', () => {

  //   dict.add(tokenERC20asConst);
  //   dict.remove('abc');

  //   const item = dict.list.find((ContractDict) => {
  //     return ContractDict.id === 'abc';
  //   });

  //   expect(item).toBeUndefined();
  // });
// });
