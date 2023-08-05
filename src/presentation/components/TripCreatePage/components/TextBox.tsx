import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

const TextBox = ({ children }: { children: React.ReactNode }) => {
  return <TextBoxWrapper>{children}</TextBoxWrapper>;
};

const TextBoxWrapper = styled.div`
  color: ${COLOR.GRAY_900};
  font-size: 24px;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: -0.5px;
`;
export default TextBox;
