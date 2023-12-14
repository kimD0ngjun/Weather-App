import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

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
  const weather = useAppSelector((state: RootState) => state.weather.weather);
  const temperature = useAppSelector(
    (state: RootState) => state.weather.temperature
  );

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
        <TemperatureData>{temperature}</TemperatureData>
        <TemperatureUnit>°C</TemperatureUnit>
      </Temperature>
      <Description>{weather}</Description>
    </WeatherBox>
  );
};

export default WeatherBoxContent;
