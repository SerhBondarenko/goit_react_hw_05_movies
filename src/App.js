import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom'
import Navigation  from './components/Navigation/Navigation';
import Container from './components/Container';

/*const HomePage = lazy(() => import('./components/HomePage').then(module =>({default: module.HomePage})));*/

  const HomePage = lazy(() => import('./vievs/HomePage'));
  const MovieDetailsPage = lazy(() => import('./vievs/MovieDetailsPage'));
  const MoviesPage = lazy(() => import('./vievs/MoviesPage'));
  const NotFoundPage = lazy(() => import('./components/NotFoundPage/NotFoundPage'));

  
function App() {
  return (
      <Container>
          <Navigation />
          <Suspense fallback="loading...">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:movieId/*" element={<MovieDetailsPage />} /> 
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} /> 
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      </Container>
    
  );
}

export default App;

