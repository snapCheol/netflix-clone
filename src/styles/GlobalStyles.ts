import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    background-color: rgb(20, 20, 20);
    font: 1rem/1.5 "Spoqa Han Sans",sans-serif;
    color: #fff;
  }
  
  body, 
  body *, 
  body::after,
  body::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .a11yHidden {
      position: absolute;
      overflow: hidden;
      visibility: hidden;
      clip: rect(0,0,0,0);
      clip-path: polygon(0 0, 0 0, 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      white-space: nowrap; 
    } 
  

    button {
      cursor: pointer; 
      padding: 0; 
      border: 0;
      background: none;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
`;
