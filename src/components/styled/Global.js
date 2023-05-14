import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
${reset}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

*{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
`;