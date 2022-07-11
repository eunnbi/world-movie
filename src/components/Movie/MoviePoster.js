import styled, { css } from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w342";

const posterStyle = css`
  height: 100%;
  max-width: 350px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 200px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 150px;
  }
`;

const Image = styled.img`
  ${posterStyle}
`;

const NoPoster = styled.div`
  ${posterStyle}
  min-height: 300px;
  background-color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  padding: 0 10px;
`;

function MoviePoster({ poster }) {
  return (
    <>
      {poster ? (
        <Image src={`${IMAGE_BASE_URL}${poster}`} alt="poster" />
      ) : (
        <NoPoster>NOT AVAILABLE POSTER</NoPoster>
      )}
    </>
  );
}

export default MoviePoster;
