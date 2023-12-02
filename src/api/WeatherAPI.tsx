import axios from "axios";
import key from "./ApiKey";
import { WeatherDataForm } from "../utility/inteface";

const weatherDataForm: WeatherDataForm = {
  city: "",
  weather: "",
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
};

const getWeatherData = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          units: "metric",
          appid: key,
        },
      }
    );

    const weatherData = response.data;

    weatherDataForm.city = city;

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
    // 에러 처리
    console.error("에러:", error);
    throw error; // 에러를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 합니다.
  }
};

export default getWeatherData;
