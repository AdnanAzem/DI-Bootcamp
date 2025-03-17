import express from 'express';

const app = express();

app.use(express.json());

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2000 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2005 },
    { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2010 }
];

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (!book) {
        res.status(404).send('Book not found');
    } else {
        res.send(book);
    }
});

app.post('/api/books', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).send(newBook);
});