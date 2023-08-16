import {
  mainnet as mainnetWagmi,
  polygon as polygonWagmi,
  arbitrum as arbitrumWagmi,
  avalanche as avalancheWagmi,
  bsc as bscWagmi,
  fantom as fantomWagmi,
  gnosis as gnosisWagmi,
  avalancheFuji as avalancheFujiWagmi,
  bscTestnet as bscTestnetWagmi,
  goerli as goerliWagmi,
  sepolia as sepoliaWagmi,
  optimismGoerli as optimismGoerliWagmi,
  polygonMumbai as polygonMumbaiWagmi,
} from "@wagmi/chains";
import {
  mainnet,
  polygon,
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  ChainDict,
  avalancheFuji,
  bscTestnet,
  goerli,
  sepolia,
  optimismGoerli,
  polygonMumbai,
} from "../src/networks";
import { Chain } from "@wagmi/chains";

type testSample = {
  dict: ChainDict;
  wagmi: Chain;
  expected: boolean | string;
};

const testCases = [
  { dict: mainnet, wagmi: mainnetWagmi, expected: true },
  { dict: polygon, wagmi: polygonWagmi, expected: true },
  { dict: arbitrum, wagmi: arbitrumWagmi, expected: true },
  { dict: avalanche, wagmi: avalancheWagmi, expected: true },
  { dict: bsc, wagmi: bscWagmi, expected: true },
  { dict: fantom, wagmi: fantomWagmi, expected: true },
  { dict: gnosis, wagmi: gnosisWagmi, expected: true },
  { dict: avalancheFuji, wagmi: avalancheFujiWagmi, expected: true },
  { dict: bscTestnet, wagmi: bscTestnetWagmi, expected: true },
  { dict: goerli, wagmi: goerliWagmi, expected: true },
  { dict: sepolia, wagmi: sepoliaWagmi, expected: true },
  { dict: optimismGoerli, wagmi: optimismGoerliWagmi, expected: true },
  { dict: polygonMumbai, wagmi: polygonMumbaiWagmi, expected: true },
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
    }
  );
});
