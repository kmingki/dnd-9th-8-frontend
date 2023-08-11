import React from "react";
import COLOR from "@styles/colors";
import { styled, css } from "styled-components";

type ProgressBarType = {
  max: string;
  value: string;
  percent: boolean; //프로그레스바위에 퍼센트 표시 유무
  percentNumber: Number; //프로그레스바위에 퍼센트 표시
  size: string; //large / small
  startColor: string;
  finishColor?: string; //linear gradient 를 위한 타입
};

const ProgressBar = ({
  max,
  value,
  percent,
  percentNumber,
  size,
  startColor,
  finishColor,
}: ProgressBarType) => {
  return (
    <>
      {percent && (
        <Ballon
          max={Number(max)}
          value={Number(value)}
        >{`${percentNumber}%`}</Ballon>
      )}
      {size === "large" ? (
        <>
          <ProgressBarWrapper
            size={size}
            startColor={startColor}
            finishColor={finishColor}
          >
            <progress id="progress" max={max} value={value} />
          </ProgressBarWrapper>
        </>
      ) : (
        <>
          <ProgressBarWrapper size={size} startColor={startColor}>
            <progress id="progress" max={max} value={value} />
          </ProgressBarWrapper>
        </>
      )}
    </>
  );
};

const Ballon = styled.div<{ max: number; value: number }>`
  width: 31px;
  height: 18px;
  background: ${COLOR.MAIN_BLACK};
  color: ${COLOR.WHITE};
  border-radius: 3px;
  margin-bottom: 7px;
  position: relative;
  left: ${({ max, value }) =>
    css`
      ${value % max}%;
    `};
  transform: translateX(-50%);
  &::after {
    border-top: 3px solid ${COLOR.MAIN_BLACK};
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 18px;
  }
  font-weight: 600;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBarWrapper = styled.div<{
  size: string;
  startColor: string;
  finishColor?: string;
}>`
  width: 100%;
  #progress {
    appearance: none;
    width: 100%;
  }
  #progress::-webkit-progress-bar {
    background: #d9d9d9;
    border-radius: ${({ size }) =>
      css`
        ${size === "large" ? "5" : "31"}px;
      `};
    height: ${({ size }) =>
      css`
        ${size === "large" ? "16" : "6"}px;
      `};
    width: 100%;
  }
  #progress::-webkit-progress-value {
    border-radius: ${({ size }) =>
      css`
        ${size === "large" ? "5" : "31"}px;
      `};
    ${({ size, startColor, finishColor }) =>
      size === "large"
        ? `background: linear-gradient(to left, ${startColor}, ${finishColor})`
        : `background: ${startColor}`};
  }
`;

export default ProgressBar;
