import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: white;
  background-color: ${({ theme }) => theme.color.skyBlue};
  svg {
    font-size: 1.3rem;
  }
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <FiChevronLeft />
    </Button>
  );
}

export default BackButton;
