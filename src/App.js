import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { MoviesProvider } from './contexts/movies';
import { FavoritesProvider } from './contexts/favorites';
import Header from './components/Header';
import Loading from './components/common/Loading';
import loadable from '@loadable/component';
import { QueryClient, QueryClientProvider } from 'react-query';
const Home = loadable(() => import("./pages/Home"));
const Search = loadable(() => import("./pages/Search"));
const Details = loadable(() => import("./pages/Details"));
const Movies = loadable(() => import("./pages/Movies"));
const Favorites = loadable(() => import("./pages/Favorites"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <FavoritesProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Loading/>}>
              <Routes>
                <Route element={<Header/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/search" element={<Search/>}/>
                  <Route path="/movies/:type" element={<Movies/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
                </Route>
                <Route path="/movie/:id" element={<Details/>}/>
              </Routes>
            </Suspense>
          </BrowserRouter>  
        </FavoritesProvider>
      </MoviesProvider>  
    </QueryClientProvider>
  );
}

export default App;
