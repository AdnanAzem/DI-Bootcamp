import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "",
};

export const getUsers = createAsyncThunk("users/getinfo", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    adduserprepare: {
      prepare(name, email) {
        return { payload: { id: nanoid(), name, email } };
      },
      reducer(state, action) {
        state.users.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "error...";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "";
        state.users = action.payload;
      });
  },
});

export const { adduser, adduserprepare } = usersSlice.actions;

export default usersSlice.reducer;
