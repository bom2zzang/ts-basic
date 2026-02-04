function 정리(arr: (number | string)[]): number[] {
  let result: number[] = [];
  arr.forEach((el) => {
    if (typeof el === "string") {
      result.push(parseInt(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function 마지막과목(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "x";
  }
}
