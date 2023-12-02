import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

import getWeatherData from "../api/WeatherAPI";

const WeatherBox = styled.div``;

const WeatherImage = styled.img`
  width: 150rem;
  margin-top: 40rem;
  margin-bottom: 30rem;
`;

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
  const [weatherData, setWeatherData] = useState(Object);
  const location = useAppSelector((state: RootState) => state.location.value);

  const fetchWeatherData = async () => {
    try {
      const weatherData = await getWeatherData(location);
      setWeatherData(weatherData);
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.error("에러:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  return (
    <WeatherBox>
      <WeatherImage src="/assets/sun.png" />
      <Temperature>
        <TemperatureData>{weatherData.temperature}</TemperatureData>
        <TemperatureUnit>°C</TemperatureUnit>
      </Temperature>
      <Description>{weatherData.weather}</Description>
    </WeatherBox>
  );
};

export default WeatherBoxContent;
