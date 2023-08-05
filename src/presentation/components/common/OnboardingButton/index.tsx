import React from "react";
import { styled, css } from "styled-components";
import COLOR from "@styles/colors";
import Icon from "../Icon";
import { DESTINATION } from "@constants";

type OnboardingButtonType = {
  children?: JSX.Element;
  dest?: string;
  isChecked?: boolean;
  text?: string;
  onClick: any;
};

const OnboardingButton = ({
  children,
  dest,
  isChecked,
  text,
  onClick,
}: OnboardingButtonType) => {
  return (
    <OnboardingButtonWapper isChecked={isChecked} onClick={onClick}>
      {isChecked ? (
        <IconWrapper>
          <Icon icon="Check" />
        </IconWrapper>
      ) : null}

      {dest === DESTINATION.abroad ? <Icon icon="Plane" /> : <Icon icon="Bus" />}
      <Text>{text}</Text>
    </OnboardingButtonWapper>
  );
};

const OnboardingButtonWapper = styled.button<{ isChecked?: boolean }>`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: none;
  ${({ isChecked }) =>
    isChecked &&
    css`
      border: 1px solid ${COLOR.MAIN_GREEN};
    `}
  background-color: ${COLOR.GRAY_50};
  outline: none;
  position: relative;
`;

const Text = styled.p`
  color: ${COLOR.GRAY_800};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 9px;
  right: 9px;
`;

export default OnboardingButton;
