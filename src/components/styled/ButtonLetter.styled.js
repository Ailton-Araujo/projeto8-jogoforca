import styled from "styled-components";

export const ButtonLetter = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #e1ecf4;
  color: #39739d;
  cursor: pointer;

  &:disabled {
    background: #9faab5;
    color: #798a9f;
    cursor: not-allowed;
  }
`;
