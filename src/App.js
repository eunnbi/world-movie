import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MoviesProvider from "./contexts/movies";
import FavoritesProvider from "./contexts/favorites";
import Header from "./components/Header";
import Loading from "./components/common/Loading";
import NotFound from "./pages/NotFound";
import loadable from "@loadable/component";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

const Home = loadable(() => import("./pages/Home"));
const Search = loadable(() => import("./pages/Search"));
const Movies = loadable(() => import("./pages/Movies"));
const Favorites = loadable(() => import("./pages/Favorites"));
const Details = loadable(() => import("./pages/Details"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <FavoritesProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/movies/:type" element={<Movies />} />
                    <Route path="/favorites" element={<Favorites />} />
                  </Route>
                  <Route path="/movie/:id" element={<Details />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
        </FavoritesProvider>
      </MoviesProvider>
    </QueryClientProvider>
  );
}

export default App;
