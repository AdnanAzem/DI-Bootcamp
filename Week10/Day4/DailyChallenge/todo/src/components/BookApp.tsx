import React, { ReactNode, useState } from "react";
import { List } from "./List";
import { Book } from "../types";

export const  BookApp: React.FC = (): ReactNode => {
  const [books, setBooks] = useState<Book[]>([]);

  const [newBook, setNewBook] = useState<Omit<Book, "id">>({
    title: "",
    author: "",
  });

  const addBook = () => {
    if (newBook.title.trim() && newBook.author.trim()) {
      const book: Book = {
        ...newBook,
        id: Date.now().toString(),
      };
      setBooks([...books, book]);
      setNewBook({ title: "", author: "" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };
  return (
    <>
      {" "}
      <h1>Book List</h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        /><br></br>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        /><br></br>
        <button onClick={addBook}>Add Book</button>
      </div>
      <List
        items={books}
        renderItem={(book) => (
          <div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
        )}
      />
    </>
  );
};
