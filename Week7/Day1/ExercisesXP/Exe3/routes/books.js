const express = require('express');
const router = express.Router();
// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    books.push(book);
    res.status(201).json(book);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const bookIndex = books.findIndex(book => book.id === parseInt(bookId));
    if (bookIndex !== -1) {
        const updatedBook = {
            id:books[bookIndex].id,
            title: req.body.title,
            author: req.body.author
        }
        books[bookIndex] = updatedBook;
        res.json(updatedBook);
    } else {
        res.status(404).send('Book not found');
    }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    const bookIndex = books.findIndex(book => book.id === parseInt(bookId));
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).send('Book not found');
    }
});

module.exports = router;