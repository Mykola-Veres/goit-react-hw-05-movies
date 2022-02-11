import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled.nav`
display: flex;
gap: 20px;
padding: 20px;
text-align: center;
`;

export const NavLinkStyled = styled(NavLink)`
&.active {
  color: red;
  background-color: rgb(222, 160, 30);
}
width: 120px;
background-color: rgb(255, 255, 128);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

