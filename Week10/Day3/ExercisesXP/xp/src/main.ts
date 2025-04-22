// 🌟 Exercise 1: Intersection Types
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "New York",
};

console.log(personWithAddress);

// 🌟 Exercise 2: Type Guards with Union Types
type NumOrString = number | string;
const describeValue = (value: NumOrString): string => {
  if (typeof value === "string") return `This is a string`;
  if (typeof value === "number") return `This is a number`;
  return "This is an unexpected type";
};

console.log(describeValue("Hello"));
console.log(describeValue(42));

// 🌟 Exercise 3: Type Casting
let someValue: any = "123";
someValue as string;
console.log(typeof someValue); // string

// 🌟 Exercise 4: Type Assertions with Union Types
const getFirstElement = (arr: (string | number)[]): string => {
  const firstElement = arr[0] as string;
  return firstElement;
};

console.log(getFirstElement(["a", 2, "3"]));
console.log(getFirstElement([1, "a", 3]));
console.log(getFirstElement([]));

// 🌟 Exercise 5: Generic Constraints
const logLength = <T extends { length: number }>(value: T): number => {
  return value.length;
};

console.log(logLength("Hello"));
console.log(logLength([1, 2, 3]));

// 🌟 Exercise 6: Intersection Types and Type Guards
// comment this because I define it in the exercise 1
// type Person = {
//   name: string;
//   age: number;
// };

type Job = {
  position: 'Manager' | 'Developer';
  department: string;
};

type Employee = Person & Job;

const describeEmployee= (employee: Employee): string => {
  return `${employee.name} is a ${employee.position} in the ${employee.department} department`;
};

console.log(describeEmployee({ name: "John Doe", age: 30, position: "Manager", department: "Sales" }));


// 🌟 Exercise 7: Type Assertions and Generic Constraints
const formatInput = <T extends { toString(): string }>(input: T): string => {
  return input.toString() as string;
}

console.log(typeof formatInput(123), formatInput(123));       
console.log(typeof formatInput(true), formatInput(true));      
console.log(typeof formatInput("hello"), formatInput("hello"));   