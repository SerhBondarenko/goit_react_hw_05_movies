import { useState, useEffect } from 'react';
//import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import SearchBar from '../../components/Searchar/SearchBar';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import { fetchSearchMovie } from "../../services/fetch-movie-api";

import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  //let navigate = useNavigate();
  //const location = useLocation();
 
  useEffect(() => {
    if (!movieName) {
      return;
    }
    setMovieName('');
    fetchSearchMovie(movieName).then(resp => {
      (console.log('results',resp))
      if (resp.results.length === 0) {
        toast.error('Ничего не найдено');
        return setMovies(null);
      }
      setMovies(resp.results);
    });
  }, [movieName,]);

  const handleFormSubmit = query => {
    setMovieName(query);
   //navigate({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies &&<MoviesGallery movies={movies} />}
      <ToastContainer />
     
    </>
  )
};
