/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace IWorkflowModule {
  export type ActionStruct = { selector: BytesLike; arguments: BytesLike };

  export type ActionStructOutput = [string, string] & {
    selector: string;
    arguments: string;
  };

  export type TransferStruct = {
    token: string;
    recipient: string;
    amount: BigNumberish;
  };

  export type TransferStructOutput = [string, string, BigNumber] & {
    token: string;
    recipient: string;
    amount: BigNumber;
  };
}

export interface IWorkflowModuleInterface extends utils.Interface {
  contractName: "IWorkflowModule";
  functions: {
    "addWorkflow(address,address[],(bytes4,bytes)[])": FunctionFragment;
    "executeTransfers(address,(address,address,uint256)[])": FunctionFragment;
    "executeWorkflow(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addWorkflow",
    values: [string, string[], IWorkflowModule.ActionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransfers",
    values: [string, IWorkflowModule.TransferStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWorkflow",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addWorkflow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeWorkflow",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWorkflowModule extends BaseContract {
  contractName: "IWorkflowModule";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWorkflowModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addWorkflow(
      _safe: string,
      _delegates: string[],
      _actions: IWorkflowModule.ActionStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeTransfers(
      safe: string,
      transfers: IWorkflowModule.TransferStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeWorkflow(
      _safe: string,
      _workflow: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addWorkflow(
    _safe: string,
    _delegates: string[],
    _actions: IWorkflowModule.ActionStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeTransfers(
    safe: string,
    transfers: IWorkflowModule.TransferStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeWorkflow(
    _safe: string,
    _workflow: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addWorkflow(
      _safe: string,
      _delegates: string[],
      _actions: IWorkflowModule.ActionStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeTransfers(
      safe: string,
      transfers: IWorkflowModule.TransferStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeWorkflow(
      _safe: string,
      _workflow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addWorkflow(
      _safe: string,
      _delegates: string[],
      _actions: IWorkflowModule.ActionStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeTransfers(
      safe: string,
      transfers: IWorkflowModule.TransferStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeWorkflow(
      _safe: string,
      _workflow: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addWorkflow(
      _safe: string,
      _delegates: string[],
      _actions: IWorkflowModule.ActionStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeTransfers(
      safe: string,
      transfers: IWorkflowModule.TransferStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeWorkflow(
      _safe: string,
      _workflow: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
