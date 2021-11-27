/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061120c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100dc578063081812fc146100f1578063095ea7b31461011c57806323b872dd1461013157806342842e0e146101445780636352211e1461015757806370a082311461016a57806395d89b411461018b578063a22cb46514610193578063b88d4fde146101a6578063c87b56dd146101b9578063e985e9c5146101cc575b600080fd5b6100c76100c2366004610eeb565b6101df565b60405190151581526020015b60405180910390f35b6100e4610231565b6040516100d39190610fd6565b6101046100ff366004610f25565b6102c3565b6040516001600160a01b0390911681526020016100d3565b61012f61012a366004610ec1565b610350565b005b61012f61013f366004610d6e565b610461565b61012f610152366004610d6e565b610492565b610104610165366004610f25565b6104ad565b61017d610178366004610d20565b610524565b6040519081526020016100d3565b6100e46105ab565b61012f6101a1366004610e85565b6105ba565b61012f6101b4366004610daa565b6105c9565b6100e46101c7366004610f25565b610601565b6100c76101da366004610d3b565b6106d9565b60006001600160e01b031982166380ac58cd60e01b148061021057506001600160e01b03198216635b5e139f60e01b145b8061022b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060658054610240906110fb565b80601f016020809104026020016040519081016040528092919081815260200182805461026c906110fb565b80156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b5050505050905090565b60006102ce82610707565b6103345760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061035b826104ad565b9050806001600160a01b0316836001600160a01b031614156103c95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161032b565b336001600160a01b03821614806103e557506103e581336106d9565b6104525760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606482015260840161032b565b61045c8383610724565b505050565b61046b3382610792565b6104875760405162461bcd60e51b815260040161032b9061103b565b61045c83838361085c565b61045c838383604051806020016040528060008152506105c9565b6000818152606760205260408120546001600160a01b03168061022b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161032b565b60006001600160a01b03821661058f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161032b565b506001600160a01b031660009081526068602052604090205490565b606060668054610240906110fb565b6105c53383836109fc565b5050565b6105d33383610792565b6105ef5760405162461bcd60e51b815260040161032b9061103b565b6105fb84848484610ac7565b50505050565b606061060c82610707565b6106705760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161032b565b600061068760408051602081019091526000815290565b905060008151116106a757604051806020016040528060008152506106d2565b806106b184610afa565b6040516020016106c2929190610f6a565b6040516020818303038152906040525b9392505050565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b6000908152606760205260409020546001600160a01b0316151590565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610759826104ad565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061079d82610707565b6107fe5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161032b565b6000610809836104ad565b9050806001600160a01b0316846001600160a01b031614806108445750836001600160a01b0316610839846102c3565b6001600160a01b0316145b80610854575061085481856106d9565b949350505050565b826001600160a01b031661086f826104ad565b6001600160a01b0316146108d75760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161032b565b6001600160a01b0382166109395760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161032b565b610944600082610724565b6001600160a01b038316600090815260686020526040812080546001929061096d9084906110b8565b90915550506001600160a01b038216600090815260686020526040812080546001929061099b90849061108c565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610a5a5760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161032b565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ad284848461085c565b610ade84848484610bf7565b6105fb5760405162461bcd60e51b815260040161032b90610fe9565b606081610b1e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b485780610b3281611136565b9150610b419050600a836110a4565b9150610b22565b6000816001600160401b03811115610b6257610b626111a7565b6040519080825280601f01601f191660200182016040528015610b8c576020820181803683370190505b5090505b841561085457610ba16001836110b8565b9150610bae600a86611151565b610bb990603061108c565b60f81b818381518110610bce57610bce611191565b60200101906001600160f81b031916908160001a905350610bf0600a866110a4565b9450610b90565b60006001600160a01b0384163b15610cf957604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c3b903390899088908890600401610f99565b602060405180830381600087803b158015610c5557600080fd5b505af1925050508015610c85575060408051601f3d908101601f19168201909252610c8291810190610f08565b60015b610cdf573d808015610cb3576040519150601f19603f3d011682016040523d82523d6000602084013e610cb8565b606091505b508051610cd75760405162461bcd60e51b815260040161032b90610fe9565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610854565b506001949350505050565b80356001600160a01b0381168114610d1b57600080fd5b919050565b600060208284031215610d3257600080fd5b6106d282610d04565b60008060408385031215610d4e57600080fd5b610d5783610d04565b9150610d6560208401610d04565b90509250929050565b600080600060608486031215610d8357600080fd5b610d8c84610d04565b9250610d9a60208501610d04565b9150604084013590509250925092565b60008060008060808587031215610dc057600080fd5b610dc985610d04565b9350610dd760208601610d04565b92506040850135915060608501356001600160401b0380821115610dfa57600080fd5b818701915087601f830112610e0e57600080fd5b813581811115610e2057610e206111a7565b604051601f8201601f19908116603f01168101908382118183101715610e4857610e486111a7565b816040528281528a6020848701011115610e6157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610e9857600080fd5b610ea183610d04565b915060208301358015158114610eb657600080fd5b809150509250929050565b60008060408385031215610ed457600080fd5b610edd83610d04565b946020939093013593505050565b600060208284031215610efd57600080fd5b81356106d2816111bd565b600060208284031215610f1a57600080fd5b81516106d2816111bd565b600060208284031215610f3757600080fd5b5035919050565b60008151808452610f568160208601602086016110cf565b601f01601f19169290920160200192915050565b60008351610f7c8184602088016110cf565b835190830190610f908183602088016110cf565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610fcc90830184610f3e565b9695505050505050565b6020815260006106d26020830184610f3e565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000821982111561109f5761109f611165565b500190565b6000826110b3576110b361117b565b500490565b6000828210156110ca576110ca611165565b500390565b60005b838110156110ea5781810151838201526020016110d2565b838111156105fb5750506000910152565b600181811c9082168061110f57607f821691505b6020821081141561113057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561114a5761114a611165565b5060010190565b6000826111605761116061117b565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146111d357600080fd5b5056fea2646970667358221220be0f156edb2f648ee2bfba7aa5d8ed9fdfa539a0f95b711942e6aba9a8e52fb064736f6c63430008070033";

type ERC721UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC721UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}
