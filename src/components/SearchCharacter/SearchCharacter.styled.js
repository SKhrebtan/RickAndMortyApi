import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.form {
    display: flex;
}
.label {

}
.input{
    height: 44px;
    padding :0;
}
.submit-btn{
    cursor: pointer;
    display: inline-block;
padding: 10px;
width: 140px;
font-weight: 500;
margin-left: 10px;
border-color: transparent;
border-radius: 10px;
background-color: crimson;
color: #61de2a;
letter-spacing: 2px;
font-size: 18px;
transition: all 300ms linear;
&:hover {
    background-color: #61de2a;
color: crimson;
}
}

.show-btn {
    display: block;
    margin: 0 auto;
}

.image {
    width: 100%;
}

`

export const StyledList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 20px;
padding-left: 20px;

@media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
}
`

export const StyledLink = styled(Link)`
width: calc((100% - 40px) / 2);
text-decoration: none;
@media screen and (min-width: 768px) {
    width: calc((100% - 40px) / 3);
}
@media screen and (min-width: 1368px) {
    width: calc((100% - 60px) / 4);
}
`