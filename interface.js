"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // it can has other properties or methods but it should have the greetable defined methodes and properties
        this.height = 180;
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
const user = {
    name: "user",
    age: 18,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
console.log(user.greet("hey"));
