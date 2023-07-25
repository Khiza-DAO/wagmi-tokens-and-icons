import TokenBase from "../models/TokenBase";
import optimismIcon from "../svgs/tokens/optimism.svg";

export const op = new TokenBase({
  decimals: 18,
  symbol: "OP",
  name: "Optimism",
  icon: "optimismIcon",
});
