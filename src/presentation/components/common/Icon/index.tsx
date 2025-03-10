import React from "react";
import styled from "styled-components";
import * as icons from "../Icon/icons";

interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  rotate?: number;

  fill?: string;
  color?: string;

  onClick?: any;
}

const Icon = ({ icon, width, height, rotate, fill, color, onClick }: IconProps) => {
  const IconComponent = icons[icon as keyof typeof icons];
  return (
    <IconWrapper
      width={width}
      height={height}
      rotate={rotate}
      fill={fill}
      color={color}
      onClick={onClick}
    >
      <IconComponent />
    </IconWrapper>
  );
};

const IconWrapper = styled.div<{
  width?: number;
  height?: number;
  rotate?: number;
  fill?: string;
  color?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ rotate }) =>
    rotate && {
      transform: `rotate(${rotate}deg)`,
    }}
  svg {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    path {
      stroke: ${({ color }) => color};
      fill: ${({ fill }) => fill};
    }
  }
`;

export default Icon;
