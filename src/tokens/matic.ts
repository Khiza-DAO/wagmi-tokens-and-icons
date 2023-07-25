import TokenBase from "../models/TokenBase";
import maticIcon from "../svgs/tokens/matic.svg";

export const matic = new TokenBase({
  decimals: 18,
  symbol: "MATIC",
  name: "MATIC",
  icon: "maticIcon",
});
