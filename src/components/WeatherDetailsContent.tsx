import styled from "styled-components";
import { FaHandHoldingWater } from "react-icons/fa";
import { PiWind } from "react-icons/pi";

import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const WeatherDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330rem;
  padding: 10rem;
`;

const Humidity = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wind = styled.div`
  display: flex;
  flex-direction: row;
`;

const HumidityIcon = styled(FaHandHoldingWater)`
  width: 50rem;
  height: 50rem;
`;

const WindIcon = styled(PiWind)`
  width: 50rem;
  height: 50rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
`;

const Span = styled.span`
  color: #06283d;
  font-size: 18rem;
  font-weight: 650;
`;

const Description = styled.p`
  margin: 0rem;
  text-align: right;
  color: #06283d;
  font-size: 15rem;
  font-weight: 550;
`;

const WeatherDetailsContent = () => {
  const humidity = useAppSelector((state: RootState) => state.weather.humidity);
  const windSpeed = useAppSelector(
    (state: RootState) => state.weather.windSpeed
  );

  return (
    <WeatherDetails>
      <Humidity>
        <HumidityIcon />
        <TextContainer>
          <Span>{humidity}</Span>
          <Span>%</Span>
          <Description>습도</Description>
        </TextContainer>
      </Humidity>

      <Wind>
        <WindIcon />
        <TextContainer>
          <Span>{windSpeed}</Span>
          <Span>km/h</Span>
          <Description>풍속</Description>
        </TextContainer>
      </Wind>
    </WeatherDetails>
  );
};

export default WeatherDetailsContent;
