import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLocation, useSearchParams } from "react-router-dom"
import * as MoviesAPI from "../../services/fetch-movies-api"
import MoviesList from "../../components/MoviesList";
import {SearchStyled, FormStyled, ButtonStyled} from "./MoviesPage.styled";
import Loader from "../../components/Loader";

export default function MoviesPageSearch () {
const [loading, setLoading] = useState(false);
const [movies, setMovies] = useState(null)
const [searchParams, setSearchParams] = useSearchParams();
const location = useLocation();
const query = searchParams.get("query")

  const handlerSubmitUser = (event) => {
    event.preventDefault()
    const userQuery = event.currentTarget.elements.query.value  
    setSearchParams({query: userQuery})
  }

  useEffect (()=> {
    if (!query) {return}
    async function fetchMoviesQ () {
      setLoading(true)
      try {
        const fetchMovies = await MoviesAPI.fetchMoviesQuery(query).then(item => item.results)
        setMovies(fetchMovies)
      }
      catch(error) {
        toast.error("This didn't work. Thumping went wrong! Try again!!!")
      }
      finally{setLoading(false)}
    }
    fetchMoviesQ ()    
  },[query])

return(
  <>  
  <Link to={`/`} ><FaRegArrowAltCircleLeft/> Trending movies </Link>
  <Link to={location?.state?.from ?? "/"} state={{from: location}}><FaRegArrowAltCircleLeft/> Go Back </Link> 
  <FormStyled onSubmit={handlerSubmitUser}>
    <SearchStyled 
        name="query"
        required        
        id="film-name"
        aria-label="search"
        minLength="2"
        type="text"                  
        autoComplete="off"
        autoFocus
        placeholder="Search movies"        
    />
    <ButtonStyled  type="submit">
      <span>search</span>
    </ButtonStyled>
  </FormStyled>
  {loading && <Loader/>}
  {movies && <MoviesList items={movies}></MoviesList>}
  </>
)}