/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  HelloWorld,
  HelloWorldInterface,
} from "../../contracts/HelloWorld";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161033e38038061033e83398101604081905261002f916100ea565b8051610042906000906020840190610049565b50506101a0565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261007f57600085556100c5565b82601f1061009857805160ff19168380011785556100c5565b828001600101855582156100c5579182015b828111156100c55782518255916020019190600101906100aa565b506100d19291506100d5565b5090565b5b808211156100d157600081556001016100d6565b600060208083850312156100fc578182fd5b82516001600160401b0380821115610112578384fd5b818501915085601f830112610125578384fd5b81518181111561013157fe5b604051601f8201601f191681018501838111828210171561014e57fe5b6040528181528382018501881015610164578586fd5b8592505b818310156101855783830185015181840186015291840191610168565b8183111561019557858583830101525b979650505050505050565b61018f806101af6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063cfae321714610030575b600080fd5b61003861004e565b6040516100459190610106565b60405180910390f35b606060006040516020016100629190610076565b604051602081830303815290604052905090565b60006448656c6c6f60d81b8252600160fd1b600583015260068184546001808216600081146100ac57600181146100c7576100fa565b60ff1983168786015260028304607f168701850193506100fa565b600283048887526020808820885b838110156100f05781548b82018a01529085019082016100d5565b5050508701850193505b50919695505050505050565b6000602080835283518082850152825b8181101561013257858101830151858201604001528201610116565b818111156101435783604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220d7200bc606dc8513820fabb25df3215b6f1620026e7b7326b2bef1171c1ee26d64736f6c63430007060033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(_message, overrides || {}) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_message, overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}
