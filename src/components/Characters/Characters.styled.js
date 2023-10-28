import styled from 'styled-components';

export const StyledMainDiv = styled.div`
padding: 20px;

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
width: calc((100% - 80px) / 5);
`