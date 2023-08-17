"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goerli = void 0;
const tokens_1 = require("../../tokens/");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../../models");
// import ethereumIcon from "@/icons/colored/chains/ethereum.svg";
exports.goerli = {
    ...chains_1.goerli,
    tokens: {
        eth: {
            ...tokens_1.eth,
            address: models_1.zeroAddress,
            isNative: true,
        },
        usdc: {
            ...tokens_1.usdc,
            decimals: 6,
            address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
        },
        weth: {
            ...tokens_1.weth,
            address: "0x695364ffaa20f205e337f9e6226e5e22525838d9",
            decimals: 18,
        },
    },
};
