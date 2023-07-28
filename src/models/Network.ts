import { Address } from "viem";
import { TokenSymbols } from "../models/interfaces/ITokenBase";
import Token from "./Token";
import { Chain } from "@wagmi/chains";

type Contract = {
  address: Address;
  blockCreated?: number;
};

type customContractsKeys = "toklyRegistry";

type AditionalChainInfo = {
  tokens: {
    [key in TokenSymbols]?: Token;
  };
  customContracts: {
    [key in customContractsKeys]?: Contract;
  };
};

type CustomChain = Chain & AditionalChainInfo



// export class Network implements CustomChain {
//       /** ID in number form */
//       id: number;
//       /** Human-readable name */
//       name: string;
//       /** Internal network name */
//       network: string;
//       /** Currency used by chain */
//       nativeCurrency: NativeCurrency;
//       /** Collection of RPC endpoints */
//       rpcUrls: {
//           [key: string]: RpcUrls;
//           default: RpcUrls;
//           public: RpcUrls;
//       };
//       /** Collection of block explorers */
//       blockExplorers?: {
//           [key: string]: BlockExplorer;
//           default: BlockExplorer;
//       };
//       /** Collection of contracts */
//       contracts?: {
//           ensRegistry?: Contract;
//           ensUniversalResolver?: Contract;
//           multicall3?: Contract;
//       };
//       /** Flag for test networks */
//       testnet?: boolean;

//   constructor() {
    
//   }

// }