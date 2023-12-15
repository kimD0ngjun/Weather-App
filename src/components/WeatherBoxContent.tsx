import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const WeatherBox = styled.div``;

const WeatherImage = styled.img`
  width: 150rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
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

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  aligin-items: center;
`;

const LocationDescription = styled.p`
  margin-bottom: 14rem;
  margin-top: 3.5rem;
  font-size: 21rem;
  font-weight: 600;
  white-space: pre-wrap;
`;

const WeatherDescription = styled.p`
  margin-bottom: 20rem;
  margin-top: 0rem;
  font-size: 24rem;
  font-weight: 600;
  white-space: pre-wrap;
`;

const WeatherBoxContent = () => {
  const weather = useAppSelector((state: RootState) => state.weather.weather);
  const temperature = useAppSelector(
    (state: RootState) => state.weather.temperature
  );
  const temperatureyValue = (Math.round(temperature * 10) / 10).toFixed(1);
  const location = useAppSelector((state: RootState) => state.weather.location);

  return (
    <WeatherBox>
      {/* <Location>{weatherData.location.toUpperCase()}</Location> */}
      {weather === "맑음" ? (
        <WeatherImage src="/assets/sun.png" />
      ) : weather === "흐림" ? (
        <WeatherImage src="/assets/cloud.png" />
      ) : weather === "비" ? (
        <WeatherImage src="/assets/rainy.png" />
      ) : weather === "눈" ? (
        <WeatherImage src="/assets/snowing.png" />
      ) : weather === "안개" ? (
        <WeatherImage src="/assets/mist.png" />
      ) : null}
      <Temperature>
        <TemperatureData>{temperatureyValue}</TemperatureData>
        <TemperatureUnit>°C</TemperatureUnit>
      </Temperature>
      <Description>
        <LocationDescription>{`${location} `}</LocationDescription>
        <WeatherDescription>{` ${weather}`}</WeatherDescription>
      </Description>
    </WeatherBox>
  );
};

export default WeatherBoxContent;
