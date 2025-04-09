// bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
    { id: 2, title: 'It', author: 'Stephen King', genre: 'Horror' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 5, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 6, title: 'Foundation', author: 'Isaac Asimov', genre: 'Science Fiction' },
    { id: 7, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy' }
  ]
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    }
  }
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;