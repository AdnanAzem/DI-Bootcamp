const Book = require("../models/books");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.getBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.getBook(req.params.bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedyear } = req.body;
    if (!title || !author || !publishedyear) return res.status(400).json({ error: "Missing fields" });
    const newBook = await Book.createBook(title, author, publishedyear);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error in createBook:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, publishedyear } = req.body;
    const updatedBook = await Book.updateBook(req.params.bookId, title, author, publishedyear);
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.deleteBook(req.params.bookId);
    if (!deleted) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
