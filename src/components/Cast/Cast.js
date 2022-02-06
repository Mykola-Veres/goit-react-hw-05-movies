import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as MoviesAPI from "../../services/fetch-movies-api";

export default function Cast () {
  const {movieId} = useParams()
  const [cast, setCast] = useState(null) 

  useEffect (() => {
    MoviesAPI.fetchMoviesCredits(movieId).then(item => item.cast).then(setCast)    
  }, [movieId])  

  return(
    <ul>
        {cast && cast.map(item => (
      <li key={item.id}>
        <div><img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt={item.name} />
        </div>
        <p>{item.name}</p>
        <p>Character: {item.character}</p>
      </li>
      ))}
    </ul>    
  )}

  // id profile_path name character /zsfsydnW2joe6sRP62gF1OeNeQN.jpg

  //https://image.tmdb.org/t/p/w500/zsfsydnW2joe6sRP62gF1OeNeQN.jpg