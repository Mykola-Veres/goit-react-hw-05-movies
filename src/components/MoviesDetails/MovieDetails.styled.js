import { Link } from "react-router-dom";
import styled from "styled-components";


export const MoviesDetailsConteinerStyled = styled.article`
display: flex;
gap: 20px;
`;

export const ConteinerImagesMovies = styled.div`
max-width: 500px;
`;

export const ListAdditionalStyled = styled.ul`
display: flex;
gap: 20px;
padding: 20px;
`;

export const ItemAdditionalStyled = styled.li`
background-color: rgba(255, 255, 128, .9);
transform: scale(1);
  transition: transform 200ms linear;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const LinkStyled = styled(Link)`
padding: 20px;
border-radius: 8px;
font-size: 18px;
text-align: center;

`;

export const TitleStyled = styled.h3`
padding-top: 30px;
padding-left: 30px;
`;

export const ListInfoMoviesStyled = styled.li`
padding-bottom: 30px;
`;
