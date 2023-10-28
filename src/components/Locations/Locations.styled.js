import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledList = styled.ol`
display: grid;
gap: 20px;
grid-template-columns: 1fr 1fr 1fr;
`

export const StyledLink = styled(Link)`
text-decoration: none;
`