import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

type BottomButtonType = {
  text: string;
  disabled?: boolean;
};

const BottomButton = ({ text, disabled }: BottomButtonType) => {
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
  background-color: ${({ disabled }) =>
    disabled ? COLOR.GRAY_200 : COLOR.MAIN_GREEN};
  outline: none;

  color: ${COLOR.WHITE};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export default BottomButton;
