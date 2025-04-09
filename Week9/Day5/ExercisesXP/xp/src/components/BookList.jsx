// BookList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
  selectBooksByGenre
} from '../features/selectors';

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  // Get all books
  const allBooks = useSelector(selectBooks);
  
  // Get books by specific genres using individual selectors
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);
  
  // Get books by any genre using the generic selector
  const booksByGenre = useSelector(state => 
    selectBooksByGenre(state, selectedGenre === 'All' ? null : selectedGenre)
  );

  const getBooksToDisplay = () => {
    if (selectedGenre === 'All') return allBooks;
    if (selectedGenre === 'Horror') return horrorBooks;
    if (selectedGenre === 'Fantasy') return fantasyBooks;
    if (selectedGenre === 'Science Fiction') return sciFiBooks;
    return booksByGenre;
  };

  const displayedBooks = getBooksToDisplay();

  return (
    <div className="book-inventory">
      <h1>Book Inventory</h1>
      
      <div className="genre-filter">
        <label>Filter by Genre: </label>
        <select 
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Dystopian">Dystopian</option>
        </select>
      </div>
      
      <div className="book-list">
        {displayedBooks.length === 0 ? (
          <p>No books found in this genre.</p>
        ) : (
          <ul>
            {displayedBooks.map(book => (
              <li key={book.id} className="book-item">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="stats">
        <p>Total Books: {allBooks.length}</p>
        <p>Horror Books: {horrorBooks.length}</p>
        <p>Fantasy Books: {fantasyBooks.length}</p>
        <p>Science Fiction Books: {sciFiBooks.length}</p>
      </div>
    </div>
  );
};

export default BookList;