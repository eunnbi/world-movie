import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MoviesTitle from "../components/MoviesTitle";
import MovieList from "../components/common/MovieList";
import Pagination from "../components/Pagination";
import { moviesContext } from "../contexts/movies";
import styled from "styled-components";
import { useQueryParam } from "../hooks/useQueryParam";

const MoviesMain = styled.main`
  width: 90vw;
  padding: 2.5rem 0;
`;

const Movies = () => {
  const queryParam = useQueryParam("page");
  const navigate = useNavigate();
  const { type } = useParams();
  const { movies } = useContext(moviesContext);
  const data = movies[type];
  const [page, setPage] = useState(Number(queryParam));
  const limit = 12;
  const offset = (page - 1) * limit;

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page]);

  return (
    <MoviesMain>
      {type && <MoviesTitle type={type} />}
      {data && (
        <>
          <MovieList movies={data.slice(offset, offset + limit)} />
          <Pagination
            total={data.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </MoviesMain>
  );
};

export default Movies;
