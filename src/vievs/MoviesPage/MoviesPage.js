import { useState, useEffect,} from 'react';
import { useSearchParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import SearchBar from '../../components/Searchar/SearchBar';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import { fetchSearchMovie } from "../../services/fetch-movie-api";

import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '' ;
 
  useEffect(() => {
    if (movieName === '') {
      setSearchParams({})
      return;
    }
    fetchSearchMovie(movieName).then(resp => {
      (console.log('results',resp))
      if (resp.results.length === 0) {
        toast.error('Ничего не найдено');
        return setMovies(null);
      }
      setMovies(resp.results);
    });
  }, [movieName, setSearchParams]);


  const handleFormSubmit = query => {
    setMovieName(query);
    setSearchParams({searchQuery: query})
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies &&<MoviesGallery movies={movies} />}
      <ToastContainer />
     
    </>
  )
};
