import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Daily Planner</h1>
        <div className="planner-container">
          <Calendar />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;