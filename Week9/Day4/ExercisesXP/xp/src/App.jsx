import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserData from './components/UserData';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>User Data with Redux Thunk</h1>
        <UserData />
      </div>
    </Provider>
  );
}

export default App;