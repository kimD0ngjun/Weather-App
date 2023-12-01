import styled from "styled-components";
import NotFoundData from "../components/NotFound";
import WeatherData from "../components/WeatherData";

import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";

const Frame = styled.div`
  height: 450rem;
`;

const ContentFrame = () => {
  const isClicked = useAppSelector((state: RootState) => state.click.click);

  return <Frame>{isClicked ? <WeatherData /> : null}</Frame>;
};

export default ContentFrame;
