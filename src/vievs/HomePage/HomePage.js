import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense  } from 'react'

import fetchTrendingMovie from '../../services/fetch-movie-api'

const MoviesGallery = lazy(() => import('../../components/MoviesGallery/MoviesGallery'));

const HomePage = () => {

    const [trendFilms, setTrendFilm] = useState(null);
    //const location = useLocation();
    
    useEffect(() => {
        fetchTrendingMovie().then(data => {
        setTrendFilm(data.results);
        })
    }, [])

 return (
   <>
    <Suspense fallback="loading..."></Suspense>
  <MoviesGallery movies={trendFilms} />
  <Suspense />
  </>
 );
}

export default HomePage;

/** <main style={{ padding: "1rem 0" }}>
     <hr />
     <h2>Trending today</h2>

     {trendFilms && (
       <ul>
         {trendFilms.map((film) => (
           <li key={film.id}>
             <Link to={`movies/${film.id}`} state ={{from: location}} >{film.original_title}</Link>
           </li>
         ))}
       </ul>
     )}
   </main> */