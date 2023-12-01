import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import NotFoundData from "./components/NotFound";
import WeatherData from "./components/WeatherData";

import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hooks";

const AppFrameWrapper = styled.div`
  width: 350rem;
  padding-left: 40rem;
  padding-right: 40rem;
  padding-top: 30rem;
  padding-bottom: 20rem;
  background-color: #ffffff;
  border-radius: 10rem;
`;

const AppFrame = () => {
  const isClicked = useAppSelector((state: RootState) => state.click.click);

  return (
    <AppFrameWrapper>
      <SearchBox />
      {isClicked ? <WeatherData /> : null}
    </AppFrameWrapper>
  );
};

export default AppFrame;
