export declare const bscTestnet: {
    readonly tokens: {
        readonly bnb: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "BNB";
            readonly name: "BNB";
        };
        readonly usdt: {
            readonly address: "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly link: {
            readonly address: "0x84b9b910527ad5c03a9ca831909e21e236ea7b06";
            readonly decimals: 18;
            readonly symbol: "LINK";
            readonly name: "Chainlink";
        };
    };
    readonly id: 97;
    readonly name: "Binance Smart Chain Testnet";
    readonly network: "bsc-testnet";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "tBNB";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://data-seed-prebsc-1-s1.binance.org:8545"];
        };
        readonly public: {
            readonly http: readonly ["https://data-seed-prebsc-1-s1.binance.org:8545"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "BscScan";
            readonly url: "https://testnet.bscscan.com";
        };
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://testnet.bscscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 17422483;
        };
    };
    readonly testnet: true;
};
