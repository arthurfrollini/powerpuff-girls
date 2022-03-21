import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;

    --primary: #F27BA4;
    --secondary: #84B5EB;
    --secondary-light: rgba(132, 181, 235, 0.6);
    --tertiary: #88C97A;
    --black: #333; 
    --white: #FFFFFF;
    --alert: #FF7061;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-family: 300;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
