import { configureStore } from "@reduxjs/toolkit";
import clickedReducer from "./ClickSlice";
import updateReducer from "./ClickSlice";

const store = configureStore({
  reducer: {
    click: clickedReducer,
    update: updateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
