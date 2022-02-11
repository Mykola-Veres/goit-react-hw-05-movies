import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import * as MoviesAPI from "../../services/fetch-movies-api";

export default function Cast () {
  const {movieId} = useParams()
  const [cast, setCast] = useState(null) 

  useEffect (() => {
    async function fetchCredits () {
      try {
        if (!movieId) {return}
        const fetchCredits = await MoviesAPI.fetchMoviesCredits(movieId).then(item => item.cast)
        setCast(fetchCredits)
      }
      catch(error) {
        toast.error("This didn't work. No cast of actors!")
      }
    }
    fetchCredits()
  }, [movieId])

  return(
    <ul>
        {cast && cast.map(item => (
      <li key={item.id} >
        <div>
          <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : <p>No available foto of actor!</p>}
            alt={item.name} />
        </div>
        <p>{item.name}</p>
        <p>Character: {item.character}</p>
      </li>
      ))}
    </ul>    
  )}
