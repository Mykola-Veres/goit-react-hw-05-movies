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
`;

export const LinkStyled = styled(Link)`
padding: 20px;
border-radius: 8px;
font-size: 24px;
text-align: center;
`;

export const TitleStyled = styled.h3`
padding-top: 30px;
padding-left: 30px;
`;