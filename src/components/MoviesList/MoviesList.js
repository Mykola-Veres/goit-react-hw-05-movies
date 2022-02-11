import { useLocation } from "react-router-dom";
import {ListMoviesStyled, ItemMoviesStyled} from "./MoviesList.styled";
import PropTypes from 'prop-types';

export default function MoviesList({items}) {
  const location = useLocation();  
    return(  
    <ListMoviesStyled >     
      {items && items.map(({id, title, original_title, name }) =>      
        <ItemMoviesStyled state={{from: location}}
          to={`/movies/${id}`}
          key={id}>
          {title ?? original_title ?? name}       
        </ItemMoviesStyled>)}
    </ListMoviesStyled>  
    )}

    MoviesList.propTypes = {
      items: PropTypes.array.isRequired    
    };
  
