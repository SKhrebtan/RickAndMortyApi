import { styled } from "styled-components";

export const DeleteButton = styled.button`
padding: 8px 16px;
  font-size: 14px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display:block;
  margin: 0 auto;
  width: 150px;

  &:hover {
    background-color: #c0392b;
  }
  `