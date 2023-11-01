import { styled } from "styled-components";

export const AddFavoriteButton = styled.button`
 padding: 10px 20px;
  font-size: 16px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display:block;
  margin: 0 auto;
  max-width: 150px;
  &:hover {
    background-color: #219653;
  }
  `