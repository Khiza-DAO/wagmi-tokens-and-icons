import {
  mainnet as mainnetWagmi,
  polygon as polygonWagmi,
  arbitrum as arbitrumWagmi,
  avalanche as avalancheWagmi,
  bsc as bscWagmi,
  fantom as fantomWagmi,
  gnosis as gnosisWagmi,
} from "@wagmi/chains";
import {
  mainnet,
  polygon,
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
} from "../src/networks";
import Token from "../src/models/Token";
import { TokensAddition } from "../src/networks/types";
import { Chain } from "@wagmi/chains";
import _ from "lodash";

type testSample = {
  dict: Chain & TokensAddition;
  wagmi: Chain;
  expected: boolean | string;
};

type tokensSample = {
  token: Token;
};

const testCases = [
  { dict: mainnet, wagmi: mainnetWagmi, expected: true },
  { dict: polygon, wagmi: polygonWagmi, expected: true },
  { dict: arbitrum, wagmi: arbitrumWagmi, expected: true },
  { dict: avalanche, wagmi: avalancheWagmi, expected: true },
  { dict: bsc, wagmi: bscWagmi, expected: true },
  { dict: fantom, wagmi: fantomWagmi, expected: true },
  { dict: gnosis, wagmi: gnosisWagmi, expected: true },
] satisfies testSample[];

describe("Networks automated tests", () => {
  describe.each(testCases)(
    `$dict.name`,
    ({ dict, wagmi, expected }: testSample) => {
      test(`-> contains wagmi's ${wagmi.name}             => ${expected}`, () => {
        expect(dict).toContain(wagmi);
      });

      test(`-> wagmi's ${dict.name} NOT contain package  => ${expected}`, () => {
        expect(wagmi).not.toContain(dict);
      });

      test(`-> tokens in ${dict.name}.tokens are instanceof Token  => ${expected}`, () => {
        _.values(dict.tokens).forEach((token) => {
          expect(token).toBeInstanceOf(Token);
        });
      });
    }
  );
});
