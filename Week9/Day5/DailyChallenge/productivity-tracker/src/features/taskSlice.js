// taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskProgress: (state, action) => {
      const { id, progress } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.progress = progress;
        task.completed = progress === 100;
      }
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        task.progress = task.completed ? 100 : 0;
      }
    }
  }
});

export const { addTask, editTask, deleteTask, updateTaskProgress, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;