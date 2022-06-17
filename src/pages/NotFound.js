import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

const Main = styled.main`
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Button = styled.button`
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-top: 2rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.skyBlue};
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <h1>404</h1>
      <h2>Not Found!</h2>
      <Button onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
        Go Back
      </Button>
    </Main>
  );
};

export default NotFound;
