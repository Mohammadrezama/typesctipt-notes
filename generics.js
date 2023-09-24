"use strict";
function identity(arg) {
    return arg;
}
// generic form
function identityG(arg) {
    return arg;
}
let outputt = identityG("myString");
//or the most common
let output = identityG("myString");
//While type argument inference can be a helpful tool to keep code shorter and more readable,
// you may need to explicitly pass in the type arguments as we did in the previous example
//when the compiler fails to infer the type, as may happen in more complex examples
function loggingIdentity(arg) {
    //for accesing length
    console.log(arg.length);
    return arg;
}
//alternative
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
