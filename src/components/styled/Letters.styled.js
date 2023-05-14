import styled from "styled-components";

export const Letters = styled.div`
  max-width: 720px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;

  @media screen and (orientation: portrait) {
    justify-content: center;
    margin: 0px,15px;
}
`;