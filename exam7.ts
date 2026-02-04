// rest parameter
function 함수(...a: (number | string)[]) {
  console.log(a);
}

함수(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hello");

// spread operator
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];
let arr3 = [...arr, ...arr2];

// destructuring
let [변수1, 변수2] = [100, 200];
let { student: student, teacher: teacher } = { student: true, teacher: 20 };
let 오브젝트 = { student: true, teacher: "kim" };

function 함수2({ student, teacher }: { student: boolean; teacher: string }) {
  console.log(student, teacher);
}
함수2(오브젝트);

// 숙제1
function catchMax(...numbers: number[]): number {
  let max = 0;
  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

// 숙제2
function destructuringFn({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}

// destructuringFn({user: "kim", comment: [3,5,4], admin: false});

// 숙제3
type Arr1 = (number | string | boolean)[];

function arrayDestructuring([a, b, c]: Arr1): void {
  console.log(a, b, c);
}
