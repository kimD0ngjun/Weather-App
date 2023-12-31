import styled, { keyframes, css } from "styled-components";
// import NotFoundData from "../components/NotFound";
import WeatherData from "../components/WeatherData";

import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { ClickProps } from "../utility/inteface";
import NotFoundData from "./NotFound";

const slideIn = keyframes`
  from {
    height: 0;
  }
  to {
    height: 450rem;
  }
`;

const Frame = styled.div<ClickProps>`
  height: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  aligin-items: center;
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${slideIn} 0.5s ease forwards;
    `}
`;

const ContentFrame = () => {
  const isClicked = useAppSelector((state: RootState) => state.click.click);
  const isError = useAppSelector((state: RootState) => state.error.error);

  return (
    <Frame isClicked={isClicked}>
      {isError ? <NotFoundData /> : <WeatherData />}
    </Frame>
  );
};

export default ContentFrame;
