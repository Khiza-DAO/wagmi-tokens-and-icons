"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avalanche = void 0;
const tokens_1 = require("../tokens");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../models");
// import avalancheIcon from "@/icons/colored/chains/avalanche.svg";
exports.avalanche = {
    // icon: "img:" + avalancheIcon,
    ...chains_1.avalanche,
    tokens: {
        avax: {
            ...tokens_1.avax,
            address: models_1.zeroAddress,
            isNative: true,
        },
        usdt: {
            ...tokens_1.usdt,
            address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            decimals: 6,
        },
        busd: {
            ...tokens_1.busd,
            address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
        },
        weth: {
            ...tokens_1.weth,
            address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
            note: "bridged through avalanche bridge",
        },
        frax: {
            ...tokens_1.frax,
            address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
        },
        // uni: {
        //   ...uni,
        //   address: "0x8ebaf22b6f053dffeaf46f4dd9efa95d89ba8580",
        // },
        wbtc: {
            ...tokens_1.wbtc,
            address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
        },
        // link: {
        //   ...link,
        //   address: "0x5947bb275c521040051d82396192181b413227a3",
        // },
        dai: {
            ...tokens_1.dai,
            address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
        },
        tusd: {
            ...tokens_1.tusd,
            address: "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB",
        },
    },
};
