//CSS in Ts

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding: 0;
    box-sizing: border-box;

 }
 body{
    background-color: #f7f7f7
 }

 body , button , input {
   font-family: "Poppins", sans-serif;
 }
`;
