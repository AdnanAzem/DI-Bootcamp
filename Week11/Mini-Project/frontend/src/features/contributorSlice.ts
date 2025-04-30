
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const addContributor = createAsyncThunk(
  'contributors/add',
  async ({ storyId, userId }: { storyId: number; userId: number }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/contributors`,
        { storyId, userId },
        { withCredentials: true } 
      );
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const contributorSlice = createSlice({
  name: 'contributors',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addContributor.fulfilled, () => {
      
    });
  },
});

export default contributorSlice.reducer;
