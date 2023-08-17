export declare const mainnet: {
    readonly tokens: {
        readonly eth: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "ETH";
            readonly name: "Ether";
        };
        readonly weth: {
            readonly address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
        readonly usdt: {
            readonly address: "0xdac17f958d2ee523a2206206994597c13d831ec7";
            readonly decimals: 6;
            readonly symbol: "USDT";
            readonly name: "Theter";
        };
        readonly usdc: {
            readonly address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
            readonly decimals: 6;
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly dai: {
            readonly address: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
            readonly decimals: 18;
            readonly symbol: "DAI";
            readonly name: "DAI";
        };
        readonly matic: {
            readonly address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
            readonly decimals: 18;
            readonly symbol: "MATIC";
            readonly name: "MATIC";
        };
        readonly tusd: {
            readonly address: "0x0000000000085d4780B73119b644AE5ecd22b376";
            readonly decimals: 18;
            readonly symbol: "TUSD";
            readonly name: "True USD";
        };
        readonly wbtc: {
            readonly address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
            readonly decimals: 18;
            readonly symbol: "WBTC";
            readonly name: "Wrapped Bitcoin";
        };
        readonly busd: {
            readonly address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
            readonly decimals: 18;
            readonly symbol: "BUSD";
            readonly name: "Binance USD";
        };
        readonly bnb: {
            readonly address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52";
            readonly decimals: 18;
            readonly symbol: "BNB";
            readonly name: "BNB";
        };
        readonly usdp: {
            readonly address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1";
            readonly decimals: 18;
            readonly symbol: "USDP";
            readonly name: "PAX Dollar";
        };
        readonly steth: {
            readonly address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
            readonly decimals: 18;
            readonly symbol: "STETH";
            readonly name: "Lido Stalked Ether";
        };
        readonly frax: {
            readonly address: "0x853d955aCEf822Db058eb8505911ED77F175b99e";
            readonly decimals: 18;
            readonly symbol: "FRAX";
            readonly name: "Frax";
        };
    };
    readonly id: 1;
    readonly network: "homestead";
    readonly name: "Ethereum";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://eth-mainnet.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://eth-mainnet.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://mainnet.infura.io/v3"];
            readonly webSocket: readonly ["wss://mainnet.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://cloudflare-eth.com"];
        };
        readonly public: {
            readonly http: readonly ["https://cloudflare-eth.com"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
        };
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
        };
    };
    readonly contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62";
            readonly blockCreated: 16966585;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
};
