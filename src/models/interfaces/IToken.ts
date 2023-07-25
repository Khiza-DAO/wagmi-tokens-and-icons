import Address from "../types/Address";
import { ITokenBase } from "./ITokenBase";

export default interface IToken extends ITokenBase {
  address: Address;
  maxSupply?: BigInt;
}
