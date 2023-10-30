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
justify-content: center;
gap: 20px;
margin: 0;
padding: 0;

@media screen and (min-width: 768px) {
    gap: 40px;
}
@media screen and (min-width: 1368px) {
    gap: 80px;
}
`;

export const StyledNavLink = styled(NavLink)`
text-decoration:none;
color: blue ;
@media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 2px;
}

`