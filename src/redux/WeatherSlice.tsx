import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherDataForm } from "../utility/inteface";

const initialState: WeatherDataForm = {
  location: "",
  weather: "",
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherDataForm>) => {
      const { location, weather, temperature, humidity, windSpeed } =
        action.payload;
      state.location = location;
      state.weather = weather;
      state.temperature = temperature;
      state.humidity = humidity;
      state.windSpeed = windSpeed;
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
