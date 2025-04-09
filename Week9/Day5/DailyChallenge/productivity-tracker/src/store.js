// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';
import categoryReducer from './features/categorySlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    categories: categoryReducer
  }
});