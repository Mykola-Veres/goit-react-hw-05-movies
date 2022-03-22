import { useLocation } from "react-router-dom";
import {ListMoviesStyled, ItemMoviesStyled, ImageFilmStyled, MovieTextStyled} from "./MoviesList.styled";
import PropTypes from 'prop-types';
import noFilm from '../../images/noFilm.jpg';

export default function MoviesList({items}) {
  const location = useLocation();
    return(
    <ListMoviesStyled >
      {items && items.map(({id, title, original_title, name, backdrop_path, release_date }) =>
        <ItemMoviesStyled state={{from: location}}
          to={`/movies/${id}`}
          key={id}>
            {backdrop_path ? (
          <ImageFilmStyled
            src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
            alt="Image Film"
          />
        ) : (
          <ImageFilmStyled src={noFilm} alt="no Film" />
        )}
          <p>{title ?? original_title ?? name}</p>
          <MovieTextStyled>{new Date(release_date).toLocaleDateString()}</MovieTextStyled>
        </ItemMoviesStyled>)}
    </ListMoviesStyled>
    )}

    MoviesList.propTypes = {
      items: PropTypes.array.isRequired
    };

