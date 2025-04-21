interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find((book) => book.isbn === isbn);
  }
}

class DigitalLibrary extends Library {
  constructor(public readonly website: string) {
    super();
  }

  public listBooks(): string[] {
    const books = (this as any).books as Book[];
    return books.map((book) => book.title);
  }
}

// Create an instance of DigitalLibrary
const myDigitalLibrary = new DigitalLibrary("https://mydigitallibrary.example.com");

// Add some books
myDigitalLibrary.addBook({
    title: "The TypeScript Handbook",
    author: "Microsoft",
    isbn: "1234567890",
    publishedYear: 2022,
    genre: "Programming"
});

myDigitalLibrary.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "0987654321",
    publishedYear: 2008,
    genre: "Software Development"
});

myDigitalLibrary.addBook({
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    isbn: "1122334455",
    publishedYear: 1994
});

// Print out details of the books
console.log("Book Details:");
console.log(myDigitalLibrary.getBookDetails("1234567890"));
console.log(myDigitalLibrary.getBookDetails("0987654321"));
console.log(myDigitalLibrary.getBookDetails("1122334455"));

// Print out the list of all book titles
console.log("\nAll Book Titles:");
console.log(myDigitalLibrary.listBooks());

// Print the website
console.log("\nLibrary Website:", myDigitalLibrary.website);
