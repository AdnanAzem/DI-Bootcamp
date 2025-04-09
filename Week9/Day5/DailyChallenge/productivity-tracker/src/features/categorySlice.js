// categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    // { id: 1, name: 'Work', color: '#FF5733' },
    // { id: 2, name: 'Study', color: '#33FF57' },
    // { id: 3, name: 'Personal', color: '#3357FF' }
  ]
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    editCategory: (state, action) => {
      const index = state.categories.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    }
  }
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;