import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "../Text";

type TagType = {
  text: string;
  backgroundColor?: string;
  color?: string;
};
const Tag = ({ text, backgroundColor, color }: TagType) => {
  return (
    <TagWrapper backgroundcolor={backgroundColor}>
      <Text
        text={text}
        fontSize={12}
        fontWeight={600}
        lineHeight="12px"
        color={color || COLOR.WHITE}
      />
    </TagWrapper>
  );
};

const TagWrapper = styled.div<{ backgroundcolor?: string }>`
  width: fit-content;
  padding: 4px 9px;

  border-radius: 8px;
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : COLOR.MAIN_GREEN};
`;
export default Tag;
