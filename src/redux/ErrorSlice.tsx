import { createSlice } from "@reduxjs/toolkit";
import { ErrorData } from "../utility/inteface";

const initialState: ErrorData = {
  error: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    error: (state) => {
      state.error = true;
    },
    nonError: (state) => {
      state.error = false;
    },
  },
});

export const { error, nonError } = errorSlice.actions;

export default errorSlice.reducer;
