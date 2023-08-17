export declare const gnosis: {
    readonly tokens: {
        readonly xdai: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "XDAI";
            readonly name: "xDAI";
        };
        readonly dai: {
            readonly address: "0x44fA8E6f47987339850636F88629646662444217";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
        readonly usdt: {
            readonly address: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly usdc: {
            readonly address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly weth: {
            readonly address: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
        readonly busd: {
            readonly address: "0xdd96b45877d0e8361a4ddb732da741e97f3191ff";
            readonly decimals: 18;
            readonly symbol: "BUSD";
            readonly name: "Binance USD";
        };
        readonly wbtc: {
            readonly address: "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
    };
    readonly id: 100;
    readonly name: "Gnosis";
    readonly network: "gnosis";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Gnosis";
        readonly symbol: "xDAI";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.gnosischain.com"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.gnosischain.com"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Gnosisscan";
            readonly url: "https://gnosisscan.io";
        };
        readonly default: {
            readonly name: "Gnosis Chain Explorer";
            readonly url: "https://blockscout.com/xdai/mainnet";
        };
    };
};
