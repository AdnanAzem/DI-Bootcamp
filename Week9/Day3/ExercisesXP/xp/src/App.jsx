import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;