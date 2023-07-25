import Address from "./types/Address";
import TokenBase from "./TokenBase";
import IToken from "./interfaces/IToken";

export default class Token extends TokenBase implements IToken {
  address: Address;
  maxSupply?: BigInt;

  constructor({
    decimals,
    icon,
    name,
    symbol,
    address,
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
  }
}
