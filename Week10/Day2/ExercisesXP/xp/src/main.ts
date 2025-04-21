
// 🌟 Exercise 1: Class with Access Modifiers
class Employee{
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string){
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(){
    return `Name: ${this.name}, Position: ${this.position}`
  }
}

// 🌟 Exercise 2: Readonly Properties in a Class
class Product{
  readonly id: number;
  public name: string;
  public price: number;
  constructor(id: number, name: string, price: number){
    this.id = id
    this.name = name
    this.price = price
  }

  getProductInfo(){
    return `Name: ${this.name}, Price: ${this.price}`
  }
}

// Attempt to modify the id property after creating a new instance of the class and observe the result.
// let product = new Product(1, "Product 1", 10);
// product.id = 2; // Cannot assign to 'id' because it is a read-only property.

// 🌟 Exercise 3: Class Inheritance
class Animal{
  public name: string
  constructor(name: string){
    this.name = name
  }

  makeSound() :string{
    return "The animal makes a sound";
  }
}

class Dog extends Animal{
  constructor(name: string){
    super(name)
  }
  makeSound() :string{
    return "bark";
  }
}

let dog:Dog = new Dog("Scooby");
console.log(dog.makeSound());

// 🌟 Exercise 4: Static Properties and Methods
class Calculator{
  static add(a: number, b: number): number{
    return a + b;
  }

  static subtract(a: number, b: number): number{
    return a - b;
  }
}

console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(1, 2));

// 🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties
interface User{
  readonly id : string;
  name: string;
  email: string;
}

interface PremiumUser extends User{
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser) : void {
  console.log("User Details:");
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  if (user.membershipLevel) {
      console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
      console.log("Membership Level: Not specified");
  }
}

const regularUser: User = {
  id: "user123",
  name: "John Doe",
  email: "john@example.com"
};

const premiumUser1: PremiumUser = {
  id: "premium456",
  name: "Jane Smith",
  email: "jane@example.com",
  membershipLevel: "Gold"
};

const premiumUser2: PremiumUser = {
  id: "premium789",
  name: "Bob Johnson",
  email: "bob@example.com"
};

// Printing user details
printUserDetails(premiumUser1);
console.log("---");
printUserDetails(premiumUser2);
