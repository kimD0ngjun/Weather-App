import { configureStore } from "@reduxjs/toolkit";
import clickedReducer from "./ClickSlice";
import updateReducer from "./ClickSlice";
import weatherReducer from "./WeatherSlice";
import errorReducer from "./ErrorSlice";
import loadingReducer from "./LoadingSlice";

const store = configureStore({
  reducer: {
    click: clickedReducer,
    update: updateReducer,
    weather: weatherReducer,
    error: errorReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
