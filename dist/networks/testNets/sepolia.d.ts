export declare const sepolia: {
    readonly tokens: {
        readonly eth: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "ETH";
            readonly name: "Ether";
        };
    };
    readonly id: 11155111;
    readonly network: "sepolia";
    readonly name: "Sepolia";
    readonly nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "SEP";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://eth-sepolia.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://eth-sepolia.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://sepolia.infura.io/v3"];
            readonly webSocket: readonly ["wss://sepolia.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://rpc.sepolia.org"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.sepolia.org"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://sepolia.etherscan.io";
        };
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://sepolia.etherscan.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 6507670;
        };
    };
    readonly testnet: true;
};
