import TokenBase from "../models/TokenBase";
import avaxIcon from "../svgs/tokens/avax.svg";

export const avax = new TokenBase({
  decimals: 18,
  symbol: "AVAX",
  name: "Avalanche",
  // precisa ser adicionada a icon lib
  icon: "avaxIcon",
});
