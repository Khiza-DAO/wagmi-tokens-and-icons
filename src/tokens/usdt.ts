import TokenBase from "../models/TokenBase";
import usdtIcon from "../svgs/tokens/usdt.svg";

export const usdt = new TokenBase({
  decimals: 18,
  symbol: "USDT",
  name: "Theter",
  icon: "usdtIcon",
});
