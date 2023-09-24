"use strict";
// it is useful when we want to tell ts that we make are sure that the value never yilds null
const userInput = document.getElementById("user-input");
// the type is either html elemtn or null so if we want to access the value ts does not know that this is a input element so it will throw an error when we want to access to the value
const userInput2 = document.getElementById("user-input");
// !this will tell that we are sure that it is not null
const userInput3 = document.getElementById("user-input");
console.log(userInput3.value);
//same approac
const userInput4 = document.getElementById("user-input");
console.log(userInput4.value);
// another approach when we we are not sure the input is existed or not
if (userInput) {
    let value = userInput.value;
    console.log(value);
}
