class User {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }

  changeFamilyName(newName: string) {
    this.familyName = newName;
  }
}

let user1 = new User("jj");
console.log(user1);
user1.changeFamilyName("park");

class Person {
  constructor(public name: string) {}
}
let p1 = new Person("kim");
console.log(p1);
