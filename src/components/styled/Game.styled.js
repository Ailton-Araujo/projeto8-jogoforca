import styled from "styled-components";

export const Game = styled.div`
  max-width: 1050px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 30px 0px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }

  p {
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    letter-spacing: 8px;
    color: ${({ gameEnd }) => gameEnd || "#000000"};
  }

  @media screen and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;


    div {
      width: 90%;
      align-items: center;
      margin: 15px, 0px, 5px;
    }
    button {
      width: 80%;
    }
  }
`;
