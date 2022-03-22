import {NavLinkStyled, NavStyled, NavConteinerStaled} from "./Navigation.styled";

export default function Navigation() {
  return(
    <NavConteinerStaled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </NavStyled>
    </NavConteinerStaled>
  )
}
