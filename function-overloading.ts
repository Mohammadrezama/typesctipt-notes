// TypeScript - Function Overloading
// TypeScript provides the concept of function overloading.
//  You can have multiple functions with the same name but different parameter types and return type.
// However, the number of parameters should be the same incase ther eis no optional parameter.
type Combinnable = string | number;

function toAdd(a: number, b: number): number;
function toAdd(a: string, b: string): string;
function toAdd(a: string, b: number): string;
function toAdd(a: number, b: string): string;
function toAdd(a: Combinnable, b: Combinnable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// so if we only define the function with cobinable return type woulod be combinable and we can not call call split
// becasue ts assume the return type combinable not string so we get error call .split on the return value

let value = toAdd("a", "b");
value.split("");
