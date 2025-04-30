import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Story } from "../app/types";
import Cookies from "js-cookie";

interface StoryState {
  stories: Story[];
  loading: boolean;
  error: string | null;
}

const initialState: StoryState = {
  stories: [],
  loading: false,
  error: null,
};
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchStories = createAsyncThunk(
  "stories/fetch",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.get(`${BASE_URL}/api/stories`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch stories"
      );
    }
  }
);

// Create a new story thunk (with cookies support)
export const createStory = createAsyncThunk(
  "stories/createStory",
  async (
    { title, content }: { title: string; content: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/stories`,
        { title, content },
        { withCredentials: true } // Sends cookies like accessToken
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to create story"
      );
    }
  }
);

export const deleteStory = createAsyncThunk(
  "stories/deleteStory",
  async (storyId: number, { rejectWithValue }) => {
    try {
      Cookies.get("accessToken");
      await axios.delete(
        `${BASE_URL}/api/stories/${storyId}`,
        {withCredentials: true,}
      );

      
      return storyId;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to delete story");
    }
  }
);

export const updateStory = createAsyncThunk(
  'stories/updateStory',
  async (
    { id, title, content }: { id: number; title: string; content: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/api/stories/${id}`,
        { title, content },
        { withCredentials: true } 
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchStories.fulfilled,
        (state, action: PayloadAction<Story[]>) => {
          state.loading = false;
          state.stories = action.payload;
        }
      )
      .addCase(fetchStories.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStory.fulfilled, (state, action: PayloadAction<any>) => {
        state.stories = state.stories.filter(
          (story: any) => story.id !== action.payload
        );
      });
  },
});

export default storySlice.reducer;
