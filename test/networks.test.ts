import { mainnet as mainnetWagmi } from "@wagmi/chains";
import { mainnet as mainnetPackage } from "../src/networks";
import Token from "../src/models/Token";

describe("Mainnet", () => {
  test("-> constains mainnet from wagmi     => true", () => {
    expect(mainnetPackage).toContain(mainnetWagmi);
  });

  test("-> tokens contains eth propery      => true", () => {
    expect(mainnetPackage.tokens).toHaveProperty("eth");
  });

  test("-> tokens contains eth token      => true", () => {
    expect(mainnetPackage.tokens.eth).toBeInstanceOf(Token);
  });
});
