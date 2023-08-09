import React from "react";
import { styled } from "styled-components";

type TextType = {
  text: string;
  color: string;
  fontSize: number;
  lineHeight: string;
  fontWeight: number;
};
const Text = ({ text, color, fontSize, lineHeight, fontWeight }: TextType) => {
  return (
    <TextWrapper
      style={{
        color,
        fontSize,
        lineHeight,
        fontWeight,
      }}
    >
      {text}
    </TextWrapper>
  );
};

const TextWrapper = styled.div``;
export default Text;
