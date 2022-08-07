import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        background-color: #22254b;
    }
    input:focus{
        appearance: none;
        outline: none;
    }
`;

export default GlobalStyle
