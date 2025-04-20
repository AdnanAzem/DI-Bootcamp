import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "./constants";

export const addTask = (name, date) => {
  return {
    type: ADD_TASK,
    payload: { name, date },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};
