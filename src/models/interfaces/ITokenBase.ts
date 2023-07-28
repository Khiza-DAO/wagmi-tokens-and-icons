export type TokenSymbols =
  | "avax"
  | "bnb"
  | "busd"
  | "dai"
  | "eth"
  | "ftm"
  | "frax"
  | "link"
  | "matic"
  | "op"
  | "steth"
  | "tusd"
  | "uni"
  | "usdc"
  | "usdp"
  | "usdt"
  | "wbtc"
  | "weth"
  | "AVAX"
  | "BNB"
  | "BUSD"
  | "DAI"
  | "ETH"
  | "FTM"
  | "FRAX"
  | "LINK"
  | "MATIC"
  | "OP"
  | "STETH"
  | "TUSD"
  | "UNI"
  | "USDC"
  | "USDP"
  | "USDT"
  | "WBTC"
  | "WETH"
  & string


export interface ITokenBase {
  name: string;
  icon: string;
  decimals: number;
  symbol: TokenSymbols;
  note?: string;
}
