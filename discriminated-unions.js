"use strict";
// it is the better approach alternative to type-guards
function moveAnimal(animal) {
    switch (animal.type) {
        case "bird":
            console.log(animal.flayingSpeend);
            break;
        case "horse":
            console.log(animal.speed);
    }
}
