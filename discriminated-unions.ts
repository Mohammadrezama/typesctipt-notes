// it is the better approach alternative to type-guards

interface Bird {
  type: "bird";
  flayingSpeend: number;
}

interface Horse {
  type: "horse";
  speed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log(animal.flayingSpeend);
      break;
    case "horse":
      console.log(animal.speed);
  }
}
