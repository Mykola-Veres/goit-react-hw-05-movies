import { useLocation } from "react-router-dom";
import {ListMoviesStyled, ItemMoviesStyled} from "./MoviesList.styled";

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
