import styled from "styled-components";
import { TbZoomQuestion } from "react-icons/tb";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100rem;
`;

const NotFoundIcon = styled(TbZoomQuestion)`
  width: 200rem;
  height: 200rem;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundIcon />
    </NotFoundWrapper>
  );
};

export default NotFound;
