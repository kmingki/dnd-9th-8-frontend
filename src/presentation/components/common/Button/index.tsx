import React from "react";
import styled, { CSSProp } from "styled-components";

type ButtonType = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  radius: number;
  padding?: string;
  background: string;
  color?: string;
  border?: string;
  onClick?: any;
  clicked?: string;
  customstyle?: CSSProp; // 클릭 시 스타일
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
  onClick,
  clicked,
  customstyle,
}: ButtonType) => {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      radius={radius}
      color={color}
      background={background}
      padding={padding}
      border={border}
      onClick={onClick}
      clicked={clicked}
      customstyle={customstyle}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<ButtonType>`
  outline: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius}px;
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};

  ${({ clicked, customstyle }) => clicked === "true" && customstyle}
`;

export default Button;
