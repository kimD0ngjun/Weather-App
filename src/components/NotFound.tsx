import styled from "styled-components";
import { TbZoomQuestion } from "react-icons/tb";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundIcon = styled(TbZoomQuestion)`
  width: 200rem;
  height: 200rem;
  margin-top: 30rem;
  margin-bottom: 30rem;
`;

const NotFoundMessage = styled.p`
  color: #06283d;
  font-size: 18rem;
  font-weight: 500;
  text-align: center;
  padding: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundIcon />
      <NotFoundMessage>잘못 입력했어요! 다시 검색해봐요 :D</NotFoundMessage>
    </NotFoundWrapper>
  );
};

export default NotFound;
