import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterReducer.actions;

export default counterReducer.reducer;
