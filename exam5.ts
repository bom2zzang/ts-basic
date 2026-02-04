type AType = {
  a: number;
  b: string;
};
type BType = {
  a: number;
  b: string;
  c: boolean;
};
type ABType = AType & BType;

const ab: ABType = {
  a: 1,
  b: "2",
  c: true,
};

type CType = {
  color?: string;
  size: number;
  readonly position: number[];
};

type DType = { name: string; phone: number; email: string };

type EType = DType & { minor: boolean };
