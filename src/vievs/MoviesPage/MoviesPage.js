import { useState, useEffect,} from 'react';
import { useSearchParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import SearchBar from '../../components/Searchar/SearchBar';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import { fetchSearchMovie } from "../../services/fetch-movie-api";

import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
 
  useEffect(() => {
const searchQuery = searchParams.get('query');
if (!searchQuery) return;
    fetchSearchMovie(searchQuery).then(resp => {
      (console.log('results',resp))
      if (resp.results.length === 0) {
        toast.error('Ничего не найдено');
        return setMovies(null);
      }
      setMovies(resp.results);
    });
  }, [query, searchParams]);


  const handleFormSubmit = query => {
    setSearchParams({query: query})
    setQuery(searchParams.get('query'));
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies &&<MoviesGallery movies={movies} />}
      <ToastContainer />
     
    </>
  )
};
