import TokenBase from "../models/TokenBase";

export const xdai = new TokenBase({
  decimals: 18,
  symbol: "XDAI",
  name: "xDAI",
  // este ícone não funciona
  icon: "gnosisIcon",
});
