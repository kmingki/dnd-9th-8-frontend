import React from "react";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import TextBox from "./components/TextBox";

const ListNotExist = () => {
  const userName = "DND";
  return (
    <ListNotExistWrapper>
      <Spacing size={36} />
      <TextBox>
        {`안녕하세요 ${userName}님,`}
        <br />
        어디로 여행을 떠나시나요?
      </TextBox>
      <Spacing size={16} />
      <CheckListBox>
        <Icon icon="NotExistCheckList" />
        <Spacing size={18} />
        <div className="text">아직 준비하고 있는 여행이 없어요</div>
        <Spacing size={65} />
        <Button
          radius={14}
          padding="14px 0"
          background={COLOR.MAIN_GREEN}
          color={COLOR.WHITE}
          border="none"
        >
          <div className="button-text">체크리스트 만들기</div>
        </Button>
      </CheckListBox>
    </ListNotExistWrapper>
  );
};

const ListNotExistWrapper = styled.div`
  padding: 0 20px;
`;
const CheckListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 76px 20px 20px;
  border-radius: 16px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 2px 100px 1px rgba(150, 150, 150, 0.1);

  .text {
    color: ${COLOR.GRAY_600};
    font-size: 16px;
    font-weight: 600;
    line-height: 132%;
  }
  .button-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 132%;
  }
`;
export default ListNotExist;
