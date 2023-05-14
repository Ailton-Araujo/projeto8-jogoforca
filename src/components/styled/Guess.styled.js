import styled from "styled-components";

export const Guess = styled.div`
  max-width: 720px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 15px;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

  input {
    width: 353px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    &:disabled {
      cursor: not-allowed;
    }
  }

  button {
    width: 100px;
    height: 40px;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
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
  }

  @media screen and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px, 15px;

    input {
      width: 90%;
    }
  }
`;
