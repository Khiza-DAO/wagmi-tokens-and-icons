export declare const optimism: {
    readonly tokens: {
        readonly op: {
            readonly address: "0x4200000000000000000000000000000000000042";
            readonly decimals: 18;
            readonly symbol: "OP";
            readonly name: "Optimism";
        };
        readonly usdt: {
            readonly address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly usdc: {
            readonly address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly matic: {
            readonly address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58";
            readonly decimals: 18;
            readonly symbol: "MATIC";
            readonly name: "MATIC";
        };
        readonly frax: {
            readonly address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
        readonly busd: {
            readonly address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39";
            readonly decimals: 18;
            readonly symbol: "BUSD";
            readonly name: "Binance USD";
        };
        readonly wbtc: {
            readonly address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
        readonly dai: {
            readonly address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
    };
    readonly id: 10;
    readonly name: "OP Mainnet";
    readonly network: "optimism";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://opt-mainnet.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://opt-mainnet.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://optimism-mainnet.infura.io/v3"];
            readonly webSocket: readonly ["wss://optimism-mainnet.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://mainnet.optimism.io"];
        };
        readonly public: {
            readonly http: readonly ["https://mainnet.optimism.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://optimistic.etherscan.io";
        };
        readonly default: {
            readonly name: "Optimism Explorer";
            readonly url: "https://explorer.optimism.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 4286263;
        };
    };
};
