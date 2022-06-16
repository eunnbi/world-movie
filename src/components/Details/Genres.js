import styled from "styled-components";

const GenresList = styled.ul`
  display: flex;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const GenresItem = styled.li`
  background-color: #fff;
  color: ${({ theme }) => theme.color.gray};
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

function Genres({ genres }) {
  return (
    <GenresList>
      {genres.map((genre, index) => (
        <GenresItem key={index}>{genre.name}</GenresItem>
      ))}
    </GenresList>
  );
}

export default Genres;
