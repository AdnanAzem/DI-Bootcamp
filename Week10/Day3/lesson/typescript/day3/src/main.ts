/** classes with interface / type */
interface User {
  name: string;
  age: number;
  getAge(): number;
  setAge(age: number): void;
}

class EmployeeC implements User {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = "female";
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}

// class Manager extends EmployeeC {}

/** daily */

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

interface BookLibrary {
  addBook(book: Book): void;
  getBookDetails(isbn: string): string;
}

class Library implements BookLibrary {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookDetails(isbn: string): string {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      return `${book.title} by ${book.author}, published in ${
        book.publishedYear
      }. Genre: ${book.genre || "Not specified"}  `;
    }
    return "Book not found";
  }
  getBooks(): Book[] {
    return [...this.books];
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  listBooks(): string[] {
    return this.getBooks().map((book) => book.title);
  }
}

// const myDigitalLibrary = new DigitalLibrary("http://digitallybrary.com");

// myDigitalLibrary.addBook({
//   title: "The Great Typescript book",
//   author: "zivuch",
//   isbn: "9876546789",
//   publishedYear: 2025,
//   genre: "software development",
// });

// myDigitalLibrary.addBook({
//   title: "The Great Reat book",
//   author: "zivuch",
//   isbn: "9876546781",
//   publishedYear: 2025,
// });

// console.log(myDigitalLibrary.getBookDetails("9876546789"));

// console.log(myDigitalLibrary.listBooks());

/** static in classes */

class Student {
  static count: number = 0;

  static getCount(): number {
    return Student.count;
  }

  name: string;
  id: number;
  constructor(name: string) {
    this.name = name;
    this.id = ++Student.count;
  }
}

const std1 = new Student("John");
const std2 = new Student("Anne");
const std3 = new Student("Dan");

// console.log(std1, Student.count);
// console.log(std2);
// console.log(std3);

/** index signature / keys */

interface Employee {
  [key: string | number]: string | number
  name: string;
  age: number;
  role: string;
}

const emloyee1: Employee = {
  name: "John",
  age: 33,
  role: "developer",
};


// console.log(emloyee1.name);
// console.log(emloyee1["name"]);
emloyee1.email = 'jjj@gmail.com'

/** dynamic key */
const prop1: string = "name"
emloyee1[prop1 as keyof Employee]
emloyee1[prop1]

// for(let key in emloyee1) {
//   console.log(key, emloyee1[key as keyof Employee]);
//   console.log(key, emloyee1[key as keyof typeof emloyee1]);
//   console.log(key, emloyee1[key]);
// }

/** Record Type */

type UserT = { 
  name: string
  age: number
}

type keys = "name" | "age" | 1 
type UserR = Record<keys, string>

const user1: UserT = {
  name: 'a',
  age: 1
}

// const user2: UserR = {
//   name: "1",
//   age: 'abc'
// }

/** Generics */

// const strEcho = (value: string): string => value
// const numEcho = (value: number): number => value
// const bolEcho = (value: boolean): boolean => value

const echo = <T>(value: T): T => value

// console.log(echo<string>("1"));

/** get the first element from an Array */
const getFirstElement = <T>(arr: T[]): T => {
  return arr[0]
}

// console.log(getFirstElement<number>([1,2,3,4]));
// console.log(getFirstElement<string>(["1a","2","3","4"]));

interface Person<T> {
  id: number
  name: string
  age: number
  info: T
}

const pOne: Person<(string | number)[]> = {
  id: 1,
  name: "a",
  age: 99,
  info: ["male", 173]
}

const p2: Person<boolean> = {
  id: 1,
  name: "a",
  age: 99,
  info: false
}

type Info = {
  city: string
  address: string
  zipcode: number
}

const p3: Person<Info> = {
  id: 1,
  name: "a",
  age: 99,
  info: {
    city:'a',
    address:'b',
    zipcode:1
  }
}