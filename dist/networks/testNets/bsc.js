"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bscTestnet = void 0;
const chains_1 = require("@wagmi/chains");
const tokens_1 = require("../../tokens");
const models_1 = require("../../models");
// import bscIcon from "@/icons/colored/chains/bsc.svg";
exports.bscTestnet = {
    ...chains_1.bscTestnet,
    tokens: {
        bnb: {
            ...tokens_1.bnb,
            address: models_1.zeroAddress,
            isNative: true,
        },
        usdt: {
            ...tokens_1.usdt,
            address: "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd",
        },
        link: {
            ...tokens_1.link,
            address: "0x84b9b910527ad5c03a9ca831909e21e236ea7b06",
        },
    },
};
