"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimism = void 0;
const tokens_1 = require("../tokens");
const chains_1 = require("@wagmi/chains");
// import optimismIcon from "@/icons/colored/chains/optimism.svg";
exports.optimism = {
    // icon: "img:" + optimismIcon,
    ...chains_1.optimism,
    tokens: {
        op: {
            ...tokens_1.op,
            address: "0x4200000000000000000000000000000000000042",
        },
        usdt: {
            ...tokens_1.usdt,
            address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
        },
        usdc: {
            ...tokens_1.usdc,
            address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
            decimals: 6,
        },
        matic: {
            ...tokens_1.matic,
            address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
        },
        frax: {
            ...tokens_1.frax,
            address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
        },
        busd: {
            ...tokens_1.busd,
            address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
        },
        // uni: {
        //   ...uni,
        //   address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
        // },
        wbtc: {
            ...tokens_1.wbtc,
            address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
        },
        // link: {
        //   ...link,
        //   address: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
        // },
        dai: {
            ...tokens_1.dai,
            address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        },
    },
};
