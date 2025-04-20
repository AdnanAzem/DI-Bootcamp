import { useReducer, useRef, createContext } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useImmerReducer } from "use-immer";

export const TaskContext = createContext();

/**
 * {id:..., name:..., active: true}
 */
const initialState = {
  tasks: [],
};

const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";

const tasksReducer = (state, action) => {
  console.log(action);
  if (action.type === ADD_TASK) {
    // adding task
    // const newTasks = [...state.tasks];
    // newTasks.push({ id: uuidv4(), name: action.payload, active: true });
    // return { ...state, tasks: newTasks };

    state.tasks.push({ id: uuidv4(), name: action.payload, active: true })

  } else if (action.type === REMOVE_TASK) {
    // const filterdTasks = state.tasks.filter((item) => item.id !== action.id);
    // return { ...state, tasks: filterdTasks };
    state.tasks = state.tasks.filter((item) => item.id !== action.id);
  }
  return state;
};

function App() {
  const [state, dispatch] = useImmerReducer(tasksReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    dispatch({ type: ADD_TASK, payload: value });
    inputRef.current.value = "";
  };

  return (
    <>
      <h2>Task Manager</h2>
      <div>
        <input placeholder='Add Task...' ref={inputRef} />
        <button onClick={() => addTask()}>Add Task</button>
      </div>
      <TaskContext.Provider value={{ state, dispatch }}>
        <TaskList />
      </TaskContext.Provider>
    </>
  );
}

export default App;
