import React from "react";
import COLOR from "@styles/colors";
import { styled, css } from "styled-components";

type ProgressBarType = {
    max: string;
    value: string;
  };

const ProgressBar = ({
    max,
    value,
 }: ProgressBarType) => {
  return (
    <>
    <Ballon max={Number(max)} value={Number(value)} />
    <ProgressBarWrapper>
    <progress id="progress" max={max} value={value} />
    </ProgressBarWrapper>
    </>
  );
};


const Ballon = styled.div<{ max : number, value : number }>`
    width: 30px;
    height: 18px;
    background: ${COLOR.MAIN_BLACK};
    color: ${COLOR.WHITE};
    border-radius: 3px;
    margin-bottom : 7px;
    position: relative;
    left : ${({ max, value }) => css`${value % max}% ;`};
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
        top : 18px;
    }


`;

const ProgressBarWrapper = styled.div`
    width : 100 %;
    #progress {
        appearance : none;
        width: 100%;
    }
    #progress::-webkit-progress-bar {
        background: #D9D9D9;
        border-radius: 53px;
        height: 6px;
        width: 100%;
    }
    #progress::-webkit-progress-value {
        border-radius: 53px;
        background: #4561F9;
    }
`;

export default ProgressBar;
