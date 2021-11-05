/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface L1ArbitrumGatewayInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'getExternalCall(uint256,address,bytes)': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'inbox()': FunctionFragment
    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)': FunctionFragment
    'postUpgradeInit()': FunctionFragment
    'router()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getExternalCall',
    values: [BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'inbox', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'postUpgradeInit',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'router', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getExternalCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'inbox', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'postUpgradeInit',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result

  events: {
    'DepositInitiated(address,address,address,uint256,uint256)': EventFragment
    'TxToL2(address,address,uint256,bytes)': EventFragment
    'WithdrawalFinalized(address,address,address,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DepositInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TxToL2'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawalFinalized'): EventFragment
}

export type DepositInitiatedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    l1Token: string
    _from: string
    _to: string
    _sequenceNumber: BigNumber
    _amount: BigNumber
  }
>

export type TxToL2Event = TypedEvent<
  [string, string, BigNumber, string] & {
    _from: string
    _to: string
    _seqNum: BigNumber
    _data: string
  }
>

export type WithdrawalFinalizedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    l1Token: string
    _from: string
    _to: string
    _exitNum: BigNumber
    _amount: BigNumber
  }
>

export class L1ArbitrumGateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: L1ArbitrumGatewayInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getExternalCall(
      arg0: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { target: string; data: string }>

    getOutboundCalldata(
      _l1Token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    inbox(overrides?: CallOverrides): Promise<[string]>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    postUpgradeInit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    router(overrides?: CallOverrides): Promise<[string]>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getExternalCall(
    arg0: BigNumberish,
    _initialDestination: string,
    _initialData: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { target: string; data: string }>

  getOutboundCalldata(
    _l1Token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  inbox(overrides?: CallOverrides): Promise<string>

  outboundTransfer(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  postUpgradeInit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  router(overrides?: CallOverrides): Promise<string>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    getExternalCall(
      arg0: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { target: string; data: string }>

    getOutboundCalldata(
      _l1Token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    inbox(overrides?: CallOverrides): Promise<string>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    postUpgradeInit(overrides?: CallOverrides): Promise<void>

    router(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    'DepositInitiated(address,address,address,uint256,uint256)'(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _sequenceNumber?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _sequenceNumber: BigNumber
        _amount: BigNumber
      }
    >

    DepositInitiated(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _sequenceNumber?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _sequenceNumber: BigNumber
        _amount: BigNumber
      }
    >

    'TxToL2(address,address,uint256,bytes)'(
      _from?: string | null,
      _to?: string | null,
      _seqNum?: BigNumberish | null,
      _data?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { _from: string; _to: string; _seqNum: BigNumber; _data: string }
    >

    TxToL2(
      _from?: string | null,
      _to?: string | null,
      _seqNum?: BigNumberish | null,
      _data?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { _from: string; _to: string; _seqNum: BigNumber; _data: string }
    >

    'WithdrawalFinalized(address,address,address,uint256,uint256)'(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _exitNum?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _exitNum: BigNumber
        _amount: BigNumber
      }
    >

    WithdrawalFinalized(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _exitNum?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _exitNum: BigNumber
        _amount: BigNumber
      }
    >
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getExternalCall(
      arg0: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getOutboundCalldata(
      _l1Token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    inbox(overrides?: CallOverrides): Promise<BigNumber>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    postUpgradeInit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    router(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getExternalCall(
      arg0: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _l1Token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    postUpgradeInit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
