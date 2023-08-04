import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

type TagType = {
  text: string;
  backgroundColor?: string;
  color?: string;
};
const Tag = ({ text, backgroundColor, color }: TagType) => {
  return (
    <TagWrapper backgroundColor={backgroundColor} color={color}>
      {text}
    </TagWrapper>
  );
};

const TagWrapper = styled.div<{ backgroundColor?: string; color?: string }>`
  width: fit-content;
  padding: 4px 9px;

  border-radius: 8px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : COLOR.MAIN_GREEN};

  color: ${({ color }) => (color ? color : COLOR.WHITE)};
`;
export default Tag;
