import styled from "styled-components";
import SearchBox from "./components/SearchBox";

const AppFrameWrapper = styled.div`
  width: 250rem;
  padding: 25rem;
  background-color: #ffffff;
`;

const AppFrame = () => {
  return (
    <AppFrameWrapper>
      <SearchBox />
    </AppFrameWrapper>
  );
};

export default AppFrame;
