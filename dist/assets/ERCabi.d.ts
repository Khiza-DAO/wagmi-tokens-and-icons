/**
 * [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20)
 */
export declare const erc20ABI: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "allowance";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "decimals";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}];
/**
 * [bytes32-flavored ERC-20](https://docs.makerdao.com/smart-contract-modules/mkr-module#4.-gotchas-potential-source-of-user-error)
 * for tokens (ie. Maker) that use bytes32 instead of string.
 */
export declare const erc20ABI_bytes32: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "allowance";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "decimals";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
    }];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}];
/**
 * [ERC-721 Non-Fungible Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-721)
 */
export declare const erc721ABI: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "ApprovalForAll";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "approved";
        readonly type: "bool";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "getApproved";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
}, {
    readonly type: "function";
    readonly name: "isApprovedForAll";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "ownerOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "setApprovalForAll";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenByIndex";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenByIndex";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenURI";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokeId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}];
/**
 * [Multicall3](https://github.com/mds1/multicall)
 */
export declare const multicallABI: readonly [{
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly name: "allowFailure";
            readonly type: "bool";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "calls";
        readonly type: "tuple[]";
    }];
    readonly name: "aggregate3";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly name: "success";
            readonly type: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
        }];
        readonly name: "returnData";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
/**
 * [ERC-4626 Tokenized Vaults Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626)
 */
export declare const erc4626ABI: readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "Deposit";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "Withdraw";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "asset";
    readonly outputs: readonly [{
        readonly name: "assetTokenAddress";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "convertToAssets";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "convertToShares";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "deposit";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "maxDeposit";
    readonly outputs: readonly [{
        readonly name: "maxAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "maxMint";
    readonly outputs: readonly [{
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "maxRedeem";
    readonly outputs: readonly [{
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "maxWithdraw";
    readonly outputs: readonly [{
        readonly name: "maxAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "previewDeposit";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "previewMint";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "previewRedeem";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "previewWithdraw";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "redeem";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalAssets";
    readonly outputs: readonly [{
        readonly name: "totalManagedAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
