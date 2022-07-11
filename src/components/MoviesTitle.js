import Heading from "./common/Heading";
import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledMoviesTitle = styled.div`
  position: relative;
  margin-bottom: 3rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
    position: absolute;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }
`;
function MoviesTitle({ type }) {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <StyledMoviesTitle className="movies__title">
      <FiChevronLeft onClick={goHome} />
      <Heading>{type.replace("_", " ")} movies</Heading>
    </StyledMoviesTitle>
  );
}

export default MoviesTitle;
