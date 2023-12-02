import { createSlice } from "@reduxjs/toolkit";

interface ClickedData {
  click: boolean;
  update: boolean;
}

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
