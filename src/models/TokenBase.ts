import { ITokenBase } from "./interfaces/ITokenBase";

export default class TokenBase implements ITokenBase {
  name: string;
  icon: string;
  decimals: number;
  symbol: string;
  note?: string;

  constructor({ decimals, icon, name, symbol, note }: ITokenBase) {
    this.name = name;
    this.icon = icon;
    this.decimals = decimals;
    this.symbol = symbol;
    this.note = note;
  }
}
