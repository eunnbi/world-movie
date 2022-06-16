import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.color.skyBlue};
  text-transform: capitalize;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  margin-top: 3rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.blueBlack};
  }
`;

function BackButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>back to movies</Button>;
}

export default BackButton;
