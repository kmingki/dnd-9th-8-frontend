
import React from "react";
import { styled } from "styled-components";
import COLOR from "@styles/colors";

type OnboardingButtonType = {
    children? : JSX.Element;
    dest?: string;
    isChecked?: string;
    text?: string;
  };
  

const OnboardingButton = ({ children , dest, isChecked, text }: OnboardingButtonType) => {
    return (
        <OnboardingButtonWapper>
        <Text>
          {text}
        </Text>
        </OnboardingButtonWapper>
    );
}

const OnboardingButtonWapper = styled.button`
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 10px;
  background-color: ${COLOR.GRAY_50};
  outline: none;
`;


const Text = styled.p`
color: ${COLOR.GRAY_800};
`;


export default OnboardingButton;