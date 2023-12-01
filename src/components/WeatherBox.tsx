import styled from "styled-components";

const WeatherBox = styled.div``;

const WeatherImage = styled.img``;

const Temperature = styled.p``;

const Description = styled.p``;

const WeatherBoxContent = () => {
  return (
    <WeatherBox>
      <WeatherImage />
      <Temperature>100°C</Temperature>
      <Description>맑음</Description>
    </WeatherBox>
  );
};

export default WeatherBoxContent;
