// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class IssuerCreated extends ethereum.Event {
  get params(): IssuerCreated__Params {
    return new IssuerCreated__Params(this);
  }
}

export class IssuerCreated__Params {
  _event: IssuerCreated;

  constructor(event: IssuerCreated) {
    this._event = event;
  }

  get issuer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get tokenType(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class TokenCreated extends ethereum.Event {
  get params(): TokenCreated__Params {
    return new TokenCreated__Params(this);
  }
}

export class TokenCreated__Params {
  _event: TokenCreated;

  constructor(event: TokenCreated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get tokenType(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxyCreated extends ethereum.Event {
  get params(): ProxyCreated__Params {
    return new ProxyCreated__Params(this);
  }
}

export class ProxyCreated__Params {
  _event: ProxyCreated;

  constructor(event: ProxyCreated) {
    this._event = event;
  }

  get proxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Factory__tokenResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }
}

export class Factory__getNameAndTypeResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }
}

export class Factory__getAddressAndTypeResult {
  value0: Address;
  value1: Bytes;

  constructor(value0: Address, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  getSigner(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): Address {
    let result = super.call(
      "getSigner",
      "getSigner(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );

    return result[0].toAddress();
  }

  try_getSigner(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSigner",
      "getSigner(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deploySigned(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): Address {
    let result = super.call(
      "deploySigned",
      "deploySigned(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );

    return result[0].toAddress();
  }

  try_deploySigned(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deploySigned",
      "deploySigned(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deploy(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes
  ): Address {
    let result = super.call(
      "deploy",
      "deploy(uint256,address,address,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toAddress();
  }

  try_deploy(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deploy",
      "deploy(uint256,address,address,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  token(param0: Address): Factory__tokenResult {
    let result = super.call("token", "token(address):(bytes32,bytes32)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new Factory__tokenResult(result[0].toBytes(), result[1].toBytes());
  }

  try_token(param0: Address): ethereum.CallResult<Factory__tokenResult> {
    let result = super.tryCall("token", "token(address):(bytes32,bytes32)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__tokenResult(value[0].toBytes(), value[1].toBytes())
    );
  }

  getDeploymentAddress(_salt: BigInt, _sender: Address): Address {
    let result = super.call(
      "getDeploymentAddress",
      "getDeploymentAddress(uint256,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_sender)
      ]
    );

    return result[0].toAddress();
  }

  try_getDeploymentAddress(
    _salt: BigInt,
    _sender: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getDeploymentAddress",
      "getDeploymentAddress(uint256,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_sender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deployMinimal(_logic: Address, _data: Bytes): Address {
    let result = super.call(
      "deployMinimal",
      "deployMinimal(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_data)]
    );

    return result[0].toAddress();
  }

  try_deployMinimal(
    _logic: Address,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployMinimal",
      "deployMinimal(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_data)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenCount(): BigInt {
    let result = super.call("getTokenCount", "getTokenCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTokenCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenCount",
      "getTokenCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getToken(n: BigInt): Address {
    let result = super.call("getToken", "getToken(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(n)
    ]);

    return result[0].toAddress();
  }

  try_getToken(n: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("getToken", "getToken(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(n)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getName(viaAddress: Address): Bytes {
    let result = super.call("getName", "getName(address):(bytes32)", [
      ethereum.Value.fromAddress(viaAddress)
    ]);

    return result[0].toBytes();
  }

  try_getName(viaAddress: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getName", "getName(address):(bytes32)", [
      ethereum.Value.fromAddress(viaAddress)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getType(viaAddress: Address): Bytes {
    let result = super.call("getType", "getType(address):(bytes32)", [
      ethereum.Value.fromAddress(viaAddress)
    ]);

    return result[0].toBytes();
  }

  try_getType(viaAddress: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getType", "getType(address):(bytes32)", [
      ethereum.Value.fromAddress(viaAddress)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getNameAndType(viaAddress: Address): Factory__getNameAndTypeResult {
    let result = super.call(
      "getNameAndType",
      "getNameAndType(address):(bytes32,bytes32)",
      [ethereum.Value.fromAddress(viaAddress)]
    );

    return new Factory__getNameAndTypeResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getNameAndType(
    viaAddress: Address
  ): ethereum.CallResult<Factory__getNameAndTypeResult> {
    let result = super.tryCall(
      "getNameAndType",
      "getNameAndType(address):(bytes32,bytes32)",
      [ethereum.Value.fromAddress(viaAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getNameAndTypeResult(value[0].toBytes(), value[1].toBytes())
    );
  }

  getTokenByNameType(tokenName: Bytes, tokenType: Bytes): Address {
    let result = super.call(
      "getTokenByNameType",
      "getTokenByNameType(bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(tokenName),
        ethereum.Value.fromFixedBytes(tokenType)
      ]
    );

    return result[0].toAddress();
  }

  try_getTokenByNameType(
    tokenName: Bytes,
    tokenType: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenByNameType",
      "getTokenByNameType(bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(tokenName),
        ethereum.Value.fromFixedBytes(tokenType)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getIssuer(tokenType: Bytes, tokenName: Bytes): Address {
    let result = super.call(
      "getIssuer",
      "getIssuer(bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(tokenType),
        ethereum.Value.fromFixedBytes(tokenName)
      ]
    );

    return result[0].toAddress();
  }

  try_getIssuer(
    tokenType: Bytes,
    tokenName: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getIssuer",
      "getIssuer(bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(tokenType),
        ethereum.Value.fromFixedBytes(tokenName)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAddressAndType(tokenName: Bytes): Factory__getAddressAndTypeResult {
    let result = super.call(
      "getAddressAndType",
      "getAddressAndType(bytes32):(address,bytes32)",
      [ethereum.Value.fromFixedBytes(tokenName)]
    );

    return new Factory__getAddressAndTypeResult(
      result[0].toAddress(),
      result[1].toBytes()
    );
  }

  try_getAddressAndType(
    tokenName: Bytes
  ): ethereum.CallResult<Factory__getAddressAndTypeResult> {
    let result = super.tryCall(
      "getAddressAndType",
      "getAddressAndType(bytes32):(address,bytes32)",
      [ethereum.Value.fromFixedBytes(tokenName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getAddressAndTypeResult(
        value[0].toAddress(),
        value[1].toBytes()
      )
    );
  }

  getViaOracleUrl(): string {
    let result = super.call(
      "getViaOracleUrl",
      "getViaOracleUrl():(string)",
      []
    );

    return result[0].toString();
  }

  try_getViaOracleUrl(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getViaOracleUrl",
      "getViaOracleUrl():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getFiatPayoutUrl(): string {
    let result = super.call(
      "getFiatPayoutUrl",
      "getFiatPayoutUrl():(string)",
      []
    );

    return result[0].toString();
  }

  try_getFiatPayoutUrl(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getFiatPayoutUrl",
      "getFiatPayoutUrl():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getClient(): Address {
    let result = super.call("getClient", "getClient():(address)", []);

    return result[0].toAddress();
  }

  try_getClient(): ethereum.CallResult<Address> {
    let result = super.tryCall("getClient", "getClient():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createToken(
    _target: Address,
    issuer: Address,
    tokenName: Bytes,
    tokenSymbol: Bytes
  ): Address {
    let result = super.call(
      "createToken",
      "createToken(address,address,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_target),
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromFixedBytes(tokenName),
        ethereum.Value.fromFixedBytes(tokenSymbol)
      ]
    );

    return result[0].toAddress();
  }

  try_createToken(
    _target: Address,
    issuer: Address,
    tokenName: Bytes,
    tokenSymbol: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createToken",
      "createToken(address,address,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_target),
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromFixedBytes(tokenName),
        ethereum.Value.fromFixedBytes(tokenSymbol)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DeploySignedCall extends ethereum.Call {
  get inputs(): DeploySignedCall__Inputs {
    return new DeploySignedCall__Inputs(this);
  }

  get outputs(): DeploySignedCall__Outputs {
    return new DeploySignedCall__Outputs(this);
  }
}

export class DeploySignedCall__Inputs {
  _call: DeploySignedCall;

  constructor(call: DeploySignedCall) {
    this._call = call;
  }

  get _salt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _logic(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _signature(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class DeploySignedCall__Outputs {
  _call: DeploySignedCall;

  constructor(call: DeploySignedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployCall extends ethereum.Call {
  get inputs(): DeployCall__Inputs {
    return new DeployCall__Inputs(this);
  }

  get outputs(): DeployCall__Outputs {
    return new DeployCall__Outputs(this);
  }
}

export class DeployCall__Inputs {
  _call: DeployCall;

  constructor(call: DeployCall) {
    this._call = call;
  }

  get _salt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _logic(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DeployCall__Outputs {
  _call: DeployCall;

  constructor(call: DeployCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class DeployMinimalCall extends ethereum.Call {
  get inputs(): DeployMinimalCall__Inputs {
    return new DeployMinimalCall__Inputs(this);
  }

  get outputs(): DeployMinimalCall__Outputs {
    return new DeployMinimalCall__Outputs(this);
  }
}

export class DeployMinimalCall__Inputs {
  _call: DeployMinimalCall;

  constructor(call: DeployMinimalCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class DeployMinimalCall__Outputs {
  _call: DeployMinimalCall;

  constructor(call: DeployMinimalCall) {
    this._call = call;
  }

  get proxy(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class Initialize1Call extends ethereum.Call {
  get inputs(): Initialize1Call__Inputs {
    return new Initialize1Call__Inputs(this);
  }

  get outputs(): Initialize1Call__Outputs {
    return new Initialize1Call__Outputs(this);
  }
}

export class Initialize1Call__Inputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Initialize1Call__Outputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class CreateIssuerCall extends ethereum.Call {
  get inputs(): CreateIssuerCall__Inputs {
    return new CreateIssuerCall__Inputs(this);
  }

  get outputs(): CreateIssuerCall__Outputs {
    return new CreateIssuerCall__Outputs(this);
  }
}

export class CreateIssuerCall__Inputs {
  _call: CreateIssuerCall;

  constructor(call: CreateIssuerCall) {
    this._call = call;
  }

  get _target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get tokenType(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get tokenCurrency(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _oracle(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _fee(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class CreateIssuerCall__Outputs {
  _call: CreateIssuerCall;

  constructor(call: CreateIssuerCall) {
    this._call = call;
  }
}

export class CreateTokenCall extends ethereum.Call {
  get inputs(): CreateTokenCall__Inputs {
    return new CreateTokenCall__Inputs(this);
  }

  get outputs(): CreateTokenCall__Outputs {
    return new CreateTokenCall__Outputs(this);
  }
}

export class CreateTokenCall__Inputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get _target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get issuer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenName(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get tokenSymbol(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class CreateTokenCall__Outputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetViaOracleUrlCall extends ethereum.Call {
  get inputs(): SetViaOracleUrlCall__Inputs {
    return new SetViaOracleUrlCall__Inputs(this);
  }

  get outputs(): SetViaOracleUrlCall__Outputs {
    return new SetViaOracleUrlCall__Outputs(this);
  }
}

export class SetViaOracleUrlCall__Inputs {
  _call: SetViaOracleUrlCall;

  constructor(call: SetViaOracleUrlCall) {
    this._call = call;
  }

  get _url(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetViaOracleUrlCall__Outputs {
  _call: SetViaOracleUrlCall;

  constructor(call: SetViaOracleUrlCall) {
    this._call = call;
  }
}

export class SetFiatPayoutUrlCall extends ethereum.Call {
  get inputs(): SetFiatPayoutUrlCall__Inputs {
    return new SetFiatPayoutUrlCall__Inputs(this);
  }

  get outputs(): SetFiatPayoutUrlCall__Outputs {
    return new SetFiatPayoutUrlCall__Outputs(this);
  }
}

export class SetFiatPayoutUrlCall__Inputs {
  _call: SetFiatPayoutUrlCall;

  constructor(call: SetFiatPayoutUrlCall) {
    this._call = call;
  }

  get _url(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetFiatPayoutUrlCall__Outputs {
  _call: SetFiatPayoutUrlCall;

  constructor(call: SetFiatPayoutUrlCall) {
    this._call = call;
  }
}

export class SetClientAddressCall extends ethereum.Call {
  get inputs(): SetClientAddressCall__Inputs {
    return new SetClientAddressCall__Inputs(this);
  }

  get outputs(): SetClientAddressCall__Outputs {
    return new SetClientAddressCall__Outputs(this);
  }
}

export class SetClientAddressCall__Inputs {
  _call: SetClientAddressCall;

  constructor(call: SetClientAddressCall) {
    this._call = call;
  }

  get _client(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetClientAddressCall__Outputs {
  _call: SetClientAddressCall;

  constructor(call: SetClientAddressCall) {
    this._call = call;
  }
}
