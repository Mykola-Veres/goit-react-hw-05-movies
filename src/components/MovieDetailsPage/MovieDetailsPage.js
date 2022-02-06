import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import * as MoviesAPI from "../../services/fetch-movies-api";
import toast from 'react-hot-toast';
import { FaArrowCircleLeft } from 'react-icons/fa';
import {MoviesDetailsConteinerStyled} from "./MovieDetailsPage.styled";

export default function MovieDetailsPage() {  
  const {movieId} = useParams()
  const [movies, setMovies] = useState(null)
  
  
  useEffect(()=> {
    async function fetchMoviesId () {
      try {
        const fetchMovies = await MoviesAPI.fetchMoviesById(movieId)
      setMovies(fetchMovies)
      }
      catch(error) {
        toast.error("This didn't work. Thumping went wrong! Try again!!!")
      }
    }
    fetchMoviesId()
  }, [movieId])

  

  
  return(
    <div>      
      <Link to="/"><FaArrowCircleLeft/> Home page</Link>
      {movies &&
      <MoviesDetailsConteinerStyled>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path ?? movies.backdrop_path}`}
            alt={movies.title || movies.name}/>
        </div>
        <div>   
          <h2>{movies.title || movies.name}</h2>
          <p>User Score:{movies.vote_average}</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <p>{movies.genres.map(genre => genre.name).join(" ")}</p>
        </div>         
      </MoviesDetailsConteinerStyled>}

        <div>
          <h3>Additional information</h3>
          <ul>
            <li><Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link>  
            </li>
          </ul>
          <Outlet />      
        </div>
    </div>
  )
}


