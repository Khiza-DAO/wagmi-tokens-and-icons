export declare const avalanche: {
    readonly tokens: {
        readonly avax: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "AVAX";
            readonly name: "Avalanche";
        };
        readonly usdt: {
            readonly address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly usdc: {
            readonly address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly busd: {
            readonly address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39";
            readonly decimals: 18;
            readonly symbol: "BUSD";
            readonly name: "Binance USD";
        };
        readonly weth: {
            readonly address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB";
            readonly note: "bridged through avalanche bridge";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
        readonly frax: {
            readonly address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
        readonly wbtc: {
            readonly address: "0x50b7545627a5162F82A992c33b87aDc75187B218";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
        readonly dai: {
            readonly address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
        readonly tusd: {
            readonly address: "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB";
            readonly decimals: 18;
            readonly symbol: "TUSD";
            readonly name: "True USD";
        };
    };
    readonly id: 43114;
    readonly name: "Avalanche";
    readonly network: "avalanche";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
        };
        readonly public: {
            readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "SnowTrace";
            readonly url: "https://snowtrace.io";
        };
        readonly default: {
            readonly name: "SnowTrace";
            readonly url: "https://snowtrace.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 11907934;
        };
    };
};
