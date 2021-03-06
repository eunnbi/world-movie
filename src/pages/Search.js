import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../components/common/Loading";
import MovieList from "../components/common/MovieList";
import SearchForm from "../components/SearchForm";
import { searchMovies } from "../lib/api";
import { useQueryParam } from "../hooks/useQueryParam";
import styled from "styled-components";

const SearchMain = styled.main`
  padding: 3rem 0;
`;

const NotFound = styled.p`
  margin-top: 5px;
  color: #bb2524;
  font-size: 15px;
  text-transform: capitalize;
  letter-spacing: 2px;
`;

function Search() {
  const navigate = useNavigate();
  const queryParam = useQueryParam("keyword", "");
  const [keyword, setKeyword] = useState(queryParam);
  const { isLoading, data } = useQuery(["search", keyword], searchMovies, {
    refetchOnWindowFocus: false,
  });
  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    navigate(`?keyword=${keyword}`);
  }, [keyword]);
  return (
    <SearchMain>
      <SearchForm keyword={keyword} onSearch={onSearch} />
      {isLoading ? (
        <Loading />
      ) : keyword !== "" && data.length === 0 ? (
        <NotFound>Movie Not Found!</NotFound>
      ) : (
        <section>
          <MovieList movies={data} />
        </section>
      )}
    </SearchMain>
  );
}

export default Search;
