/** type number */
let num: number = 1;
// num = 2
// num = "a"

/** type string */
let str: string;
str = "abc";
// str = 1

/** type boolean */
let bol: boolean = true;
bol = false;
// bol = 0

/** type any - try not to use much as posible */
let a: any;
a = 0;
a = "a";
a = true;

/** union type */
let myStrNum: string | number | boolean = "abc";
myStrNum = "abc";
myStrNum = 1;
myStrNum = true;

/** type array */
let srtArr: string[] = ["a", "b", "c"];
srtArr.push("string");
// srtArr.push(1);

let strNumArr: (string | number)[] = ["a", 4];

/** type Tuple */
type tupleT = [string, number, string];

/** type object */
let myObj: object = {};
myObj = [];

// const user = {
//     name: 'John',
//     age: 25
// }

// user.name = 'dan'
// user.age = 13
// user.email = 'aaa@aaa.aaa'

type User = {
  name: string;
  age: number;
  gender?: string | number;
};

const userJohn: User = {
  name: "John",
  age: 23,
  gender: 0,
};

const userMarry: User = {
  name: "Marry",
  age: 25,
};

type newUser = User | string;

/** type / interface */
interface UserI {
  name: string;
  age: number;
  gender?: string | number;
}

const userDan: UserI = {
  name: "Dan",
  age: 11,
};

/** type Enum */
enum Grade {
  U = "60",
  D = "70",
  C = "80",
  B = "90",
  A = "100",
}
console.log(Grade);

/** type literal */
type status = "failed" | "loading" | "success";

let statuscode: status;

statuscode = "loading";

/** type Aliases */
type NumberOrString = number | string | null;
type NumberOrStringOrBollean = NumberOrString | boolean;

type UserT = {
  name: NumberOrString;
};

type Gender = "male" | "female" | "other";

type Student = {
  name: string;
  grade: Grade;
  gender: Gender;
  status: status;
};

let stud1: Student = {
  name: "a",
  grade: Grade.C,
  gender: "female",
  status: "success",
};

