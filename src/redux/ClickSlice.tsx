import { createSlice } from "@reduxjs/toolkit";
import { ClickedData } from "../utility/inteface";

const initialState: ClickedData = {
  click: false,
  update: false,
};

const clickedSlice = createSlice({
  name: "clicked",
  initialState,
  reducers: {
    click: (state) => {
      state.click = true;
    },
    update: (state) => {
      state.update = !state.update;
    },
  },
});

export const { click, update } = clickedSlice.actions;

export default clickedSlice.reducer;
