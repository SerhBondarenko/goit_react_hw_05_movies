import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MoviesGallery.module.css';

export default function MoviesGallery({ movies }) {
const notPhoto = 'https://i.ibb.co/NjvMgv7/poster.png';
  return (
    <ul className={s.Gallery}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.Item}>
            <Link to={`${movie.id}`} className={s.Link}>
              <img
                className={s.Image}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                    : `${notPhoto}`
                }
                alt={movie.title}
              />
              <h3 className={s.Title}>{movie.title}</h3>
             
            </Link>
          </li>
        ))}
    </ul>
  );
};


MoviesGallery.propTypes = {
  movies: PropTypes.array,
};