import styled from "styled-components";

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
  return (
    <WeatherBox>
      <WeatherImage src="/assets/sun.png" />
      <Temperature>
        <TemperatureData>100</TemperatureData>
        <TemperatureUnit>°C</TemperatureUnit>
      </Temperature>
      <Description>맑음</Description>
    </WeatherBox>
  );
};

export default WeatherBoxContent;
