import TokenBase from "../models/TokenBase";
import ethIcon from "../svgs/tokens/eth.svg";

export const weth = new TokenBase({
  decimals: 18,
  symbol: "WETH",
  name: "Wrapped Ether",
  icon: "ethIcon",
});
