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
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 480px) {
    width: 480px;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 8px;
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
