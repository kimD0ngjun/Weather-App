import styled from "styled-components";
import { FaHandHoldingWater } from "react-icons/fa";
import { PiWind } from "react-icons/pi";

const WeatherDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeatherBox = styled.div``;

const WeatherImage = styled.img``;

const Temperature = styled.p``;

const Description = styled.p``;

const WeatherDetails = styled.div``;

const Humidity = styled.div``;

const Wind = styled.div``;

const HumidityIcon = styled(FaHandHoldingWater)`
  width: 50rem;
  height: 50rem;
`;

const WindIcon = styled(PiWind)`
  width: 50rem;
  height: 50rem;
`;

const TextContainer = styled.div``;

const Span = styled.span``;

const HumidityDescription = styled.p``;

const WindDescription = styled.p``;

const WeatherData = () => {
  return (
    <WeatherDataWrapper>
      <WeatherBox>
        <WeatherImage />
        <Temperature>100°C</Temperature>
        <Description>맑음</Description>
      </WeatherBox>

      <WeatherDetails>
        <Humidity>
          <HumidityIcon />
          <TextContainer>
            <Span>100 %</Span>
            <HumidityDescription>습도</HumidityDescription>
          </TextContainer>
        </Humidity>

        <Wind>
          <WindIcon />
          <TextContainer>
            <Span>100 km/h</Span>
            <WindDescription>풍속</WindDescription>
          </TextContainer>
        </Wind>
      </WeatherDetails>
    </WeatherDataWrapper>
  );
};

export default WeatherData;
