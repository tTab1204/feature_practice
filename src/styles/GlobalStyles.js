import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

export const GlobalStyles = createGlobalStyle` 
    ${reset}
   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #fff;
        color: #000;
    }
    input, button {
        border: none;
        outline: none;
    }

     a{
        text-decoration: none;
        color: inherit;
    }
`;
