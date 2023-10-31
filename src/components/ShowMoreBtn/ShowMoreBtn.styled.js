import styled from 'styled-components';

export const StyledShowMoreBtn = styled.button`
  display: block;
  margin: 20px auto;
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

&:hover {
  background-color: #61de2a;
}

&:active {
  background-color: #1f6697;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
`