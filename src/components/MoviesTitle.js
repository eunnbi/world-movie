import Heading from "./common/Heading";
import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";

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
  }
`;
function MoviesTitle({ type }) {
  return (
    <StyledMoviesTitle className="movies__title">
      <FiChevronLeft />
      <Heading>{type.replace("_", " ")} movies</Heading>
    </StyledMoviesTitle>
  );
}

export default MoviesTitle;
