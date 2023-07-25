import TokenBase from "../models/TokenBase";
import busdIcon from "../svgs/tokens/busd.svg";

export const busd = new TokenBase({
  decimals: 18,
  symbol: "BUSD",
  name: "Binance USD",
  icon: "busdIcon",
});
