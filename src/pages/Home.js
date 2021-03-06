import { useContext } from "react";
import Loading from "../components/common/Loading";
import SectionTitle from "../components/Home/SectionTitle";
import HomeMovieList from "../components/Home/HomeMovieList";
import { moviesContext } from "../contexts/movies";
import { useScroll } from "../hooks";

const Home = () => {
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
              path={`/movies/${entrie[0]}?page=1`}
            />
            <HomeMovieList movies={entrie[1].slice(0, 20)} />
          </section>
        ))}
    </main>
  );
};

export default Home;
