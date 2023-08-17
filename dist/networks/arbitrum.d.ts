export declare const arbitrum: {
    readonly tokens: {
        readonly eth: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "ETH";
            readonly name: "Ether";
        };
        readonly usdt: {
            readonly address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly usdc: {
            readonly address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly wbtc: {
            readonly address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
        readonly weth: {
            readonly address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
        readonly frax: {
            readonly address: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
        readonly dai: {
            readonly address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
        readonly tusd: {
            readonly address: "0x4D15a3A2286D883AF0AA1B3f21367843FAc63E07";
            readonly decimals: 18;
            readonly symbol: "TUSD";
            readonly name: "True USD";
        };
    };
    readonly id: 42161;
    readonly name: "Arbitrum One";
    readonly network: "arbitrum";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://arb-mainnet.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://arb-mainnet.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://arbitrum-mainnet.infura.io/v3"];
            readonly webSocket: readonly ["wss://arbitrum-mainnet.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
        };
        readonly public: {
            readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
        };
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7654707;
        };
    };
};
