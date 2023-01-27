/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { UsdcSwap, UsdcSwapInterface } from "../../contracts/UsdcSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "USDC",
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
    inputs: [],
    name: "WETH9",
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
    inputs: [],
    name: "feeTier",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "swapWETHForDAI",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516106c33803806106c383398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c61062b6100986000398060fb52806101975280610267525061062b6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632ed5016f1461005c5780634aa4a4fc1461008557806372f5d98a1461009a57806389a30271146100af578063c31c9c07146100b7575b600080fd5b61006f61006a36600461052f565b6100bf565b60405161007c91906105ec565b60405180910390f35b61008d61022f565b60405161007c919061055f565b6100a2610247565b60405161007c91906105dc565b61008d61024d565b61008d610265565b60006100e173c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2333085610289565b61012073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc27f0000000000000000000000000000000000000000000000000000000000000000846103e1565b604080516101008101825273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486020820152610bb88183015233606082015242608082015260a08101849052600060c0820181905260e08201819052915163414bf38960e01b81528291907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063414bf389906101d4908490600401610573565b602060405180830381600087803b1580156101ee57600080fd5b505af1158015610202573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102269190610547565b95945050505050565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b610bb881565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b6020831061030d5780518252601f1990920191602091820191016102ee565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461036f576040519150601f19603f3d011682016040523d82523d6000602084013e610374565b606091505b50915091508180156103a25750805115806103a2575080806020019051602081101561039f57600080fd5b50515b6103d9576040805162461bcd60e51b815260206004820152600360248201526229aa2360e91b604482015290519081900360640190fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b1781529251825160009485949389169392918291908083835b6020831061045d5780518252601f19909201916020918201910161043e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146104bf576040519150601f19603f3d011682016040523d82523d6000602084013e6104c4565b606091505b50915091508180156104f25750805115806104f257508080602001905160208110156104ef57600080fd5b50515b610528576040805162461bcd60e51b8152602060048201526002602482015261534160f01b604482015290519081900360640190fd5b5050505050565b600060208284031215610540578081fd5b5035919050565b600060208284031215610558578081fd5b5051919050565b6001600160a01b0391909116815260200190565b81516001600160a01b03908116825260208084015182169083015260408084015162ffffff16908301526060808401518216908301526080808401519083015260a0838101519083015260c0808401519083015260e09283015116918101919091526101000190565b62ffffff91909116815260200190565b9081526020019056fea26469706673582212201af88d27ddc002b15c2dea34c9b872a837a68da39ed7c94f468acde9d4fe319164736f6c63430007060033";

type UsdcSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsdcSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UsdcSwap__factory extends ContractFactory {
  constructor(...args: UsdcSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _swapRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UsdcSwap> {
    return super.deploy(_swapRouter, overrides || {}) as Promise<UsdcSwap>;
  }
  override getDeployTransaction(
    _swapRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_swapRouter, overrides || {});
  }
  override attach(address: string): UsdcSwap {
    return super.attach(address) as UsdcSwap;
  }
  override connect(signer: Signer): UsdcSwap__factory {
    return super.connect(signer) as UsdcSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsdcSwapInterface {
    return new utils.Interface(_abi) as UsdcSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdcSwap {
    return new Contract(address, _abi, signerOrProvider) as UsdcSwap;
  }
}
