import styled from "styled-components";
import { TbZoomQuestion } from "react-icons/tb";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100rem;
`;

const NotFound = () => {
  return <NotFoundWrapper></NotFoundWrapper>;
};

export default NotFound;
