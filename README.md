# wagmi-tokens-and-icons

This repository provide icons and popular token contacts for wagmi networks

```
import {mainnet} from 'wagmi-tokens-and-icons'

const ethIcon = mainnet.icon


const ethTokens = mainnet.tokens
// tokens: [
//     {
//       ...eth,
//       isNative: true,
//     },
//     {
//       ...weth,
//       address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
//     },
//     {
//       ...usdt,
//       address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
//     }]

// Como eu gostaria
const usdtTokenEthNetwork = mainnet.tokens.usdt

// Ideia atual
// const usdtTokenEthNetwork = ethereum.tokens?.find((token)=> token.symbol === 'usdt')


```
