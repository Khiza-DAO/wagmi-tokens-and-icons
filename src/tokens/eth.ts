import TokenBase from "../models/TokenBase";
import ethIcon from "../svgs/tokens/eth.svg";

export const eth = new TokenBase({
  decimals: 18,
  symbol: "ETH",
  name: "Ether",
  icon: "ethIcon",
});
