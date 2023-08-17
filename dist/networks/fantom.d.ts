export declare const fantom: {
    readonly tokens: {
        readonly ftm: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "FTM";
            readonly name: "Fantom";
        };
        readonly usdt: {
            readonly address: "0x049d68029688eabf473097a2fc38ef61633a3c7a";
            readonly name: "Frapped USDT";
            readonly symbol: "fUSDT";
            readonly decimals: 6;
        };
        readonly usdc: {
            readonly address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly wbtc: {
            readonly address: "0x321162Cd933E2Be498Cd2267a90534A804051b11";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
        readonly weth: {
            readonly address: "0x74b23882a30290451A17c44f4F05243b6b58C76d";
            readonly note: "bridged through multichain";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
        readonly frax: {
            readonly address: "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
    };
    readonly id: 250;
    readonly name: "Fantom";
    readonly network: "fantom";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Fantom";
        readonly symbol: "FTM";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/fantom"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/fantom"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "FTMScan";
            readonly url: "https://ftmscan.com";
        };
        readonly default: {
            readonly name: "FTMScan";
            readonly url: "https://ftmscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 33001987;
        };
    };
};
