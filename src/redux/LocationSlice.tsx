import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationState } from "../utility/inteface";

const initialState: LocationState = {
  value: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
