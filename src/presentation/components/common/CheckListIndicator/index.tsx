import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";

type CheckListIndicatorType = {
  checked: number;
  total : number;
};
const CheckListIndicator = ({ checked, total}: CheckListIndicatorType) => {
  return (
    <Indicator>
        <Text text={`${checked}/${total}`} color={COLOR.GRAY_700} fontSize={12} lineHeight="16px" fontWeight={500} />
    </Indicator>
  );
};

const Indicator = styled.div`
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.WHITE};
    border-radius: 38px;
    box-shadow: 0px 0px 4px 0px #0000001A;
    margin-right : 9px;
    padding : 0px 10px;
`;


export default CheckListIndicator;