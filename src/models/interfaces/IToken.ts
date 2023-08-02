import { Address } from "viem";
import { ITokenBase } from "./ITokenBase";

export default interface IToken extends ITokenBase {
  address?: Address;
  isNative?: boolean;
  maxSupply?: BigInt;
}
