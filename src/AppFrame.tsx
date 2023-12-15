import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import ContentFrame from "./components/ContentFrame";

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
  return (
    <AppFrameWrapper>
      <SearchBox />
      <ContentFrame />
    </AppFrameWrapper>
  );
};

export default AppFrame;
