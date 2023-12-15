import axios from "axios";
import { WeatherDataForm } from "../utility/inteface";

const key = import.meta.env.VITE_APP_API_ENDPOINT;

const weatherDataForm: WeatherDataForm = {
  location: "",
  weather: "",
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
};

const translateToEnglish = async (text: string) => {
  try {
    const response = await axios.get(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=ko|en`
    );

    const translatedText = response.data.responseData.translatedText;
    return translatedText;
  } catch (error) {
    console.error("번역 에러:", error);
    throw error;
  }
};

const getWeatherData = async (location: string) => {
  console.log(key);
  console.log(import.meta.env.VITE_APP_API_ENDPOINT);

  try {
    let translatedLocation = location;

    if (/[\u3131-\uD79D]/.test(location)) {
      translatedLocation = await translateToEnglish(location);
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${translatedLocation}&units=metric&appid=${key}`
    );

    const weatherData = response.data;

    weatherDataForm.location = translatedLocation;

    if (weatherData.weather[0].main === "Clear") {
      weatherDataForm.weather = "맑음";
    } else if (weatherData.weather[0].main === "Clouds") {
      weatherDataForm.weather = "흐림";
    } else if (weatherData.weather[0].main === "Rain") {
      weatherDataForm.weather = "비";
    } else if (weatherData.weather[0].main === "Snow") {
      weatherDataForm.weather = "눈";
    } else if (weatherData.weather[0].main === "Haze") {
      weatherDataForm.weather = "안개";
    }

    weatherDataForm.temperature = weatherData.main.temp;
    weatherDataForm.humidity = weatherData.main.humidity;
    weatherDataForm.windSpeed = weatherData.wind.speed;

    console.log(weatherDataForm);

    return weatherDataForm;
  } catch (error) {
    console.error("에러:", error);
    throw error;
  }
};

export default getWeatherData;
