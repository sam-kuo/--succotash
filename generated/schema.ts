// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get ticker(): string | null {
    let value = this.get("ticker");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ticker(value: string | null) {
    if (value === null) {
      this.unset("ticker");
    } else {
      this.set("ticker", Value.fromString(value as string));
    }
  }

  get logo(): string | null {
    let value = this.get("logo");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set logo(value: string | null) {
    if (value === null) {
      this.unset("logo");
    } else {
      this.set("logo", Value.fromString(value as string));
    }
  }

  get details(): string | null {
    let value = this.get("details");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set details(value: string | null) {
    if (value === null) {
      this.unset("details");
    } else {
      this.set("details", Value.fromString(value as string));
    }
  }
}

export class TokenBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenBalance", id.toString(), this);
  }

  static load(id: string): TokenBalance | null {
    return store.get("TokenBalance", id) as TokenBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get tokenBalance(): BigInt {
    let value = this.get("tokenBalance");
    return value.toBigInt();
  }

  set tokenBalance(value: BigInt) {
    this.set("tokenBalance", Value.fromBigInt(value));
  }

  get member(): string | null {
    let value = this.get("member");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set member(value: string | null) {
    if (value === null) {
      this.unset("member");
    } else {
      this.set("member", Value.fromString(value as string));
    }
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Member entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Member entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Member", id.toString(), this);
  }

  static load(id: string): Member | null {
    return store.get("Member", id) as Member | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get flags(): BigInt {
    let value = this.get("flags");
    return value.toBigInt();
  }

  set flags(value: BigInt) {
    this.set("flags", Value.fromBigInt(value));
  }

  get tokenBalances(): Array<string> | null {
    let value = this.get("tokenBalances");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokenBalances(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokenBalances");
    } else {
      this.set("tokenBalances", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Adapter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Adapter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Adapter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Adapter", id.toString(), this);
  }

  static load(id: string): Adapter | null {
    return store.get("Adapter", id) as Adapter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get adapterAddress(): Bytes {
    let value = this.get("adapterAddress");
    return value.toBytes();
  }

  set adapterAddress(value: Bytes) {
    this.set("adapterAddress", Value.fromBytes(value));
  }

  get acl(): BigInt {
    let value = this.get("acl");
    return value.toBigInt();
  }

  set acl(value: BigInt) {
    this.set("acl", Value.fromBigInt(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get adapterAddress(): Bytes {
    let value = this.get("adapterAddress");
    return value.toBytes();
  }

  set adapterAddress(value: Bytes) {
    this.set("adapterAddress", Value.fromBytes(value));
  }

  get flags(): BigInt {
    let value = this.get("flags");
    return value.toBigInt();
  }

  set flags(value: BigInt) {
    this.set("flags", Value.fromBigInt(value));
  }
}
