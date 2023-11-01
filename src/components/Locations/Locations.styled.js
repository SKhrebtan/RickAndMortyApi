import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainDiv = styled.div`
.loader {
    position: absolute;
 top: 75px;
  left: 50%;
  transform: translateX(-50%);
}
`
export const StyledList = styled.ol`
display: grid;
gap: 20px;
grid-template-columns: 40% 40%;
padding-left: 40px;
@media screen and (min-width: 768px){
    grid-template-columns: 30% 30% 30%;
}
@media screen and (min-width: 1368px){
    grid-template-columns: 22% 22% 22% 22%;
}
`

export const StyledLink = styled(Link)`
text-decoration: none;
`