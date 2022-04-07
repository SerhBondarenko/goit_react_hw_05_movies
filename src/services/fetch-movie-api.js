const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "3bcb9c362d567dc87ce4f986b1e52bec";

export default async function fetchTrendingMovie() {
  return await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`).then((data) => {
    return data.json();
  });
}


export async function  fetchSearchMovie(film) {
  return await fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${film}&language=en-US&include_adult=false`).then(data=>{
      return data.json()
  })
}

export async function fetchMovieId(filmId) {
  return await fetch(
    `${BASE_URL}/movie/${filmId}?api_key=${KEY}&language=en-US&include_adult=false`
  ).then((data) => {
    return data.json();
  });
}

export async function fetchMovieCredits(filmId) {
  return  await fetch(`${BASE_URL}/movie/${filmId}/credits?api_key=${KEY}`).then(data=>{
      return data.json()
  })
};


export async function fetchMovieReviews (movieid) {
  return  await fetch(`${BASE_URL}/movie/${movieid}/reviews?api_key=${KEY}&language=en-US&include_adult=false`).then(data=>{
      return data.json()
  })
}