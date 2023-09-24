// they are just combining text together

type Adm = {
  name: string;
  privileges: string[];
};

type Emp = {
  name: string;
  startDate: Date;
};

type ElevatedEmp = Adm & Emp;
const emp: ElevatedEmp = {
  name: "john",
  privileges: ["create-server"],
  startDate: new Date(),
};

interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}

interface EmployeEle extends Admin, Employee {}

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const uni: Universal = 232;

// in case of types it will merge the common type but for object it will merge all the types together
