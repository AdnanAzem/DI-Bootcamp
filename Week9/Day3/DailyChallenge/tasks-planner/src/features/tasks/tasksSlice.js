import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {},
  selectedDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({
        id: Date.now(),
        ...task,
      });
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const index = tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
          tasks[index] = { ...tasks[index], ...updatedTask };
        }
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        state.tasksByDate[date] = tasks.filter(task => task.id !== taskId);
      }
    },
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, selectDate } = tasksSlice.actions;
export default tasksSlice.reducer;