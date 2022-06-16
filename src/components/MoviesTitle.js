import Heading from "./common/Heading";
import { BiCameraMovie } from "react-icons/bi";
import styled from "styled-components";

const StyledMoviesTitle = styled.div`
  margin-bottom: 3rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  .MoviesTitle-icon {
    font-size: 2.5rem;
    margin-left: 1rem;
    color: #073763;
  }
`;
function MoviesTitle({ type }) {
  return (
    <StyledMoviesTitle className="movies__title">
      <Heading>{type.replace("_", " ")} movies</Heading>
      <BiCameraMovie className="MoviesTitle-icon" />
    </StyledMoviesTitle>
  );
}

export default MoviesTitle;
