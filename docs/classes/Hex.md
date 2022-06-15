[@nbsolutions/hex - v1.0.4](../README.md) / [Exports](../modules.md) / Hex

# Class: Hex

## Table of contents

### Methods

- [expand](Hex.md#expand)
- [fromString](Hex.md#fromstring)
- [isHex](Hex.md#ishex)
- [normalize](Hex.md#normalize)
- [toString](Hex.md#tostring)

## Methods

### expand

▸ `Static` **expand**(`hex`): `string`

Expands shortform hex into it's full form.

**`example`**
```typescript
Hex.expand("#F0F"); // "FF00FF"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[Hex.ts:65](https://github.com/nbsolutions-ca/hex-js/blob/4387956/src/Hex.ts#L65)

___

### fromString

▸ `Static` **fromString**(`hex`): `number`

Returns the numerical number represented by the given hex.
The hex string can be prefixed with a `#` or `0x` character.

**`example`**
```typescript
Hex.fromString("#FF"); // 255
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`number`

#### Defined in

[Hex.ts:49](https://github.com/nbsolutions-ca/hex-js/blob/4387956/src/Hex.ts#L49)

___

### isHex

▸ `Static` **isHex**(`hex`): `boolean`

Returns true if string is a valid hex

**`example`**
```typescript
Hex.isHex("F"); // true
Hex.isHex("Z"); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`boolean`

#### Defined in

[Hex.ts:92](https://github.com/nbsolutions-ca/hex-js/blob/4387956/src/Hex.ts#L92)

___

### normalize

▸ `Static` **normalize**(`hex`): `string`

Normalizes hex strings by removing the prefix "0x" or "#" notation.

**`example`**
```typescript
Hex.normalize("0xFF"); // "FF"
Hex.normalize("#FF");  // "FF"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[Hex.ts:118](https://github.com/nbsolutions-ca/hex-js/blob/4387956/src/Hex.ts#L118)

___

### toString

▸ `Static` **toString**(`hex`, `bits?`): `string`

Consumes the number and returns a string of hex symbols.

**`example`**
```typescript
Hex.toString(0x00FF); // "FF"
Hex.toString(0x00FF, 4); // "00FF"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `number` |
| `bits?` | `number` |

#### Returns

`string`

#### Defined in

[Hex.ts:19](https://github.com/nbsolutions-ca/hex-js/blob/4387956/src/Hex.ts#L19)
