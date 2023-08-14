import React from "react";
import { styled, css } from "styled-components";
import COLOR from "@styles/colors";
import Icon from "../Icon";
import Text from "../Text";

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
    <OnboardingButtonWapper ischecked={isChecked + ""} onClick={onClick}>
      {isChecked ? (
        <IconWrapper>
          <Icon icon="Check" />
        </IconWrapper>
      ) : null}
      <Text
        text={text || ""}
        color={COLOR.GRAY_800}
        fontSize={18}
        fontWeight={500}
        lineHeight="normal"
      />
    </OnboardingButtonWapper>
  );
};

const OnboardingButtonWapper = styled.button<{ ischecked?: string }>`
  position: relative;
  width: 100%;

  padding: 16px 0;

  border-radius: 8px;
  border: none;
  ${({ ischecked }) =>
    ischecked === "true" &&
    css`
      border: 2px solid ${COLOR.MAIN_GREEN};
    `}
  background-color: ${COLOR.GRAY_50};
  outline: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
`;

export default OnboardingButton;
