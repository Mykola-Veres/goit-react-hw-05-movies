import { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import * as MoviesAPI from "../../services/fetch-movies-api";
import {ListMoviesStyled, ItemMoviesStyled} from "./HomePage.styled"

// results
// title || original_title,   genre_ids[5,4],  backdrop_path + poster_path +...,   overview:,   id:
  // MoviesAPI.fetchMoviesAPI().

  const useFetchTrendMovies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);  
    
    useEffect(() => {
      async function fetchTrendMovies () {
        setLoading(true);
        try {
          const items = await MoviesAPI.fetchMoviesAPI().then(data => data.results)
          setItems(items)
        }
        catch (error) {}
        finally {setLoading(false)}
      }
      fetchTrendMovies()
    }, [])
  return {items, loading}  }

export default function HomePage() {  
  const {items, loading} = useFetchTrendMovies()

  return(
    <div>
      <h1>Trending today</h1>
      {loading && "Loading"}
      <ListMoviesStyled>{
        items.map(item => (<ItemMoviesStyled to={`movies/${item.id}`} key={item.id}>{item.title ?? item.original_title ?? item.name}</ItemMoviesStyled>))
        }</ListMoviesStyled>
    </div>
  )
}