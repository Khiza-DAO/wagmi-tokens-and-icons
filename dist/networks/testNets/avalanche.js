"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avalancheFuji = void 0;
const chains_1 = require("@wagmi/chains");
const tokens_1 = require("../../tokens");
const models_1 = require("../../models");
// import avalancheIcon from "@/icons/colored/chains/avalanche.svg";
exports.avalancheFuji = {
    ...chains_1.avalancheFuji,
    tokens: {
        avax: {
            ...tokens_1.avax,
            address: models_1.zeroAddress,
            isNative: true,
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0x5425890298aed601595a70AB815c96711a31Bc65",
            decimals: 6,
        },
    },
};
