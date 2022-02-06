import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavStyled = styled.nav`
display: flex;
gap: 20px;
padding: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
&.active {
  color: red;
}
`;

