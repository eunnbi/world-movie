import styled from "styled-components";

const GenresList = styled.ul`
    display: flex;
    margin-bottom: 1.8rem;
    flex-wrap: wrap;
`;

const GenresItem = styled.li`
    margin: 0 5px 5px 0;
    background-color: #fff;
    color: #55595c;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    &:first-child {
        margin-left: 0;
    }
`

function Genres({genres}) {
    return (
        <GenresList>
            {genres.map((genre, index) => 
                <GenresItem key={index}>
                    {genre.name}
                </GenresItem>
            )}
        </GenresList>
    );
}

export default Genres;