import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MAX_WIDTH } from "@constants";
import COLOR from "@styles/colors";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body,
  #root {
    background-color: ${COLOR.WHITE};
    max-width: ${MAX_WIDTH};
    height: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
