import { useEffect, useState } from "react"
import * as MoviesAPI from "../../services/fetch-movies-api";
import MoviesList from "../MoviesList";
import {TitleStyled} from "./HomePage.styled"

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
      <TitleStyled>Trending today</TitleStyled>
      {loading && <p>Loading...</p>}
      {items && <MoviesList items={items}></MoviesList>}  
    </div>
  )
}