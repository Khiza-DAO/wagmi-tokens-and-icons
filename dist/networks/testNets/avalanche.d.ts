export declare const avalancheFuji: {
    readonly tokens: {
        readonly avax: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "AVAX";
            readonly name: "Avalanche";
        };
        readonly usdc: {
            readonly address: "0x5425890298aed601595a70AB815c96711a31Bc65";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
    };
    readonly id: 43113;
    readonly name: "Avalanche Fuji";
    readonly network: "avalanche-fuji";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Avalanche Fuji";
        readonly symbol: "AVAX";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.avax-test.network/ext/bc/C/rpc"];
        };
        readonly public: {
            readonly http: readonly ["https://api.avax-test.network/ext/bc/C/rpc"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "SnowTrace";
            readonly url: "https://testnet.snowtrace.io";
        };
        readonly default: {
            readonly name: "SnowTrace";
            readonly url: "https://testnet.snowtrace.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7096959;
        };
    };
    readonly testnet: true;
};
