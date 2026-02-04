type Fish = { swim: string };
type Bird = { fly: string };

function animalMove(animal: Fish | Bird): void {
  if ("swim" in animal) {
    console.log(`Fish can swim: ${animal.swim}`);
  } else if ("fly" in animal) {
    console.log(`Bird can fly: ${animal.fly}`);
  }
}

let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log(날짜.getDate());
}

//비슷한 object타입엔 literal type을 넣으면 narrowing이 편해짐
type Car = { wheel: "4개" };
type Bike = { wheel: "2개" };
function move(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("Car move");
  }
}
