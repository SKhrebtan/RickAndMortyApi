import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-left: 40px;
padding-right: 40px;
.name {
  text-align: center;
  margin:0;
  height:42px;
  display: flex;
align-items: center;
justify-content: center;
transition: all 300ms linear;
@media screen and (min-width:768px) {
  font-size:20px;
}
@media screen and (min-width:1368px) {
  font-size:24px;
  height: 56px;
}
}
.form {
    display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
}
.label {

}

.input {
  display: inline-block;
  padding: 13px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.input:hover {
  background-color: #f0f0f0;
}

.input:focus {
  outline: none;
  border-color: #61de2a;
  box-shadow: 0 0 5px #61de2a;
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
color: white;
letter-spacing: 2px;
font-size: 18px;
margin-right: 10px;
transition: all 300ms linear;
&:hover {
    background-color: #61de2a;
color: black;
}
}

.loader {
  margin: 30px auto;
}
.show-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.show-btn:hover {
  background-color: #61de2a;
}

.show-btn:active {
  background-color: #1f6697;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.image {
    width: 100%;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s ease;
}

`
export const StyledShowButton = styled.button`
text-decoration: none;
padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: yellow;
  color: #2b2b2b;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #61de2a;
  }
`

export const StyledList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 20px;
padding-left: 20px;
width:100%;
.liwka{
  display:flex;
  flex-direction: column;
  gap: 15px;
  width: calc((100% - 40px) / 2);
text-decoration: none;
@media screen and (min-width: 768px) {
    width: calc((100% - 40px) / 3);
}
@media screen and (min-width: 1368px) {
    width: calc((100% - 60px) / 4);
}
}
@media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
}
`

export const StyledLink = styled(Link)`
text-decoration: none;
width: 100%;
.image {
    width: 100%;
}
&:hover .name {
  color: #61de2a;
}
&:hover .image {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }
`