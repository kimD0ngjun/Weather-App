import styled from "styled-components";

import WeatherBoxContent from "./WeatherBox";
import WeatherDetailsContent from "./WeatherDetailsContent";

const WeatherDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeatherData = () => {
  return (
    <WeatherDataWrapper>
      <WeatherBoxContent />
      <WeatherDetailsContent />
    </WeatherDataWrapper>
  );
};

export default WeatherData;
