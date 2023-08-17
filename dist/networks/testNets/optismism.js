"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimismGoerli = void 0;
const tokens_1 = require("../../tokens");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../../models");
// import optimismIcon from "@/icons/colored/chains/optimism.svg";
exports.optimismGoerli = {
    ...chains_1.optimismGoerli,
    tokens: {
        eth: {
            ...tokens_1.eth,
            address: models_1.zeroAddress,
            isNative: true,
        },
        // {
        //   ...usdc,
        //   // address: "0x5425890298aed601595a70AB815c96711a31Bc65",
        // },
    },
};
