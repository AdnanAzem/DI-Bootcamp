// 🌟 Exercise 1: Hello, World! Program
console.log("Hello, World!");

// 🌟 Exercise 2: Type Annotations
let age: number = 23;
let name: string = "Adnan";
console.log(`My name is ${name} and I'm ${age} years old.`);

// 🌟 Exercise 3: Union Types
let id: string | number = "1";
console.log(id);

// 🌟 Exercise 4: Control Flow with if...else
const isPositive = (number: number): string => {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
};
console.log(isPositive(-2));

// 🌟 Exercise 5: Tuple Types
const getDetails = (name: string, age: number): [string, number, string] => {
  let message: string = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
};

const details = getDetails("Alice", 25);
console.log(details);

// 🌟 Exercise 6: Object Type Annotations
type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person = createPerson("Adnan", 23);
console.log(person);

// 🌟 Exercise 7: Type Assertions
const element = document.getElementById("myInput");
const inputElement = element as HTMLInputElement;

inputElement.value = "Hello, TypeScript!";
inputElement.focus();

// 🌟 Exercise 8: switch Statement with Complex Conditions
const getAction = (role: string) => {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
};

console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

// 🌟 Exercise 9: Function Overloading with Default Parameters
function greet(name: string): string;
function greet(): string;

function greet(name: string = 'Adnan'): string {
  return `Hello, ${name}!`;
}

console.log(greet()); 
console.log(greet('John')); 

