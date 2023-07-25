import TokenBase from "../models/TokenBase";
import bnbIcon from "../svgs/tokens/bnb.svg";

export const bnb = new TokenBase({
  decimals: 18,
  symbol: "BNB",
  name: "BNB",
  icon: "bnbIcon",
});
