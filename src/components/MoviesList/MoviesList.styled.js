import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ListMoviesStyled = styled.ol`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding-top: 20px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  gap: 24px;
  /* grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); */
counter-reset: section;
`;

export const ItemMoviesStyled = styled(NavLink)`
width: 240px;
  display: block;
  padding: 5px;
  background-color: ${props => props.theme.colors.buttonBg};
  transform: scale(1);
  transition: transform 250ms linear;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.05);
    cursor: pointer;
  }
counter-increment: section;
::before{
content: counters(section,".") ". ";
color: red;
font-weight: bold;
}`;

export const ImageFilmStyled = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
`;

export const MovieTextStyled = styled.p`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
