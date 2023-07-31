import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MAX_WIDTH } from '@constants';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body,
  #root {
    background-color: rgba(0, 0, 0, 0.2);
    max-width: ${MAX_WIDTH};
    height: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;