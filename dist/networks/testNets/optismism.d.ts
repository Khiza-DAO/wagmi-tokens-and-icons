export declare const optimismGoerli: {
    readonly tokens: {
        readonly eth: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "ETH";
            readonly name: "Ether";
        };
    };
    readonly id: 420;
    readonly name: "Optimism Goerli";
    readonly network: "optimism-goerli";
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://opt-goerli.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://opt-goerli.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://optimism-goerli.infura.io/v3"];
            readonly webSocket: readonly ["wss://optimism-goerli.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://goerli.optimism.io"];
        };
        readonly public: {
            readonly http: readonly ["https://goerli.optimism.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://goerli-optimism.etherscan.io";
        };
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://goerli-optimism.etherscan.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 49461;
        };
    };
    readonly testnet: true;
};
