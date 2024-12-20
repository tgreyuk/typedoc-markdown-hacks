type Delimiter = "·";

type Id =
  | `${"" | "git"}${Delimiter}${string}${Delimiter}${string}${Delimiter}${string}`
  | `${"" | "git"}${Delimiter}${string}${Delimiter}${string}`
  | `${"file" | "remote" | "workspace"}${Delimiter}${string}${Delimiter}${string}`
  | `${"file" | "remote" | "workspace"}${Delimiter}${string}`;

type Type = "dev" | "optional" | "peer" | "peerOptional" | "prod";

type Key = `${Id} ${string}`;

type Value = `${Type} ${Id | "MISSING"}`;

export type LongIndexSignature = {
  [key: Key]: Value;
};
