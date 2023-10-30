import styled from 'styled-components';

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