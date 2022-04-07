import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/fetch-movie-api";

export default function Reviews() {
  const { castId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(castId).then((data) => {
      setReviews(data.results);
    });
  }, [castId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map((review) => {
          return (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}
