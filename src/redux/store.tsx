import { configureStore } from "@reduxjs/toolkit";
import clickedReducer from "./ClickSlice";
import updateReducer from "./ClickSlice";
import locationReducer from "./LocationSlice";

const store = configureStore({
  reducer: {
    click: clickedReducer,
    update: updateReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
