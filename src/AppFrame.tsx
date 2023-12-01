import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import NotFound from "./components/NotFound";

const AppFrameWrapper = styled.div`
  width: 400rem;
  padding: 40rem;
  background-color: #ffffff;
  border-radius: 10rem;
`;

const AppFrame = () => {
  return (
    <AppFrameWrapper>
      <SearchBox />
      <NotFound />
    </AppFrameWrapper>
  );
};

export default AppFrame;
