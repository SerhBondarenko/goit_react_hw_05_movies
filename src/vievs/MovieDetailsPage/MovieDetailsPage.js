import {NavLink,Route,Routes,useNavigate,useParams} from 'react-router-dom';
import { useState, useEffect,lazy,Suspense, } from 'react';
import { fetchMovieId } from '../../services/fetch-movie-api';
import s from './MovieDetailsPage.module.css';

  const Cast = lazy(() => import('../Cast'));
  const Reviews = lazy(() => import('../Reviews'));

  const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    fetchMovieId(movieId).then(data => {
        console.log(data) 
      setMovie(data);
    });
  }, [movieId]);

  console.log('movie', movie);

  return (
    <div className={s.box}>
      <button onClick={goBack}> Go Back </button>
      <h3>Movie</h3>

      {movie && (
        <>
          <img
            width={250}
            src={movie.poster_path ? `${imgUrl}${movie.poster_path}` : ''}
            alt={movie.id}
          />
          <h3>
            {movie.title} ({movie.release_date})
          </h3>
          <h3>{`User Score: ${movie.vote_average * 10}%`}</h3>
          <h3>Overview: </h3>
          <p>{movie.overview}</p>
          <h3>Genre: </h3>
          <ul>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              {' '}
              <NavLink to={`${movie.id}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${movie.id}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <hr />

          <Suspense fallback="loading...">
            <Routes>
              <Route path="/:castId/cast" element={<Cast />} />
              <Route path="/:castId/reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
