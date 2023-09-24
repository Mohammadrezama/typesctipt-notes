type TypedPerson = {
  name: string;
  age: number;
  greet: (phrase: string) => void;
};

type AddfuncTyped = (a: number, b: number) => void;

const usert: TypedPerson = {
  name: "user",
  age: 18,
  greet(phrase) {
    console.log(phrase + "" + this.name);
  },
};
console.log(user.greet("hey"));
