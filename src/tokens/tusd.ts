import TokenBase from "../models/TokenBase";
import tusdIcon from "../svgs/tokens/tusd.svg";

export const tusd = new TokenBase({
  decimals: 18,
  symbol: "TUSD",
  name: "True USD",
  icon: "tusdIcon",
});
