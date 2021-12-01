import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }

  
.section::-webkit-scrollbar {
  width: 8px;
}

.section::-webkit-scrollbar-track {
  background-color: #e4e4e4;
}

.section::-webkit-scrollbar-thumb {
  border: 6px solid rgba(0, 0, 0, 0.18);
  border-left: 0;
  border-right: 0;
  background-color: #8070d4;
}


  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    // background: ${props => props.theme.colors.background1};
    background-color: #020716;
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;