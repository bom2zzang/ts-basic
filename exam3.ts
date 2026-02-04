function 인사(name?: string): void {
  if (typeof name === "string") {
    console.log("안녕하세요, " + name);
  } else {
    console.log("이름이 없습니다.");
  }
}

function 자릿수(val: number | string): number {
  return val.toString().length;
}

function 결혼확률(
  소득: number,
  자가: boolean,
  매력: "상" | "중" | "하"
): string | void {
  const 결혼점수 = 소득 + (자가 ? 500 : 0) + (매력 === "상" ? 100 : 0);
  if (결혼점수 > 600) {
    return "결혼가능";
  }
}
