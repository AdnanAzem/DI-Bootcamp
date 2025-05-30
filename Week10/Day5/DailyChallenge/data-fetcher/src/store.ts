// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
