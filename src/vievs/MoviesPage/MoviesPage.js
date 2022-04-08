
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import SearchBar from '../../components/Searchar/SearchBar';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import { fetchSearchMovie } from "../../services/fetch-movie-api";

import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  let navigate = useNavigate();
  const location = useLocation();
  const searchURL = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!movieName) {
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
  }, [movieName, searchURL]);

  const handleFormSubmit = query => {
    setMovieName(query);
    navigate({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer />
      <MoviesGallery movies={movies} />
    </>
  );
}



/*


import React from "react";
import {Link, useSearchParams, useLocation } from "react-router-dom";
import {useState, useEffect } from "react";
import { fetchSearchMovie } from "../../services/fetch-movie-api";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { ImSearch } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import s from './MoviesPage.module.css'

export default function MoviesPage (){
  const [searchName, setSearchName]=useState('')
  const [data, setData]=useState([]);
  const notPhoto = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png';
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();
  let query = searchParams.get('query');

  useEffect(()=>{
      if(!query){
        return}
      feachCartImg()
      setSearchParams('')  
    },[query])

    

    const feachCartImg=()=>{
      fetchSearchMovie(searchName)
      .then(data =>{
        setData(data.results) 
                
  })}
 
  const handleNameChange = event => {
   setSearchName(event.currentTarget.value.toLowerCase() );
   setSearchParams({query: event.currentTarget.value })
   };
   
     return(
         <>
<header className={s.Searchbar}>
 <form className={s.SearchForm} >
 <button type="submit" className={s.Searchbutton}>
   <ImSearch/>
     <span className={s.button__label}>Search</span>
   </button>
   <input
     className={s.input}
     type="text"
     autoComplete="off"
      autoFocus
     value={searchName}
     onChange={handleNameChange}
     placeholder="Search images and photos"
   />
 </form>
 
 </header>

<ul className={s.ImageGallery}>
{data &&
      data.map(el => {
        return (
          <li key={el.id} className={s.ImageGalleryItem}  >
            <Link to={`${el.id}`}  state = {{from: location}} className={s.Link}  >
            <img className={s.ImageGalleryItemImage} alt='no poster' width={100} src={el.poster_path?`https://image.tmdb.org/t/p/w300${el.poster_path}`:notPhoto} />
            <h3>{el.original_title}</h3>
            </Link>
          </li>
        );
      })}
      </ul>
         </>
 ) };

*/