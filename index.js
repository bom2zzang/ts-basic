var 제목 = document.querySelector("#title");
// 제목.innerHTML = "안녕하세요"; > '제목'은(는) 'null'일 수 있습니다.ts(18047)
// 1. narrowing
if (제목 !== null) {
    제목.innerHTML = "안녕하세요";
}
// 2. instansof narrowing (BEST!)
if (제목 instanceof HTMLElement) {
    제목.innerHTML = "반갑소";
}
// 3. assertion
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "안녕하소";
// 4. optional chaining
var 제목3 = document.querySelector("#title");
if ((제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) != undefined) {
    제목3.innerHTML = "안녕하소";
}
// 5. strict설정 끄기
