const db = require("../config/db");

const getBooks = () => db("books").select("*");

const getBook = (id) => db("books").where({ id }).first();

const createBook = (title, author, publishedyear) =>
  db("books").insert({ title, author, publishedyear }).returning("*").then(rows => rows[0]);

const updateBook = (id, title, author, publishedyear) =>
  db("books").where({ id }).update({ title, author, publishedyear }).returning("*").then(rows => rows[0]);

const deleteBook = (id) => db("books").where({ id }).del();

module.exports = { 
    getBooks, 
    getBook, 
    createBook, 
    updateBook, 
    deleteBook 
};
