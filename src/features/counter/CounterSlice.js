import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    oneIncrement: (state, action) => {
      state.value += 1;
    },
    oneDecrement: (state, action) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { oneIncrement, oneDecrement, increamentByAmount } = counterSlice.actions;
export default counterSlice.reducer;
