import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  max-width: 100px;
  max-height: 100px;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  border: 10px solid #fff;
  border-top: 10px solid ${({ theme }) => theme.color.skyBlue};
  animation: loading 1s linear infinite;

  @keyframes loading {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Circle></Circle>
    </LoadingWrapper>
  );
};

export default Loading;
