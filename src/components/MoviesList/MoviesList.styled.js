import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const ListMoviesStyled = styled.ol`
display: flex;
align-items: center;
flex-direction: column;
padding-top: 20px;
list-style: none;
counter-reset: section;
`;

export const ItemMoviesStyled = styled(NavLink)`
counter-increment: section;
::before{
content: counters(section,".") ". ";
color: red;
font-weight: bold;
}
`
