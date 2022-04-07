import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom'
import Navigation  from './components/Navigation/Navigation';

/*const HomePage = lazy(() => import('./components/HomePage').then(module =>({default: module.HomePage})));*/

  const HomePage = lazy(() => import('./components/HomePage'));
  const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));
  const MoviesPage = lazy(() => import('./components/MoviesPage'));
  const NotFoundPage = lazy(() => import('./components/NotFoundPage/NotFoundPage'));

  
function App() {
  return (
    <div>
          <Navigation />
          <Suspense fallback="loading...">
      <Routes>
          <Route path="/goit_react_hw_05_movies" element={<HomePage />} />
          <Route path="/goit_react_hw_05_movies/movies/:movieId/*" element={<MovieDetailsPage />} /> 
          <Route path="/goit_react_hw_05_movies/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;

