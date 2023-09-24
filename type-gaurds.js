"use strict";
// it is ther to check the types in the run time
// they are just combining text together
let goalNumbers = 4;
// this is also typeGuard
if (typeof goalNumbers === "number") {
    console.log(`the number of goal number is ${goalNumbers}`);
}
function logUnknownEmployee(emp) {
    // this is type gaurd
    if ("startDate" in emp) {
        console.log(`the start date is ${emp.startDate}`);
    }
    if ("privileges" in emp) {
        console.log(`list of priviledges ${emp.privileges.join("")}`);
    }
}
let theUnkEmp = {
    name: "ehtesham",
    startDate: new Date(),
};
let thePriviledgedEmp = {
    name: "parvin",
    privileges: ["web-server", "api"],
};
logUnknownEmployee(theUnkEmp);
logUnknownEmployee(thePriviledgedEmp);
class Car {
    drive() {
        console.log("driving ");
    }
}
class Truck {
    drive() {
        console.log("driving  a Truck ");
    }
    loadCargo(amount) {
        console.log("loading  cargo...  " + amount);
    }
}
let carSmp = new Car();
let truckSam = new Truck();
// type guard for
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(5);
    }
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
}
useVehicle(truckSam);
useVehicle(carSmp);
