// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;