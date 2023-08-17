export declare const polygon: {
    readonly tokens: {
        readonly matic: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "MATIC";
            readonly name: "MATIC";
        };
        readonly sdt: {
            readonly address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly usdc: {
            readonly address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly busd: {
            readonly address: "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39";
            readonly decimals: 18;
            readonly symbol: "BUSD";
            readonly name: "Binance USD";
        };
        readonly frax: {
            readonly address: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
        readonly wbtc: {
            readonly address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
        readonly weth: {
            readonly address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
        readonly dai: {
            readonly address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
    };
    readonly id: 137;
    readonly name: "Polygon";
    readonly network: "matic";
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://polygon-mainnet.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://polygon-mainnet.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://polygon-mainnet.infura.io/v3"];
            readonly webSocket: readonly ["wss://polygon-mainnet.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://polygon-rpc.com"];
        };
        readonly public: {
            readonly http: readonly ["https://polygon-rpc.com"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "PolygonScan";
            readonly url: "https://polygonscan.com";
        };
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://polygonscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 25770160;
        };
    };
};
