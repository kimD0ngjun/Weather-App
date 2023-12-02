import axios from "axios";
import key from "./ApiKey";

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

    // API 응답에서 필요한 데이터 추출
    const weatherData = response.data;

    // 여기서 받아온 데이터를 필요에 맞게 처리하거나 반환할 수 있습니다.
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    // 에러 처리
    console.error("에러:", error);
    throw error; // 에러를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 합니다.
  }
};

export default getWeatherData;
