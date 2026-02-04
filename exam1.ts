let 이름 = "봄";
let 나이 = 35;
let 출생지 = "울산";

type 노래 = {
  제목: string;
  가수: string;
};

let 좋아하는노래: 노래 = {
  제목: "나항상그대를",
  가수: "이선희",
};

type ProjectType = {
  member: string[];
  days: number;
  started: boolean;
};

let project: ProjectType = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
