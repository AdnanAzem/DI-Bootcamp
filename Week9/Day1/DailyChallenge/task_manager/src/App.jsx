
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import './App.css';

function App() {

  return (
    <>
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
    </>
  )
}

export default App
