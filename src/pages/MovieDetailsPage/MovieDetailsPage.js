import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import * as MoviesAPI from "../../services/fetch-movies-api";
import toast from 'react-hot-toast';
import { FaArrowCircleLeft } from 'react-icons/fa';
import MovieDetails from "../../components/MoviesDetails";  
import Loader from "../../components/Loader";

export default function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();   
  const {movieId} = useParams()
  const [movies, setMovies] = useState(null)

  const location2 = location
  
  useEffect(()=> {
    async function fetchMoviesId () {
      setLoading(true);
      try {
        const fetchMovies = await MoviesAPI.fetchMoviesById(movieId)
      setMovies(fetchMovies)
      }
      catch(error) {
        toast.error("This didn't work. Thumping went wrong! Try again!!!")
      }
      finally{setLoading(false)}
    }
    fetchMoviesId()
  }, [movieId])  
  
  return(
    <div>      
      <Link to="/"><FaArrowCircleLeft/> Home page </Link>
      <Link to={location?.state?.from ?? "/movies"} state={{from: location}}><FaRegArrowAltCircleLeft/> Go Back</Link>
      {loading && <Loader/>}     
      {movies && <MovieDetails item={movies} location={location2}></MovieDetails>}
    </div>
  )
}


