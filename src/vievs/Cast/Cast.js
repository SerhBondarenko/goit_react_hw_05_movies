import {  useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import {fetchMovieCredits} from "../../services/fetch-movie-api";
import s from './Cast.module.css'

export default function Cast() {
  const { castId } = useParams();
  const [actors, setActors] = useState([]);
  const notPhoto = "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png";
  useEffect(() => {
    fetchMovieCredits(castId).then((data) => {
      console.log(data)
      setActors(data.cast);
    });
  }, [castId]);

  const actorsEl = actors.slice(0, 5);
  return (
    <ul className = {s.box}>
      {actorsEl.map((actor) => {
        return (
          <li key={actor.cast_id}  className={s.item }>
            <img
              width={100}
              height={140}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : notPhoto
              }
              alt={actor.name}
            />
            <h4>{actor.name}</h4>
          </li>
        );
      })}
    </ul>
  );
};
