import TokenBase from "../models/TokenBase";
import usdcIcon from "../svgs/tokens/usdc.svg";

export const usdc = new TokenBase({
  decimals: 6,
  symbol: "USDC",
  name: "USD Coin",
  icon: "usdcIcon",
});
