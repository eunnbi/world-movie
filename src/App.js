import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { MoviesProvider } from './contexts/movies';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import loadable from '@loadable/component';
import { QueryClient, QueryClientProvider } from 'react-query';
const Home = loadable(() => import("./pages/Home"));
const About = loadable(() => import("./pages/About"));
const Search = loadable(() => import("./pages/Search"));
const Detail = loadable(() => import("./pages/Detail"));
const Movies = loadable(() => import("./pages/Movies"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route element={<Navigation/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/movies/:type" element={<Movies/>}/>
              </Route>
              <Route path="/movie/:id" element={<Detail/>}/>
            </Routes>
          </Suspense>
        </BrowserRouter>  
      </MoviesProvider>  
    </QueryClientProvider>
    
    
  );
}

export default App;
