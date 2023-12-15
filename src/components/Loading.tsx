import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.img`
  width: 200rem;
  height: 200rem;
  margin-top: 30rem;
  margin-bottom: 30rem;
`;

const LoadingMessage = styled.p`
  color: #06283d;
  font-size: 18rem;
  font-weight: 500;
  text-align: center;
  padding: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingData = () => {
  return (
    <LoadingWrapper>
      <LoadingIcon src="/assets/loading" />
      <LoadingMessage>불러오는 중입니다...</LoadingMessage>
    </LoadingWrapper>
  );
};

export default LoadingData;
