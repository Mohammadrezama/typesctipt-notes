// it is ther to check the types in the run time
// they are just combining text together

type Adm2 = {
  name: string;
  privileges: string[];
};

type Emp2 = {
  name: string;
  startDate: Date;
};

type ElevatedEmp2 = Adm2 & Emp2;
type Combinable2 = number | string;
type Numeric2 = number | boolean;

let goalNumbers: Numeric2 = 4;
// this is also typeGuard
if (typeof goalNumbers === "number") {
  console.log(`the number of goal number is ${goalNumbers}`);
}
type Universal2 = Combinable & Numeric;
// in case of types it will merge the common type but for object it will merge all the types together
type unKnownEmp = Adm2 | Emp2;

function logUnknownEmployee(emp: unKnownEmp): void {
  // this is type gaurd
  if ("startDate" in emp) {
    console.log(`the start date is ${emp.startDate}`);
  }
  if ("privileges" in emp) {
    console.log(`list of priviledges ${emp.privileges.join("")}`);
  }
}

let theUnkEmp: unKnownEmp = {
  name: "ehtesham",
  startDate: new Date(),
};

let thePriviledgedEmp: unKnownEmp = {
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

  loadCargo(amount: number) {
    console.log("loading  cargo...  " + amount);
  }
}

type Vehicle = Car | Truck;
let carSmp = new Car();
let truckSam = new Truck();
// type guard for
function useVehicle(vehicle: Vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(5);
  }
  if (vehicle instanceof Car) {
    vehicle.drive();
  }
}

useVehicle(truckSam);
useVehicle(carSmp);
