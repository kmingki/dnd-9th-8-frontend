import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Icon from "../Icon";

type BackHeaderType = {
  text?: string;
  color?: string;
};

const BackHeader = ({ text, color }: BackHeaderType) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <BackHeaderWrapper color={color}>
      <Icon icon="Arrow" fill={color} onClick={handleClickBack} />
      <div className="text">{text}</div>
      <div className="emptySpace"></div>
    </BackHeaderWrapper>
  );
};

const BackHeaderWrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  color: ${({ color }) => (color ? color : "#292929")};
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;

  .text {
    flex-grow: 1;
    text-align: center;
  }
  .emptySpace {
    width: 24px;
    height: 25px;
    visibility: hidden;
  }
`;
export default BackHeader;
