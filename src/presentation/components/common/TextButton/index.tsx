import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

type TextButtonType = {
  text?: string;
  onClick?: any;
};
const TextButton = ({ text, onClick }: TextButtonType) => {
  return <TextButtonWrapper onClick={onClick}>{text}</TextButtonWrapper>;
};

const TextButtonWrapper = styled.div`
  color: ${COLOR.GRAY_600};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

export default TextButton;
