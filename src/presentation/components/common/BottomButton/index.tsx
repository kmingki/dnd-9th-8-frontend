import React from "react";
import { styled } from "styled-components";

type BottomButtonTypes = {
  text: string;
  disabled?: boolean;
};

const BottomButton = ({ text, disabled }: BottomButtonTypes) => {
  return (
    <BottomButtonWrapper>
      <Button disabled={disabled}>{text}</Button>
    </BottomButtonWrapper>
  );
};

const BottomButtonWrapper = styled.div``;
const Button = styled.button`
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 16px;
  background-color: ${({ disabled }) => (disabled ? "#e0e3e8" : "#00b488")};
  outline: none;

  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export default BottomButton;
