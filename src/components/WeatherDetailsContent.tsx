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

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const P = styled.p`
  color: #06283d;
  font-size: 18rem;
  font-weight: 650;
  margin: 0;
`;

const Unit = styled.p`
  color: #06283d;
  font-size: 18rem;
  font-weight: 650;
  margin: 0;
  white-space: pre-wrap;
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
  const humidityValue = (Math.round(humidity * 10) / 10).toFixed(1);

  const windSpeed = useAppSelector(
    (state: RootState) => state.weather.windSpeed
  );
  const windSpeedValue = (Math.round(windSpeed * 10) / 10).toFixed(1);

  return (
    <WeatherDetails>
      <Humidity>
        <Icon>
          <HumidityIcon />
        </Icon>
        <TextContainer>
          <Span>
            <P>{humidityValue}</P>
            <Unit> %</Unit>
          </Span>
          <Span>
            <Description>습도</Description>
          </Span>
        </TextContainer>
      </Humidity>

      <Wind>
        <Icon>
          <WindIcon />
        </Icon>
        <TextContainer>
          <Span>
            <P>{windSpeedValue}</P>
            <Unit> km/h</Unit>
          </Span>
          <Span>
            <Description>풍속</Description>
          </Span>
        </TextContainer>
      </Wind>
    </WeatherDetails>
  );
};

export default WeatherDetailsContent;
