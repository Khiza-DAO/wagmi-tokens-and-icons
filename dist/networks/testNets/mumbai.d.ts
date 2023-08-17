export declare const polygonMumbai: {
    readonly tokens: {
        readonly matic: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "MATIC";
            readonly name: "MATIC";
        };
        readonly usdc: {
            readonly address: "0xE097d6B3100777DC31B34dC2c58fB524C2e76921";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly usdt: {
            readonly address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
    };
    readonly id: 80001;
    readonly name: "Polygon Mumbai";
    readonly network: "maticmum";
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://polygon-mumbai.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://polygon-mumbai.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://polygon-mumbai.infura.io/v3"];
            readonly webSocket: readonly ["wss://polygon-mumbai.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://matic-mumbai.chainstacklabs.com"];
        };
        readonly public: {
            readonly http: readonly ["https://matic-mumbai.chainstacklabs.com"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "PolygonScan";
            readonly url: "https://mumbai.polygonscan.com";
        };
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://mumbai.polygonscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 25770160;
        };
    };
    readonly testnet: true;
};
