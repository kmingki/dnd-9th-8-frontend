import React from "react";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

type ButtonType = {
  text: string;
  onClick?: any;
};

const EditMyPageButton = ({ text, onClick }: ButtonType) => {
  return (
    <EditMyPageButtonWrapper onClick={onClick}>
      {text}
      <Icon icon="Chevron" width={24} height={24} color={COLOR.GRAY_300} />
    </EditMyPageButtonWrapper>
  );
};

const EditMyPageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 20px;
  border-radius: 12px;
  background-color: ${COLOR.WHITE};

  color: ${COLOR.MAIN_BLACK};
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;
export default EditMyPageButton;
