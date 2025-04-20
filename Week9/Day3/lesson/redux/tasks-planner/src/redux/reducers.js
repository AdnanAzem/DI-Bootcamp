import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "./constants";
import { v4 as uuidv4 } from "uuid";
// immer

const initialState = {
  tasks: [],
  status: "", // fail, succes, loading
};

export const tasksReducer = (state = initialState, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({
      id: uuidv4(),
      name: action.payload.name,
      date: action.payload.date,
      active: true,
    });

    // const sortedTasks = newTasks.sort(
    //   (a, b) => new Date(a.date) - new Date(b.date)
    // );

    return {
      ...state,
      tasks: newTasks.sort((a, b) => new Date(a.date) - new Date(b.date)),
    };
  }
  return state;
};
