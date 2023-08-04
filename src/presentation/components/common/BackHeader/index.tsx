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
      {text}
    </BackHeaderWrapper>
  );
};

const BackHeaderWrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  padding: 20px 0;

  color: ${({ color }) => (color ? color : "#292929")};
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
export default BackHeader;
