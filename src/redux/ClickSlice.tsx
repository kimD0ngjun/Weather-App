import { createSlice } from "@reduxjs/toolkit";

interface ClickedData {
  click: boolean;
}

const initialState: ClickedData = {
  click: false,
};

const clickedSlice = createSlice({
  name: "clicked",
  initialState,
  reducers: {
    click: (state) => {
      state.click = true;
    },
  },
});

export const { click } = clickedSlice.actions;

export default clickedSlice.reducer;
