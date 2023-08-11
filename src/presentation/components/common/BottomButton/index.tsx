import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import TextButton from "../TextButton";

type BottomButtonType = {
  text: string;
  disabled?: boolean;
  onClick?: any;

  textButton?: boolean;
  textButtonChild?: string;
  textButtonOnClick?: any;
};

const BottomButton = ({
  text,
  disabled,
  onClick,

  textButton,
  textButtonChild,
  textButtonOnClick,
}: BottomButtonType) => {
  return (
    <BottomButtonWrapper>
      {textButton && (
        <TextButton onClick={textButtonOnClick} text={textButtonChild} />
      )}
      <Button onClick={onClick} disabled={disabled}>
        {text}
      </Button>
    </BottomButtonWrapper>
  );
};

const BottomButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
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
