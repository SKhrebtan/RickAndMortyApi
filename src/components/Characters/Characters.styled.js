import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
width: 100%;
.image{
  width: 100%;
}
}
`
export const StyledLinksBlock = styled.div`
margin: 0 auto;
padding-top: 20px;
display: flex;
gap: 50px;
justify-content: center;
`
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: yellow;
  color: #2b2b2b;
  cursor: pointer;
  transition: background-color 0.3s ease;
&.active{
     background-color: #61de2a;
}
  &:hover {
    background-color: #61de2a;
  }
`
export const StyledMainDiv = styled.div`
padding: 20px;
.loader {
   position: absolute;
 top: 75px;
  left: 50%;
  transform: translateX(-50%);
}
.suspense-div{
    display: flex;
     align-items: center;
    flex-direction: column;
}

.more-btn{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
`;

export const StyledList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export const StyledLi = styled.li`
display: flex;
flex-direction: column;
gap:20px;
align-items: center;
width: calc((100% - 20px) / 2);
@media screen and (min-width: 768px){
    width: calc((100% - 40px) / 3)
}
@media screen and (min-width: 1368px){
   width: calc((100% - 80px) / 5)
`

export const StyledName = styled.p`
font-size:18px;
color: black;
text-align: center;
`