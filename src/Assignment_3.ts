//one

// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName: () => {};
}

// Do Not Edit The Code Below
let user_3: Member = {
  // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() {
    // 'getName' does not exist in type 'Member'
    return this.username;
  },
};

user_3.id = 200;
user_3.id = "200"; // Type 'string' is not assignable to type 'number'
user_3.state = false; // Cannot assign to 'state' because it is a read-only property

//Two
// Create Interface Here
interface Client {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice: (price: number) => {};
}
// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  },
};

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

//Three

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}
interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}
let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton",
};

//four
// Create Class Here

class Player {
  name: string;
  type: string;
  level: number | string;
  VIP?: boolean;
  constructor(
    name: string,
    type: string,
    level: number | string,
    VIP?: boolean
  ) {
    (this.name = name),
      (this.type = type),
      (this.level = level),
      (this.VIP = VIP);
  }
  details() {
    let statement: string = "";
    if (this.VIP) {
      statement = "VIP";
    }
    console.log(
      `${statement} ${this.name}, Type Is ${this.type} Level Is ${this.level} `
    );
  }
}

// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

//five

class Shorten {
  constructor(
    public id: number,
    public username: string,
    protected title: string
  ) {
    this.id = id;
    this.username = username;
    this.title = title;
  }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

//six
class Show {
  public get title_1(): string {
    return this._title;
  }
  public set title_1(value: string) {
    this._title = value;
  }
  constructor (private _title: string) {
    this._title = _title
  }
}

let tester_2 = new Show("Elzero");

console.log(tester_2.title_1); // Property 'title' does not exist on type 'Show'
tester_2.title_1 = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester_2.title_1); // Property 'title' does not exist on type 'Show'

//Seven 

interface Play_2 {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player_2 implements Play_2{
  constructor(public id:number, public title:string, public level:number|string){

  }
  logIn(): void {
    console.log("Logged In");
  }
  logOut(_msg: string): void {
    console.log("Logged out, Good Bye");
  }
   
}

let player1_2 = new Player_2(100, "Elzero", 95);

console.log(player1_2.id); // 100
console.log(player1_2.title); // "Elzero"
console.log(player1_2.level); // 95
player1_2.logIn(); // Logged In
player1_2.logOut("Good Bye"); // Logged Out, Good Bye