import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Icon from "../Icon";

type CheckListType = {
  text: string;
  checked: boolean;
  onClick?: any;
};
const CheckList = ({ text, checked, onClick }: CheckListType) => {
  return (
    <CheckedListWrapper checked={checked} onClick={onClick}>
      <CheckedListInner checked={checked}>
        <div className="check-box">
          {checked && (
            <div className="checked-icon">
              <Icon icon="Checked" />
            </div>
          )}
        </div>
        <div className="text">{text}</div>
      </CheckedListInner>
    </CheckedListWrapper>
  );
};

const CheckedListWrapper = styled.div<{ checked: boolean }>`
  width: 100%;
  padding: 12px;

  border: 1px solid #e5e5f0;
  border-radius: 8px;
  background: ${({ checked }) => (checked ? "#EDF0F4" : COLOR.WHITE)};

  box-sizing: border-box;
`;

const CheckedListInner = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 9px;
  align-items: center;

  .check-box {
    position: relative;

    width: 16px;
    height: 16px;

    border: 1px solid #e5e5f0;
    border-radius: 4px;
    background-color: ${COLOR.WHITE};

    .checked-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .text {
    color: ${({ checked }) => (checked ? COLOR.GRAY_400 : "#323232")};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  }
`;
export default CheckList;
