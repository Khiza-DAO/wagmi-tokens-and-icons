"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gnosis = void 0;
const tokens_1 = require("../tokens");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../models");
// import gnosisIcon from "@/icons/colored/chains/gnosis.svg";
exports.gnosis = {
    // icon: "img:" + gnosisIcon,
    ...chains_1.gnosis,
    tokens: {
        xdai: {
            ...tokens_1.xdai,
            address: models_1.zeroAddress,
            isNative: true,
        },
        dai: {
            ...tokens_1.dai,
            address: "0x44fA8E6f47987339850636F88629646662444217",
        },
        usdt: {
            ...tokens_1.usdt,
            address: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
            decimals: 6,
        },
        weth: {
            ...tokens_1.weth,
            address: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
        },
        busd: {
            ...tokens_1.busd,
            address: "0xdd96b45877d0e8361a4ddb732da741e97f3191ff",
        },
        // uni:
        //   ...uni,
        //   address: "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
        // },
        wbtc: {
            ...tokens_1.wbtc,
            address: "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252",
        },
        // link: {
        //   ...link,
        //   address: "0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2",
        // },
    },
};
