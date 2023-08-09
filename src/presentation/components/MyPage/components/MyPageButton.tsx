import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import React from "react";
import { styled } from "styled-components";

type ButtonType = {
  text: string;
  onClick: any;
};
const MyPageButton = ({ text, onClick }: ButtonType) => {
  return (
    <MyPageButtonWrapper onClick={onClick}>
      {text}
      <Icon icon="Chevron" width={24} height={24} color={COLOR.GRAY_300} />
    </MyPageButtonWrapper>
  );
};

const MyPageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${COLOR.GRAY_300};
  padding: 12px 20px;
  border-radius: 12px;

  color: ${COLOR.GRAY_600};
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;
export default MyPageButton;
