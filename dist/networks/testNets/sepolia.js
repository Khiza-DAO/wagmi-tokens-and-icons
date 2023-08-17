"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sepolia = void 0;
const tokens_1 = require("../../tokens");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../../models");
// import ethereumIcon from "@/icons/colored/chains/ethereum.svg";
exports.sepolia = {
    ...chains_1.sepolia,
    tokens: {
        eth: {
            ...tokens_1.eth,
            address: models_1.zeroAddress,
            isNative: true,
        },
    },
};
