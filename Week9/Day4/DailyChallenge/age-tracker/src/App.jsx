// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Age Tracker</h1>
        <AgeDisplay />
        <AgeControls />
      </div>
    </Provider>
  );
}

export default App;