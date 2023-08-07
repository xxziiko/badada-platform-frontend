import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        background-color: #ffffff;
        font-family: Pretendard;
    }
    a{
        color : inherit;
        text-decoration: none;
        cursor: pointer;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    } 
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    button {
        cursor: pointer;
    }
    span, p {
        word-wrap: break-word;
        word-break: keep-all;
    }
`;

export default GlobalStyle;
