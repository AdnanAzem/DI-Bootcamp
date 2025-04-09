// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Productivity Tracker</h1>
        <CategorySelector 
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />
        <AddTaskForm selectedCategoryId={selectedCategoryId} />
        <TaskList categoryId={selectedCategoryId} />
      </div>
    </Provider>
  );
};

export default App;