import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
background-color: #61de2a;
padding: 20px;
`
    ;
export const List = styled.ul`
list-style:none;
display: flex;
gap: 20px;
margin: 0;
padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
text-decoration:none;
color: blue ;
`