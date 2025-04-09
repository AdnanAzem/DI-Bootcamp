// selectors.js
import { createSelector } from '@reduxjs/toolkit';

// Select all books
export const selectBooks = state => state.books.books;

// Selector for Horror books
export const selectHorrorBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Horror')
);

// Selector for Fantasy books
export const selectFantasyBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Fantasy')
);

// Selector for Science Fiction books
export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Science Fiction')
);

// Generic selector for any genre
export const selectBooksByGenre = createSelector(
  [selectBooks, (state, genre) => genre],
  (books, genre) => books.filter(book => book.genre === genre)
);