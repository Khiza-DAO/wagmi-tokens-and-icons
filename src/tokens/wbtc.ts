import TokenBase from "../models/TokenBase";
import wbtcIcon from "../svgs/tokens/wbtc.svg";

export const wbtc = new TokenBase({
  decimals: 18,
  symbol: "WBTC",
  name: "Wrapped Bitcoin",
  icon: "wbtcIcon",
});
