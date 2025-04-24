// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api/api';
import { AxiosRequestConfig } from 'axios';

interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState<any> = {
  data: null,
  loading: false,
  error: null,
};

export const fetchGenericData = createAsyncThunk(
  'data/fetchGenericData',
  async (config: AxiosRequestConfig) => {
    return await fetchData<any>(config);
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenericData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenericData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGenericData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dataSlice.reducer;
