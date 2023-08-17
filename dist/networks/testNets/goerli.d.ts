export declare const goerli: {
    readonly tokens: {
        readonly eth: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly isNative: true;
            readonly decimals: 18;
            readonly symbol: "ETH";
            readonly name: "Ether";
        };
        readonly usdc: {
            readonly decimals: 6;
            readonly address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f";
            readonly symbol: "USDC";
            readonly name: "USD Coin";
        };
        readonly weth: {
            readonly address: "0x695364ffaa20f205e337f9e6226e5e22525838d9";
            readonly decimals: 18;
            readonly symbol: "WETH";
            readonly name: "Wrapped Ether";
        };
    };
    readonly id: 5;
    readonly network: "goerli";
    readonly name: "Goerli";
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://eth-goerli.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://eth-goerli.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://goerli.infura.io/v3"];
            readonly webSocket: readonly ["wss://goerli.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/eth_goerli"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/eth_goerli"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://goerli.etherscan.io";
        };
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://goerli.etherscan.io";
        };
    };
    readonly contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0x56522D00C410a43BFfDF00a9A569489297385790";
            readonly blockCreated: 8765204;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 6507670;
        };
    };
    readonly testnet: true;
};
