import styled from "styled-components";

export const Game = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 50px 0px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }

  p {
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    letter-spacing: 8px;
    color: ${({gameEnd}) => gameEnd || "#000000"};
  }
`;
