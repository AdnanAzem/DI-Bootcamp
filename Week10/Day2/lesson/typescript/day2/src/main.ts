/** daily */

const validateUnionType = (value: any, allowedTypes: string[]): boolean => {
  for (const type of allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }
  return false;
};

const types: string[] = ["string", "number", "boolean"];

// console.log(validateUnionType({}, types));

/** functions */
// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// const multi = (a: number, b: number): number => {
//   return a * b;
// };

type Operation = (a: number, b: number) => number;

const sum: Operation = (a, b) => {
  return a + b;
};

const multi: Operation = (a, b) => {
  return a * b;
};

const divide: Operation = (a, b) => {
  if (b === 0) return -1;
  return a / b;
};

// console.log( divide(4, 0));

/** default parameters */
const addDefault = (a: number, b: number = 5): number => {
  return a + b;
};

/** optional parameter */
const addOptional = (a: number, b?: number): number => {
  /** type guard */
  // if( b === undefined) return a
  return a + (b || 0);
};

// addOptional(6)

/** function overload */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: boolean, b: boolean): number;
function add(
  a: number | string | boolean,
  b: number | string | boolean
): number | string | boolean {
  if (typeof a === "string" && typeof b === "string") return a + b + "";
  if (typeof a === "number" && typeof b === "number") return a + b;
  return -1;
}

// add(1, 1);
// add(1, "1");
// add("1", 1);
// add("1", "1");

/** never type */
const errorMessage = (msg: string): never => {
  throw new Error(msg);
};

const numberOrString = (value: number | string | boolean): string => {
  if (typeof value === "string") return "value is a string";
  if (typeof value === "number") return "value is a number";
  return errorMessage("value is not a number or a string");
};

// try {
//   console.log(numberOrString(true));
//   numberOrString(1);
// } catch (error) {
//   console.log(error);
// }
/** void type */
// const voidFunction = () => {
//   console.log("hi");
// };

// function listner(){
//   while(true){
//     console.log('hi');
//   }
// }

/** Assertions Or Casting */
/** as or < > */

type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "abc";
let b = a as Two;
b = "cde";
b = 1;

let c = a as Three;
c = "hello";

// let d = <One>"abc"
// let e = <Two>123
// let f = <Three>"hello"

/** Dom elements */
// const myImg = document.querySelector("img");
// if(myImg) myImg.src = '...'

/** not null */
// const myImg2 = document.querySelector('img')!
// myImg2.src = '...'

// const myImg3 = document.querySelector('img') as HTMLImageElement
// myImg3.src = '...'

// const myImg4 = <HTMLImageElement>document.querySelector('img')

// const year = <HTMLSpanElement>document.getElementById("year")
// const year: HTMLSpanElement = document.getElementById('year')!
// const thisYear: string = new Date().getFullYear().toString()
// year ? year.textContent = thisYear : null;

/** Classes */
/** access modifiers
 * public - anywhere
 * protected - within the class and subclass
 * private - within the class
 */

class User {
  public readonly name: string;
  private age: number;
  protected active: boolean;

  constructor(name: string, age: number, active: boolean) {
    this.name = name;
    this.age = age;
    this.active = active;
  }

  getAge(): number {
    //.. from manager and up
    return this.age;
  }
  setAge(val: number): void {
    //.. only admin can set the age
    this.age = val;
  }
  // setName(val: string): void {
  //   this.name = val
  // }
}

const num1 = 1

// const user1 = new User("John", 25, true);

// console.log(user1.name);
// user1.name = "Dan";
// console.log(user1.active);

// console.log(user1.getAge());

class Student extends User {
  constructor(name: string, age: number, active: boolean) {
    super(name, age, active);
  }

  getStudentAge(): string {
    return this.name + " is " + this.getAge() + " years old";
  }

  isStudentActive(): string {
    return this.name + " is " + this.active;
  }
}

// const stud1 = new Student('Anne', 26, true)
// console.log(stud1.isStudentActive());
// stud1.name = 'Marry'
// console.log(stud1.name);

class MyUser {
  public _name: string;
  public _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }
  set name(val: string) {
    this._name = val;
  }
  get age(): number {
    return this._age;
  }
  set age(val: number) {
    this._age = val;
  }

  getName(): string {
    return this._name;
  }
}


const u1 = new MyUser('John', 23);
u1.name
u1.getName()
/**  */
