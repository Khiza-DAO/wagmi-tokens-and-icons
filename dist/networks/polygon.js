"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygon = void 0;
const tokens_1 = require("../tokens");
const chains_1 = require("@wagmi/chains");
const models_1 = require("../models");
exports.polygon = {
    ...chains_1.polygon,
    tokens: {
        matic: {
            ...tokens_1.matic,
            address: models_1.zeroAddress,
            // O endereço abaixo é apenas um precompile e não deve ser considerado o endereço de um token nativo
            // ref. https://stackoverflow.com/questions/74696804/native-coin-matic-has-a-contract-address-on-the-polygon-network
            isNative: true,
        },
        sdt: {
            ...tokens_1.usdt,
            // address: "0x170A18B9190669Cda08965562745A323C907E5Ec", // pUSDt (segundo https://tether.to/en/supported-protocols)
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // (PoS) Tether USD ()
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            decimals: 6,
        },
        busd: {
            ...tokens_1.busd,
            address: "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",
        },
        frax: {
            ...tokens_1.frax,
            address: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
        },
        wbtc: {
            ...tokens_1.wbtc,
            address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        },
        weth: {
            ...tokens_1.weth,
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        },
        dai: {
            ...tokens_1.dai,
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        },
    },
};
