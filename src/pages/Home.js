import { useContext } from "react";
import Loading from "../components/common/Loading";
import SectionTitle from "../components/HomeSection/SectionTitle";
import HomeMovieList from "../components/HomeSection/HomeMovieList";
import { moviesContext } from "../contexts/movies";
import { useCloseNav, useScroll } from "../hooks";
import styled from "styled-components";

const HomeMain = styled.main`
  padding: 5rem 2rem 0;
  width: 85vw;
  max-width: 1200px;
  margin: 110px auto 0;
  @media screen and (max-width: 1000px) {
    padding: 100px 0 0;
  }
`;

const HomeSection = styled.section`
  margin-bottom: 80px;
`;

const Home = () => {
  useCloseNav();
  useScroll([]);
  const { loading, movies } = useContext(moviesContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <HomeMain className="home__main">
      {movies &&
        Object.entries(movies).map((entrie, index) => (
          <HomeSection key={index}>
            <SectionTitle
              title={entrie[0].replace("_", " ")}
              path={`/movies/${entrie[0]}`}
            />
            <HomeMovieList movies={entrie[1].slice(0, 20)} />
          </HomeSection>
        ))}
    </HomeMain>
  );
};

export default Home;
