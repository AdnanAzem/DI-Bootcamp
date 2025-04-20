import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 3333,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByVal: (state, action) => {
      console.log(action);
      state.count += Number(action.payload.val1);
    },
  },
});

// console.log(counterSlice.actions);
export const { increment, decrement, reset, incrementByVal } =
  counterSlice.actions;

export default counterSlice.reducer;
