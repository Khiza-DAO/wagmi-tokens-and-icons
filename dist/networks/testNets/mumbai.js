"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygonMumbai = void 0;
const tokens_1 = require("../../tokens");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../../models");
// import polygonIcon from '@/icons/colored/chains/polygon.svg'
exports.polygonMumbai = {
    ...chains_1.polygonMumbai,
    tokens: {
        matic: {
            ...tokens_1.matic,
            address: models_1.zeroAddress,
            isNative: true,
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0xE097d6B3100777DC31B34dC2c58fB524C2e76921",
            decimals: 6,
        },
        usdt: {
            ...tokens_1.usdt,
            address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
            decimals: 6,
        },
    },
};
