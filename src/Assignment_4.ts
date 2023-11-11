// Do Not Edit
type numandstring = number | string;

abstract class Game_4 {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game_4 {
  constructor(title: string, public price: numandstring, public rate: number) {
    super(title, price);
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount(): string {
    return "Discount";
  }
}

class Action extends Game_4 {
  constructor(
    title: string,
    public price: numandstring,
    public rate: number,
    public company: string
  ) {
    super(title, price);
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount(): string {
    return "Discount";
  }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

//two
// Write Function Code Here
function showTypes<Type = undefined, Type2 = undefined, Type3 = undefined>(
  type_1?: Type,
  type_2?: Type2,
  type_3?: Type3
): string {
  return `${type_1} - ${type_2} - ${type_3}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

///Three
// Write Class Code Here
class game_5<T> {
  constructor(public title: T, public price: number) {}
  getDiscount<t>(val: t): void {
    console.log(`The Discount is ${val}`);
  }
}
// Do Not Edit Here
let gameOne_5 = new game_5<string>("Ys", 100);
let gameTwo_5 = new game_5<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne_5.title); // "Ys"
console.log(gameOne_5.price); // 100
gameOne_5.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo_5.title); // 2064
console.log(gameTwo_5.price); // 100
gameTwo_5.getDiscount(80); // "The Discount Is 80"
