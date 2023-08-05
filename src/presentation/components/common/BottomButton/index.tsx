import React from "react";
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
    <BottomButtonWrapper onClick={onClick}>
      {textButton && (
        <TextButton onClick={textButtonOnClick} text={textButtonChild} />
      )}
      <Button disabled={disabled}>{text}</Button>
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
  background-color: ${({ disabled }) => (disabled ? "#e0e3e8" : "#00b488")};
  outline: none;

  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export default BottomButton;
