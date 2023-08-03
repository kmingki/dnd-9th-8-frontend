
import React from "react";
import { styled } from "styled-components";
import COLOR from "@styles/colors";
import Icon from "../Icon";
import { DESTINATION } from "@constants";

type OnboardingButtonType = {
    children? : JSX.Element;
    dest?: string;
    isChecked?: boolean;
    text?: string;
  };
  

const OnboardingButton = ({ children , dest, isChecked, text }: OnboardingButtonType) => {
    return (
        <OnboardingButtonWapper isChecked={isChecked}>
        <Text>
          {dest === DESTINATION.abroad ? <Icon icon="Plane"  /> :
          <Icon icon="Bus"  />
          }
          {text}
        </Text>
        </OnboardingButtonWapper>
    );
}

const OnboardingButtonWapper = styled.button<{ isChecked?: boolean }>`
  width: 100%;
  height: 80px;
  border: none;
  ${({ isChecked }) =>
  isChecked && 
    `border-width: 1px; 
    border-color: ${COLOR.MAIN_GREEN}`
  }
  border-radius: 10px;
  background-color: ${COLOR.GRAY_50};
  outline: none;
`;


const Text = styled.p`
color: ${COLOR.GRAY_800};
`;


export default OnboardingButton;