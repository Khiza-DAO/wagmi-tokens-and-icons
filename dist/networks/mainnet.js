"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainnet = void 0;
const chains_1 = require("@wagmi/chains");
const tokens_1 = require("../tokens");
const models_1 = require("../models");
exports.mainnet = {
    ...chains_1.mainnet,
    tokens: {
        eth: {
            ...tokens_1.eth,
            address: models_1.zeroAddress,
            isNative: true,
        },
        weth: {
            ...tokens_1.weth,
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        },
        usdt: {
            ...tokens_1.usdt,
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        },
        dai: {
            ...tokens_1.dai,
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        },
        matic: {
            ...tokens_1.matic,
            address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        },
        tusd: {
            ...tokens_1.tusd,
            address: "0x0000000000085d4780B73119b644AE5ecd22b376",
        },
        wbtc: {
            ...tokens_1.wbtc,
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        },
        busd: {
            ...tokens_1.busd,
            address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        },
        bnb: {
            ...tokens_1.bnb,
            address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
        },
        usdp: {
            ...tokens_1.usdp,
            address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
        },
        steth: {
            ...tokens_1.steth,
            address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        },
        frax: {
            ...tokens_1.frax,
            address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
        },
    },
};
