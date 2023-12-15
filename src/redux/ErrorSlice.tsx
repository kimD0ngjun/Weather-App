import { createSlice } from "@reduxjs/toolkit";
import { ErrorData } from "../utility/inteface";

const initialState: ErrorData = {
  error: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state) => {
      state.error = true;
    },
    clearError: (state) => {
      state.error = false;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
