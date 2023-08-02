import { Address } from "viem";
import TokenBase from "./TokenBase";
import IToken from "./interfaces/IToken";
import { zeroAddress } from "viem";

export default class Token extends TokenBase implements IToken {
  _address?: Address;
  isNative?: boolean;
  maxSupply?: BigInt;

  constructor({
    decimals,
    icon,
    name,
    symbol,
    address,
    isNative,
    maxSupply,
    note,
  }: IToken) {
    super({
      name,
      icon,
      decimals,
      symbol,
      note,
    });
    this.address = address;
    this.maxSupply = maxSupply;
    this.isNative = isNative || false;
  }

  get address() {
    return this.isNative ? zeroAddress : this._address;
  }

  set address(v: Address | undefined) {
    if (this.isNative && v !== zeroAddress) {
      throw new Error("Native token address must be zero");
    }

    this._address = v;
  }
}
