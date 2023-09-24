// interface can be used inside the class
// It is good for  shape of the object as well
// interfaces are pure typescript features
interface Named {
  readonly name?: string;
  dummy?(): void;
}

// type based function types are more common
interface Addfunc {
  (a: number, b: number): void;
}

interface Greetable extends Named {
  age: number;
  greet: (phrase: string) => void;
}

class Person implements Greetable {
  // it can has other properties or methods but it should have the greetable defined methodes and properties
  height = 180;
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

const user: Greetable = {
  name: "user",
  age: 18,
  greet(phrase) {
    console.log(phrase + "" + this.name);
  },
};
console.log(user.greet("hey"));
