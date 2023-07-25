import TokenBase from "../models/TokenBase";
import stethIcon from "../svgs/tokens/steth.svg";

export const steth = new TokenBase({
  decimals: 18,
  symbol: "STETH",
  name: "Lido Stalked Ether",
  icon: "stethIcon",
});
