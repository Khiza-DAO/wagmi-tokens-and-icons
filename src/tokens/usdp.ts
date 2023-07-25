import TokenBase from "../models/TokenBase";
import usdpIcon from "../svgs/tokens/usdp.svg";

export const usdp = new TokenBase({
  decimals: 18,
  symbol: "USDP",
  name: "PAX Dollar",
  icon: "usdpIcon",
});
