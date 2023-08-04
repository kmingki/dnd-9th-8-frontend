import React from "react";
import { styled } from "styled-components";

type ButtonType = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  radius: number;
  padding?: string;
  background: string;
  color?: string;
  border?: string;
};

const Button = ({
  children,
  width = "100%",
  height,
  radius,
  padding,
  background,
  color,
  border,
}: ButtonType) => {
  return (
    <ButtonWrapper
      style={{
        width,
        height,
        borderRadius: radius,
        color,
        backgroundColor: background,
        padding,
        border,
      }}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  outline: none;
`;

export default Button;
