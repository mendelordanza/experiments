/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BulkTransfer, BulkTransferInterface } from "../BulkTransfer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGnosisSafe",
        name: "safe",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct BulkTransfer.Transfer[]",
        name: "transfers",
        type: "tuple[]",
      },
    ],
    name: "executeBulkTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bc1806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630ebaf65014610030575b600080fd5b61004a60048036038101906100459190610507565b61004c565b005b610054610141565b81816000828290501161009c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610093906105c4565b60405180910390fd5b60005b8484905081101561013957610126868686848181106100c1576100c06105e4565b5b90506060020160200160208101906100d9919061063f565b8787858181106100ec576100eb6105e4565b5b9050606002016000016020810190610104919061063f565b888886818110610117576101166105e4565b5b905060600201604001356101b1565b8080610131906106a5565b91505061009f565b505050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a690610760565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102ba578373ffffffffffffffffffffffffffffffffffffffff1663468721a7838360006040518463ffffffff1660e01b81526004016102249392919061089c565b602060405180830381600087803b15801561023e57600080fd5b505af1158015610252573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610276919061091e565b6102b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ac90610997565b60405180910390fd5b610422565b600082826040516024016102cf9291906109d8565b6040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090508473ffffffffffffffffffffffffffffffffffffffff1663468721a78560008460006040518563ffffffff1660e01b815260040161038f9493929190610ad3565b602060405180830381600087803b1580156103a957600080fd5b505af11580156103bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e1919061091e565b610420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041790610b6b565b60405180910390fd5b505b50505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061045d82610432565b9050919050565b600061046f82610452565b9050919050565b61047f81610464565b811461048a57600080fd5b50565b60008135905061049c81610476565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126104c7576104c66104a2565b5b8235905067ffffffffffffffff8111156104e4576104e36104a7565b5b602083019150836060820283011115610500576104ff6104ac565b5b9250929050565b6000806000604084860312156105205761051f610428565b5b600061052e8682870161048d565b935050602084013567ffffffffffffffff81111561054f5761054e61042d565b5b61055b868287016104b1565b92509250509250925092565b600082825260208201905092915050565b7f49742073686f756c642068617665207472616e73666572730000000000000000600082015250565b60006105ae601883610567565b91506105b982610578565b602082019050919050565b600060208201905081810360008301526105dd816105a1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61061c81610452565b811461062757600080fd5b50565b60008135905061063981610613565b92915050565b60006020828403121561065557610654610428565b5b60006106638482850161062a565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006106b08261069b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156106e3576106e261066c565b5b600182019050919050565b7f4f6e6c79207468652060576f726b666c6f774d6f64756c65602063616e20636160008201527f6c6c000000000000000000000000000000000000000000000000000000000000602082015250565b600061074a602283610567565b9150610755826106ee565b604082019050919050565b600060208201905081810360008301526107798161073d565b9050919050565b6000819050919050565b60006107a56107a061079b84610432565b610780565b610432565b9050919050565b60006107b78261078a565b9050919050565b60006107c9826107ac565b9050919050565b6107d9816107be565b82525050565b6107e88161069b565b82525050565b600082825260208201905092915050565b50565b600061080f6000836107ee565b915061081a826107ff565b600082019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811061086557610864610825565b5b50565b600081905061087682610854565b919050565b600061088682610868565b9050919050565b6108968161087b565b82525050565b60006080820190506108b160008301866107d0565b6108be60208301856107df565b81810360408301526108cf81610802565b90506108de606083018461088d565b949350505050565b60008115159050919050565b6108fb816108e6565b811461090657600080fd5b50565b600081519050610918816108f2565b92915050565b60006020828403121561093457610933610428565b5b600061094284828501610909565b91505092915050565b7f43616e6e6f742065786563757465206574686572207472616e736665722e0000600082015250565b6000610981601e83610567565b915061098c8261094b565b602082019050919050565b600060208201905081810360008301526109b081610974565b9050919050565b60006109c282610432565b9050919050565b6109d2816109b7565b82525050565b60006040820190506109ed60008301856109c9565b6109fa60208301846107df565b9392505050565b610a0a81610452565b82525050565b6000819050919050565b6000610a35610a30610a2b84610a10565b610780565b61069b565b9050919050565b610a4581610a1a565b82525050565b600081519050919050565b60005b83811015610a74578082015181840152602081019050610a59565b83811115610a83576000848401525b50505050565b6000601f19601f8301169050919050565b6000610aa582610a4b565b610aaf81856107ee565b9350610abf818560208601610a56565b610ac881610a89565b840191505092915050565b6000608082019050610ae86000830187610a01565b610af56020830186610a3c565b8181036040830152610b078185610a9a565b9050610b16606083018461088d565b95945050505050565b7f43616e6e6f74206578656375746520746f6b656e207472616e736665722e0000600082015250565b6000610b55601e83610567565b9150610b6082610b1f565b602082019050919050565b60006020820190508181036000830152610b8481610b48565b905091905056fea264697066735822122067f30d4646f362377d7c8fc42254c83ee267ddd252dc46a55a1e6237a312a89064736f6c63430008090033";

type BulkTransferConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BulkTransferConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BulkTransfer__factory extends ContractFactory {
  constructor(...args: BulkTransferConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BulkTransfer";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BulkTransfer> {
    return super.deploy(overrides || {}) as Promise<BulkTransfer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BulkTransfer {
    return super.attach(address) as BulkTransfer;
  }
  connect(signer: Signer): BulkTransfer__factory {
    return super.connect(signer) as BulkTransfer__factory;
  }
  static readonly contractName: "BulkTransfer";
  public readonly contractName: "BulkTransfer";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BulkTransferInterface {
    return new utils.Interface(_abi) as BulkTransferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BulkTransfer {
    return new Contract(address, _abi, signerOrProvider) as BulkTransfer;
  }
}