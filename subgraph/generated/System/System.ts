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

export class HolderCreated extends ethereum.Event {
  get params(): HolderCreated__Params {
    return new HolderCreated__Params(this);
  }
}

export class HolderCreated__Params {
  _event: HolderCreated;

  constructor(event: HolderCreated) {
    this._event = event;
  }

  get holder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get holderName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get accountCreator(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LedgerCreated extends ethereum.Event {
  get params(): LedgerCreated__Params {
    return new LedgerCreated__Params(this);
  }
}

export class LedgerCreated__Params {
  _event: LedgerCreated;

  constructor(event: LedgerCreated) {
    this._event = event;
  }

  get ledger(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ledgerName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get group(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get holder(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class AccountCreated extends ethereum.Event {
  get params(): AccountCreated__Params {
    return new AccountCreated__Params(this);
  }
}

export class AccountCreated__Params {
  _event: AccountCreated;

  constructor(event: AccountCreated) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get ledger(): Address {
    return this._event.parameters[2].value.toAddress();
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

export class System__accountholdersResult {
  value0: Bytes;
  value1: Address;

  constructor(value0: Bytes, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class System__accountsResult {
  value0: Bytes;
  value1: Address;
  value2: Bytes;

  constructor(value0: Bytes, value1: Address, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    return map;
  }
}

export class System__ledgersResult {
  value0: Bytes;
  value1: Bytes;
  value2: Address;

  constructor(value0: Bytes, value1: Bytes, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }
}

export class System__getHolderDetailsResult {
  value0: Bytes;
  value1: Address;

  constructor(value0: Bytes, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class System__getLedgerDetailsResult {
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

export class System__getAccountDetailsResult {
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

export class System extends ethereum.SmartContract {
  static bind(address: Address): System {
    return new System("System", address);
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

  accountholders(param0: Address): System__accountholdersResult {
    let result = super.call(
      "accountholders",
      "accountholders(address):(bytes32,address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new System__accountholdersResult(
      result[0].toBytes(),
      result[1].toAddress()
    );
  }

  try_accountholders(
    param0: Address
  ): ethereum.CallResult<System__accountholdersResult> {
    let result = super.tryCall(
      "accountholders",
      "accountholders(address):(bytes32,address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new System__accountholdersResult(value[0].toBytes(), value[1].toAddress())
    );
  }

  accounts(param0: Address): System__accountsResult {
    let result = super.call(
      "accounts",
      "accounts(address):(bytes32,address,bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new System__accountsResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toBytes()
    );
  }

  try_accounts(param0: Address): ethereum.CallResult<System__accountsResult> {
    let result = super.tryCall(
      "accounts",
      "accounts(address):(bytes32,address,bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new System__accountsResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toBytes()
      )
    );
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

  ledgers(param0: Address): System__ledgersResult {
    let result = super.call(
      "ledgers",
      "ledgers(address):(bytes32,bytes32,address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new System__ledgersResult(
      result[0].toBytes(),
      result[1].toBytes(),
      result[2].toAddress()
    );
  }

  try_ledgers(param0: Address): ethereum.CallResult<System__ledgersResult> {
    let result = super.tryCall(
      "ledgers",
      "ledgers(address):(bytes32,bytes32,address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new System__ledgersResult(
        value[0].toBytes(),
        value[1].toBytes(),
        value[2].toAddress()
      )
    );
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

  getAccountHolder(accountCreator: Address): Address {
    let result = super.call(
      "getAccountHolder",
      "getAccountHolder(address):(address)",
      [ethereum.Value.fromAddress(accountCreator)]
    );

    return result[0].toAddress();
  }

  try_getAccountHolder(accountCreator: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAccountHolder",
      "getAccountHolder(address):(address)",
      [ethereum.Value.fromAddress(accountCreator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAccountLedger(accountHolder: Address): Address {
    let result = super.call(
      "getAccountLedger",
      "getAccountLedger(address):(address)",
      [ethereum.Value.fromAddress(accountHolder)]
    );

    return result[0].toAddress();
  }

  try_getAccountLedger(accountHolder: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAccountLedger",
      "getAccountLedger(address):(address)",
      [ethereum.Value.fromAddress(accountHolder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLedgerAccount(accountLedger: Address): Address {
    let result = super.call(
      "getLedgerAccount",
      "getLedgerAccount(address):(address)",
      [ethereum.Value.fromAddress(accountLedger)]
    );

    return result[0].toAddress();
  }

  try_getLedgerAccount(accountLedger: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLedgerAccount",
      "getLedgerAccount(address):(address)",
      [ethereum.Value.fromAddress(accountLedger)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAccountHolders(accountCreator: Address): Array<Address> {
    let result = super.call(
      "getAccountHolders",
      "getAccountHolders(address):(address[])",
      [ethereum.Value.fromAddress(accountCreator)]
    );

    return result[0].toAddressArray();
  }

  try_getAccountHolders(
    accountCreator: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getAccountHolders",
      "getAccountHolders(address):(address[])",
      [ethereum.Value.fromAddress(accountCreator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getAccountLedgers(accountHolder: Address): Array<Address> {
    let result = super.call(
      "getAccountLedgers",
      "getAccountLedgers(address):(address[])",
      [ethereum.Value.fromAddress(accountHolder)]
    );

    return result[0].toAddressArray();
  }

  try_getAccountLedgers(
    accountHolder: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getAccountLedgers",
      "getAccountLedgers(address):(address[])",
      [ethereum.Value.fromAddress(accountHolder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getLedgerAccounts(accountLedger: Address): Array<Address> {
    let result = super.call(
      "getLedgerAccounts",
      "getLedgerAccounts(address):(address[])",
      [ethereum.Value.fromAddress(accountLedger)]
    );

    return result[0].toAddressArray();
  }

  try_getLedgerAccounts(
    accountLedger: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getLedgerAccounts",
      "getLedgerAccounts(address):(address[])",
      [ethereum.Value.fromAddress(accountLedger)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getHolderDetails(holder: Address): System__getHolderDetailsResult {
    let result = super.call(
      "getHolderDetails",
      "getHolderDetails(address):(bytes32,address)",
      [ethereum.Value.fromAddress(holder)]
    );

    return new System__getHolderDetailsResult(
      result[0].toBytes(),
      result[1].toAddress()
    );
  }

  try_getHolderDetails(
    holder: Address
  ): ethereum.CallResult<System__getHolderDetailsResult> {
    let result = super.tryCall(
      "getHolderDetails",
      "getHolderDetails(address):(bytes32,address)",
      [ethereum.Value.fromAddress(holder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new System__getHolderDetailsResult(
        value[0].toBytes(),
        value[1].toAddress()
      )
    );
  }

  getLedgerDetails(_ledger: Address): System__getLedgerDetailsResult {
    let result = super.call(
      "getLedgerDetails",
      "getLedgerDetails(address):(bytes32,bytes32)",
      [ethereum.Value.fromAddress(_ledger)]
    );

    return new System__getLedgerDetailsResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getLedgerDetails(
    _ledger: Address
  ): ethereum.CallResult<System__getLedgerDetailsResult> {
    let result = super.tryCall(
      "getLedgerDetails",
      "getLedgerDetails(address):(bytes32,bytes32)",
      [ethereum.Value.fromAddress(_ledger)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new System__getLedgerDetailsResult(value[0].toBytes(), value[1].toBytes())
    );
  }

  getAccountDetails(_account: Address): System__getAccountDetailsResult {
    let result = super.call(
      "getAccountDetails",
      "getAccountDetails(address):(bytes32,bytes32)",
      [ethereum.Value.fromAddress(_account)]
    );

    return new System__getAccountDetailsResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getAccountDetails(
    _account: Address
  ): ethereum.CallResult<System__getAccountDetailsResult> {
    let result = super.tryCall(
      "getAccountDetails",
      "getAccountDetails(address):(bytes32,bytes32)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new System__getAccountDetailsResult(
        value[0].toBytes(),
        value[1].toBytes()
      )
    );
  }

  confirmAccountHolder(_accountHolder: Address): boolean {
    let result = super.call(
      "confirmAccountHolder",
      "confirmAccountHolder(address):(bool)",
      [ethereum.Value.fromAddress(_accountHolder)]
    );

    return result[0].toBoolean();
  }

  try_confirmAccountHolder(
    _accountHolder: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "confirmAccountHolder",
      "confirmAccountHolder(address):(bool)",
      [ethereum.Value.fromAddress(_accountHolder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _ledger(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _holder(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _client(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _viaFactory(): Address {
    return this._call.inputValues[4].value.toAddress();
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

export class CreateHolderCall extends ethereum.Call {
  get inputs(): CreateHolderCall__Inputs {
    return new CreateHolderCall__Inputs(this);
  }

  get outputs(): CreateHolderCall__Outputs {
    return new CreateHolderCall__Outputs(this);
  }
}

export class CreateHolderCall__Inputs {
  _call: CreateHolderCall;

  constructor(call: CreateHolderCall) {
    this._call = call;
  }

  get _holderName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _accountHolder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateHolderCall__Outputs {
  _call: CreateHolderCall;

  constructor(call: CreateHolderCall) {
    this._call = call;
  }
}

export class CreateLedgerCall extends ethereum.Call {
  get inputs(): CreateLedgerCall__Inputs {
    return new CreateLedgerCall__Inputs(this);
  }

  get outputs(): CreateLedgerCall__Outputs {
    return new CreateLedgerCall__Outputs(this);
  }
}

export class CreateLedgerCall__Inputs {
  _call: CreateLedgerCall;

  constructor(call: CreateLedgerCall) {
    this._call = call;
  }

  get _ledgerName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _ledgerGroup(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _accountCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _accountHolder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateLedgerCall__Outputs {
  _call: CreateLedgerCall;

  constructor(call: CreateLedgerCall) {
    this._call = call;
  }
}

export class CreateAccountCall extends ethereum.Call {
  get inputs(): CreateAccountCall__Inputs {
    return new CreateAccountCall__Inputs(this);
  }

  get outputs(): CreateAccountCall__Outputs {
    return new CreateAccountCall__Outputs(this);
  }
}

export class CreateAccountCall__Inputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get _accountName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _currency(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _accountCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _accountHolder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateAccountCall__Outputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }
}
