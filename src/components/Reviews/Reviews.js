import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import * as MoviesAPI from "../../services/fetch-movies-api";

export default function Reviews () {
  const {movieId} = useParams()
  const [reviews, setReviews] = useState(null)  

  useEffect (()=> {
    async function fetchReviews () {
      try {
        if (!movieId) {return}
        const fetchReview = await MoviesAPI.fetchMoviesReviews(movieId).then(item => item.results)
        if (fetchReview.length === 0) {return setReviews(null)}
        setReviews(fetchReview)
      }
      catch(error) {        
        toast.error("We don't have any reviews for this movie!")
      }
    }
    fetchReviews()
  }, [movieId])  

  return(
    <ul>
      {!reviews && <p>We don't have any reviews for this movie!</p>}
      {reviews && reviews.map( item => (<li key={item.id}>
        <h3>{item.author}</h3>
        <p>{item.content}</p>
      </li>
      ))}
    </ul>
  )}
