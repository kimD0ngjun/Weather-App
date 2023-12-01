import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import NotFoundData from "./components/NotFound";

const AppFrameWrapper = styled.div`
  width: 400rem;
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
      <NotFoundData />
    </AppFrameWrapper>
  );
};

export default AppFrame;
