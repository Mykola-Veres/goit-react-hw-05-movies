import axios from "axios";

export function fetchMoviesAPI () {
  const fetchMovies = axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=e00a8fe96730262954d4fe74242d0bb1`).then(response => response.data)
  return fetchMovies
}
// API Key: e00a8fe96730262954d4fe74242d0bb1

export function fetchMoviesById (id) {
  const fetchMoviesId = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e00a8fe96730262954d4fe74242d0bb1&append_to_response=images`).then(response => response.data)
  return fetchMoviesId
}

export function fetchMoviesCredits (id) {
  const fetchMoviesCredits = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e00a8fe96730262954d4fe74242d0bb1&language=en-US`).then(response => response.data)
  return fetchMoviesCredits
}

export function fetchMoviesReviews (id) {
  const fetchMoviesReviews = axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e00a8fe96730262954d4fe74242d0bb1&language=en-US&page=1`).then(response => response.data)
  return fetchMoviesReviews
}
