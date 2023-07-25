import TokenBase from "../models/TokenBase";
import daiIcon from "../svgs/tokens/dai.svg";

export const dai = new TokenBase({
  decimals: 18,
  symbol: "DAI",
  name: "DAI",
  icon: "daiIcon",
});
