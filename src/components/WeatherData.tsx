import styled from "styled-components";

import WeatherBoxContent from "./WeatherBoxContent";
import WeatherDetailsContent from "./WeatherDetailsContent";

import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { ClickProps } from "../utility/inteface";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

const WeatherDataWrapper = styled.div<ClickProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isClicked ? 1 : 0)};
`;

const WeatherData = () => {
  const isClicked = useAppSelector((state: RootState) => state.click.click);

  return (
    <WeatherDataWrapper isClicked={isClicked}>
      <WeatherBoxContent />
      <WeatherDetailsContent />
    </WeatherDataWrapper>
  );
};

export default WeatherData;
