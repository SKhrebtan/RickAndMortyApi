import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.show-btn {
    display: block;
    margin: 0 auto;
}
`

export const StyledList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export const StyledLink = styled(Link)`
width: calc((100% - 20px) / 2);

@media screen and (min-width: 768px) {
    width: calc((100% - 40px) / 3);
}
@media screen and (min-width: 1368px) {
    width: calc((100% - 60px) / 4);
}
`