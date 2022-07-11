import { useNavigate, useLocation } from "react-router-dom";
import { useQueryParam } from "../../hooks/useQueryParam";
import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.color.skyBlue};
  text-transform: capitalize;
  padding: 0.3rem;
  border-radius: 5px;
  margin: 2rem 0;
  transition: all 0.3s ease-in-out;
  svg {
    font-size: 1.3rem;
  }
`;

function BackButton() {
  const navigate = useNavigate();
  const from = useQueryParam("from");
  const page = useQueryParam("page");
  const query = useQueryParam("query");
  const to = `${from}${
    page ? `?page=${page}` : query ? `?query=${query}` : ""
  }`;
  return (
    <Button onClick={() => navigate(to)}>
      <FiChevronLeft />
    </Button>
  );
}

export default BackButton;
