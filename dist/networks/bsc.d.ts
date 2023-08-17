export declare const bsc: {
    readonly tokens: {
        readonly bnb: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "BNB";
            readonly name: "BNB";
        };
        readonly usdc: {
            readonly address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";
            readonly decimals: 18;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly dai: {
            readonly address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
        readonly eth: {
            readonly address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
            readonly note: "Binance-Peg Ethereum Token";
            readonly decimals: 18;
            readonly symbol: "ETH";
            readonly name: "Ether";
        };
        readonly weth: {
            readonly address: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA";
            readonly name: "Wrapped Ether";
            readonly note: "Bridged through Wormhole";
            readonly decimals: 18;
            readonly symbol: "WETH";
        };
        readonly matic: {
            readonly address: "0xcc42724c6683b7e57334c4e856f4c9965ed682bd";
            readonly decimals: 18;
            readonly symbol: "MATIC";
            readonly name: "MATIC";
        };
        readonly usdp: {
            readonly address: "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094";
            readonly decimals: 18;
            readonly symbol: "USDP";
            readonly name: "PAX Dollar";
        };
        readonly busd: {
            readonly address: "0xe9e7cea3dedca5984780bafc599bd69add087d56";
            readonly decimals: 18;
            readonly symbol: "BUSD";
            readonly name: "Binance USD";
        };
        readonly frax: {
            readonly address: "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
        readonly tusd: {
            readonly address: "0x14016e85a25aeb13065688cafb43044c2ef86784";
            readonly decimals: 18;
            readonly symbol: "TUSD";
            readonly name: "True USD";
        };
        readonly avax: {
            readonly address: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041";
            readonly decimals: 18;
            readonly symbol: "AVAX";
            readonly name: "Avalanche";
        };
    };
    readonly id: 56;
    readonly name: "BNB Smart Chain";
    readonly network: "bsc";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/bsc"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/bsc"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15921452;
        };
    };
};
