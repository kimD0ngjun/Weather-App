import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

import getWeatherData from "../api/WeatherAPI";
import { WeatherDataForm } from "../utility/inteface";

const WeatherBox = styled.div``;

const WeatherImage = styled.img`
  width: 150rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
`;

// const Location = styled.div`
//   margin-top: 5rem;
//   text-align: center;
//   font-size: 25rem;
//   font-weight: 800;
// `;

const Temperature = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  aligin-items: center;
`;

const TemperatureData = styled.p`
  margin-top: 10rem;
  margin-right: 2.5rem;
  margin-bottom: 10rem;
  margin-left: 0rem;
  font-size: 45rem;
  font-weight: 800;
`;

const TemperatureUnit = styled.p`
  margin-left: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 25rem;
  font-size: 28rem;
  font-weight: 550;
`;

const Description = styled.p`
  margin-bottom: 20rem;
  margin-top: 0rem;
  font-size: 24rem;
  font-weight: 600;
`;

const WeatherBoxContent = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataForm>({
    location: "",
    weather: "",
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
  });

  console.log(weatherData);

  const location = useAppSelector((state: RootState) => state.location.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(location);
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error("에러:", error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <WeatherBox>
      {/* <Location>{weatherData.location.toUpperCase()}</Location> */}
      {weatherData.weather === "맑음" ? (
        <WeatherImage src="/assets/sun.png" />
      ) : weatherData.weather === "흐림" ? (
        <WeatherImage src="/assets/cloud.png" />
      ) : weatherData.weather === "비" ? (
        <WeatherImage src="/assets/rain.png" />
      ) : weatherData.weather === "눈" ? (
        <WeatherImage src="/assets/snowing.png" />
      ) : weatherData.weather === "안개" ? (
        <WeatherImage src="/assets/mist.png" />
      ) : null}
      <Temperature>
        <TemperatureData>{weatherData.temperature}</TemperatureData>
        <TemperatureUnit>°C</TemperatureUnit>
      </Temperature>
      <Description>{weatherData.weather}</Description>
    </WeatherBox>
  );
};

export default WeatherBoxContent;
