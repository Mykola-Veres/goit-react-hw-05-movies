import { Outlet, useLocation, useParams } from "react-router-dom";
import {MoviesDetailsConteinerStyled, ConteinerImagesMovies, LinkStyled, TitleStyled} from "./MovieDetails.styled";
import ImageDummy from "../../images/ImageDummy.png";
import {ListAdditionalStyled, ItemAdditionalStyled} from "./MovieDetails.styled"

export default function MovieDetails({item: {title, name, poster_path, backdrop_path, vote_average, overview, genres}}) {
  const {movieId} = useParams();
  const locationCast = useLocation();

  return(
    <>     
      <MoviesDetailsConteinerStyled>
        <ConteinerImagesMovies>
          <img src={poster_path || backdrop_path ? `https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}` : ImageDummy}
            alt={title || name}/>
        </ConteinerImagesMovies>
        <div>   
          <h2>{title || name}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(" ")}</p>
        </div>         
      </MoviesDetailsConteinerStyled>
        <div>
          <TitleStyled>Additional information</TitleStyled>
          <ListAdditionalStyled>
            <ItemAdditionalStyled><LinkStyled to={`/movies/${movieId}/cast`} state={{from: locationCast?.state?.from || "/" }}>Cast</LinkStyled>
            </ItemAdditionalStyled>
            <ItemAdditionalStyled><LinkStyled to={`/movies/${movieId}/reviews`} state={{from: locationCast?.state?.from || "/" }}>Reviews</LinkStyled>  
            </ItemAdditionalStyled>
          </ListAdditionalStyled>
          <Outlet />      
        </div>
      </>   
  )}
