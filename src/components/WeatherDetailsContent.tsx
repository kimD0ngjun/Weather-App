import styled from "styled-components";
import { FaHandHoldingWater } from "react-icons/fa";
import { PiWind } from "react-icons/pi";

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

const WeatherDetailsContent = () => {
  return (
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
  );
};

export default WeatherDetailsContent;
