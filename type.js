"use strict";
const usert = {
    name: "user",
    age: 18,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
console.log(user.greet("hey"));
