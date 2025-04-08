// src/features/ageSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk for incrementing age
export const ageUpAsync = createAsyncThunk(
  'age/ageUpAsync',
  async (value, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return value;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for decrementing age
export const ageDownAsync = createAsyncThunk(
  'age/ageDownAsync',
  async (value, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return value;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  value: 20,
  loading: false,
  error: null,
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload || 1;
      })
      .addCase(ageUpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value -= action.payload || 1;
      })
      .addCase(ageDownAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ageSlice.reducer;