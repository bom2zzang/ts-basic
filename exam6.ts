function game(param: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

type MemberInfo = {
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: MemberInfo = {
  age: 12,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

type CutType = (value: string) => string;
const cutZero: CutType = (value) => {
  return value.replace(/^0+/, "");
};

type RemoveDashType = (value: string) => number;
const regmoveDash: RemoveDashType = (value: string) => {
  return Number(value.replace(/-/g, ""));
};

type CustomFunctionType = (
  phone: string,
  cutZero: CutType,
  regmoveDash: RemoveDashType
) => number;
const customFunction: CustomFunctionType = (phone, cutZero, regmoveDash) => {
  const cutPhone = cutZero(phone);
  const removeDash = regmoveDash(cutPhone);
  return removeDash;
};
