import {NavLinkStyled, NavStyled} from "./Navigation.styled";


export default function Navigation() {
  return(
    <div>      
      <NavStyled>        
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="movies">Movies</NavLinkStyled>
      </NavStyled>   
    </div>
  )
}