# TypeScript

## 설치 및 사용

### 설치

```
$ npm install -g typescrtipt
```

### 사용

- .ts 파일을 만들고 타입스크립트 사용

### 자바스크립트 컴파일

웹브라우저는 타입스크립트를 읽을 수 없기 때문에
자바스크립트로 변환하는 작업이 필요하다

```
$ tsc -w
```

### 컴파일 옵션

tsconfig.json

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
    }
}
```

## 기본 문법

### 변수에 타입 지정

```
let 이름 :string = 'Lee';
이름 = 123 // error
```

### array, object

```
let 이름들 :string[] = ['Kim', 'Choi'];
let 나이 :{ age : number } = { age : number };
```

### Union Type : | 기호를 이용해 or 연산자를 표현

```
let 이름 :string | number = 'Lee'
```

### 타입을 변수에 담아 사용

```
type NameType = string; // 타입변수이름은 대문자로
let 이름 :NameType = 'Lee';
```

### Literal type

```
type NameType = 'Lee' | 'Kim'; // Lee 또는 Kim만 가능
let 이름 :NameType = 'Lee';
```

### 함수 : 리턴이 없는지 체크하려면 return 타입을 void로 설정

```
function 함수명(x :number) :number{
    return x+2;
}
```

### Narrowing : 파라미터 타입 별 함수 동작을 다르게 하는 방법

```
function 함수명(x :number | string) {
  if (typeof x === 'number'){
    return x * 2
  }
}
```

### Assertion : 어떤 변수나 파라미터타입을 임의로 변경

```
function 함수명 (x :number | string){
  return (x as number) + 1;
  // as : as 앞의 변수의 타입을 as 뒤의 타입으로 지정해주는 키워드
}
```

### Tuple : Array자료 안에 순서와 자료형을 정확히 지정하고 싶을 때 사용

```
type Member = [number, boolean];
let bom:Member = [100, true];
```

### Object 타입 정의

```
type User = {
    name? : string, // ? : 속성이 선택 사항인 경우
    age: number
}
let bom:User = {
    name: 'Lee',
    age: 11
}
```

### Index Signature : object안에 어떤 속성이 들어갈지 모를때 한번에 타입 지정

```
type Obj = {
    [key :string] : number,
}
let 사과 = {
    칼로리 : 20,
    당 : 10,
    탄수화물 : 3
}
```

### Class 타입 설정

```
class User {
    name;
    constructor(name :string){
        this.name = name;
    }
}
```

## 컴파일 세부 설정 : tsconfig

[참고](https://www.typescriptlang.org/tsconfig/)

```
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기
 }
}
```

## 타입 자동 부여

타입스크립트는 자동으로 변수에 타입을 씌워줌  
타입지정 문법 생략 가능

## 타입 미리 정하기 애매할 때

### Union Type

```
let 이름: string | number = 'Lee';
let 나이: (string | number) = 100;
```

- | : or 연산자
- 할당하는 순간 타입은 string 또는 number로 변함

### Any Type

```
let 이름 :any = 'Lee';
이름 = 111;
이름 = [];
```

- 모든 자료형을 허용해줌 : 타입실드 해제문법

### Unknown Type

```
let 이름 :unknown;

//error - any는 오류가 안남
이름 - 1 // unknown은 number타입이 아니므로 오류 발생
let a1 :string = 이름;
let a2 :boolean = 이름;
let a3 :number = 이름;
이름[0];
이름.data;
```

- 모든 자료형을 다 집어넣을 수 있음(any와 비슷함)
- 자료형을 넣어도 타입은 그대로 `unknown`

## 함수에 타입 지정 & void 타입

### 함수 타입 지정 위치

```
function 함수(x :number) :number {
  return x * 2;
}
```

1. 파라미터 : 파라미터 옆
2. 리턴 값 : 함수명() 우측

### void : 리턴할 자료가 없는 함수의 타입

```
function 함수(x :number) :void {
  return x * 2; // error
}
```

### 파라미터가 옵션

```
function 함수(x? :number) :void {
}

함수();
```

- `x? :number`는 `x : number | undefined`와 같음

## 타입 확정하기 Narrowing & Assertion

### Type Narrowing

```
function 함수(x :number | string){
  if (typeof x === 'number') {
    return x + 1
  }
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}
```

- 현재 파라미터의 타입을 검사
- 타입이 확실하지 않을 때 생기는 부작용을 막기위한 장치
- Narrowing으로 판정해주는 문법
  - typeof 변수
  - 속성명 in 오브젝트자료
  - 인스턴스 instanceof 부모
- 마지막 else가 없으면 에러가 남
  - tsconfig.json에 "noImplicitReturns": false 추가하면 됨

### Type Assertion

```
function 함수(x :number | string){
    return (x as number) + 1;
}

함수('12'); // 결과 : '121'
```

- union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할
- 무슨 타입이 들어올지 100% 확실할 때 사용해야 함
- 실제로 타입이 바뀌는 것은 아님

## Type Aliases (별칭) & readonly

### Type Aliases (별칭)

```
type Animal = { name: string, age: number };
let 동물 : Animal = { name: 'Kim', age: 20 };
```

- 복잡하고 긴 타입은 변수에 담아 쓸 수 있음
- type 타입변수명 = 타입종류;
  - 타입변수명은 관습적으로 대문자로 시작

### readonly

```
const 출생지 = '서울';
출생지 = '울산'; // const 변수 오류
```

- const 변수는 재할당시 오류가 발생함

```
const 사람 = {
  출생지 : '서울'
};
사람.출생지 = '울산' // const 변수지만 오류x
```

- const 변수는 재할당만 막아줄 뿐, 그 안에 있는 object 속성 바꾸는 것 까지 관여하지 않음
- object 속성을 바뀌지 않게 막고 싶다면?

```
type PersonType = {
  readonly 출생지: string,
}

let 사람:PersonType= {
  출생지 : '서울';
}
사람.출생지 = '울산'; // readonly 속성으로 오류 발생
```

### 속성 선택값

```
type PersonType = {
  name: string,
  age?: number,
}
```

- 속성이 선택사항이라면 물음표 연산자 추가
- 물음표는 `undefined`타입도 가질 수 있다는 뜻

### type 키워드 합치기

```
type Name = string;
type Age = number;
type NewOne = Name | Age;
```

- OR연산자를 이용한 Union type

```
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 }
```

- &기호를 이용한 속성 합치기

### type 키워드 재정의 불가

## Literal Types

- 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입

### Literal Types 만들기

```
// 변수
let 성별 = '여자' | '남자';
성별 = '여자';

// 함수
function sayHello(a:'hello'):1:0{
  // hello만 파라미터로 넣을 수 있음
  return 1;
  // 1 또는 0만 return 할 수 있음
}
```

### as const

```
var 자료 = {
  name = 'kim'
}

function 함수(a:'kim'){

}
함수(자료.name); // 자료.name은 string 타입이지 'kim'타입이 아니기 때문에 오류 발생
```

- obejct를 만들 때 타입을 미리 정하기
- assertion 사용 ( as 'kim' )
- as const 사용

```
var 자료 = {
  name = 'kim'
} as const
```

- as const의 효과
  - 타입을 object의 value로 바꿔줌
  - object안 속성을 readonly로 바꿔줌

## 함수와 methods에 type alias 지정

### function type 저장

```
type FuncType = ( a:number ) => number;
let 함수 :FuncType = function(a){
  return a+1;
}
```

### method안에 타입 지정

## 타입스크립트로 HTML변경과 조작시 주의점

### document.getElementById()

- tsconfig.json
  ```
  // 추가 - null타입 엄격하게 체크
  'strictNullChecks': true;
  ```

## rest 파라미터

```
   function fn1(...a:number[]){
    console.log(a);
   }
   fn1(1,2,3,4,5);
```

- rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있음
- rest 파라미터에 집어넣은 값들은 전부 []에 담김

## spread operator

```
  let arr = [2,3,4];
  let arr2 = [5,6];
  let arr3 = [...arr, arr2]; // 2,3,4,5,6
```

- array 혹은 obejct의 괄호를 벗기고 싶을 때 사용

## Destructuring

```
  let {student, age} = {student:true, age:20};
  let [a, b] = ['hello',22];
```

- 변수를 빠르고 쉽게 뺄 수 있도록 도와주는 문법
- object를 destructuring 때 변수이름을 속성이름과 맞춰주는게 편리함
- array destructuring은 변수 이름 마음대로 작명 가능

### destructuring 함수 파라미터로 사용

```
  function fn1({student, age}){
    console.log(student, age);
  }
```
# ts-basic
