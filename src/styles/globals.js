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
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;

    -webkit-touch-callout:none; /* 롱탭일 시 팝업창 차단하기 */
    
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 롱탭 배경 파란색으로 하이라이트되는 것 막기 */
    
    // -webkit-user-select: none; /* 텍스트/이미지 선택 불가 => 확대 불가 */
    // -ms-user-select: none;
    // -moz-user-select: none;
    // -webkit-user-select: none;
    // -user-select: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;