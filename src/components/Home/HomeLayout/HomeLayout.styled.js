import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
export const StyledLinksBlock = styled.div`
margin: 0 auto;
padding-top: 20px;
display: flex;
gap: 50px;
justify-content: center;
`
export const StyledNavLinkTitle = styled(NavLink)`
text-decoration: none;
  padding: 10px 15px;
  background: linear-gradient(120deg, #3498db, #8e44ad);
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
&.active {
    color:#61de2a;
}
`