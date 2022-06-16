import { useContext } from "react";
import Loading from "../components/common/Loading";
import SectionTitle from "../components/Home/SectionTitle";
import HomeMovieList from "../components/Home/HomeMovieList";
import { moviesContext } from "../contexts/movies";
import { useCloseNav, useScroll } from "../hooks";

const Home = () => {
  useCloseNav();
  useScroll([]);
  const { loading, movies } = useContext(moviesContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      {movies &&
        Object.entries(movies).map((entrie, index) => (
          <section key={index}>
            <SectionTitle
              title={entrie[0].replace("_", " ")}
              path={`/movies/${entrie[0]}`}
            />
            <HomeMovieList movies={entrie[1].slice(0, 20)} />
          </section>
        ))}
    </main>
  );
};

export default Home;
