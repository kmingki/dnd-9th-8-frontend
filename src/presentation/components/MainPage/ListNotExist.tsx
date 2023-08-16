import React from "react";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import TextBox from "./components/TextBox";
import { useNavigate } from "react-router-dom";
import Text from "@components/common/Text";

const ListNotExist = ({ nickname }: { nickname: string }) => {
  const navigate = useNavigate();
  const handleClickCreat = () => {
    navigate("/trip-create/1");
  };
  return (
    <ListNotExistWrapper>
      <Spacing size={36} />
      <TextBox>
        {`안녕하세요 ${nickname}님,`}
        <br />
        어디로 여행을 떠나시나요?
      </TextBox>
      <Spacing size={28} />
      <CheckListBox>
        <Icon icon="NotExistCheckList" />
        <Spacing size={18} />
        <Text
          text="준비하고 있는 여행이 없어요"
          color={COLOR.GRAY_700}
          fontSize={18}
          fontWeight={600}
          lineHeight="132%"
        />
        <Spacing size={63} />
        <Button
          radius={8}
          padding="14px 0"
          background={COLOR.MAIN_GREEN}
          color={COLOR.WHITE}
          border="none"
          onClick={handleClickCreat}
        >
          <Text
            text="체크리스트 만들기"
            color={COLOR.WHITE}
            fontSize={18}
            fontWeight={700}
            lineHeight="132%"
          />
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

  padding: 76px 20px 23px;
  border: 2px solid ${COLOR.GRAY_100};
  border-radius: 8px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 2px 100px 1px rgba(150, 150, 150, 0.1);
`;
export default ListNotExist;
