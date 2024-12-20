## Type Aliases

### CustomString

```ts
type CustomString = string;
```

***

### Integrity

```ts
type Integrity = `sha512-${string}`;
```

## Functions

### asIntegrity()

```ts
function asIntegrity(i): `sha512-${string}`
```

#### Parameters

##### i

`unknown`

#### Returns

\`sha512-$\{string\}\`

***

### assertIntegrity()

```ts
function assertIntegrity(i): asserts i is `sha512-${string}`
```

#### Parameters

##### i

`unknown`

#### Returns

asserts i is \`sha512-$\{string\}\`

***

### assertString()

```ts
function assertString(i): asserts i is string
```

#### Parameters

##### i

`unknown`

#### Returns

`asserts i is string`

***

### asString()

```ts
function asString(i): string
```

#### Parameters

##### i

`unknown`

#### Returns

`string`

***

### isIntegrity()

```ts
function isIntegrity(i): i is `sha512-${string}`
```

#### Parameters

##### i

`unknown`

#### Returns

i is \`sha512-$\{string\}\`

***

### isString()

```ts
function isString(i): i is string
```

#### Parameters

##### i

`unknown`

#### Returns

`i is string`
