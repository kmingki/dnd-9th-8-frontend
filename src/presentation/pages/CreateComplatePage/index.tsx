import React from "react";
import BottomButton from "@components/common/BottomButton";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const CreateComplatePage = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate("/");
  };
  return (
    <CreateComplateWrapper>
      <IconWrapper>
        <Icon icon="Complate" />
      </IconWrapper>
      <TextBox>체크리스트 생성 완료</TextBox>
      <BottomButton text="시작하기" onClick={handleClickStart} />
    </CreateComplateWrapper>
  );
};

const CreateComplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 154px;
  height: 154px;
  margin-top: 50%;

  border-radius: 100%;
  background-color: ${COLOR.GREEN_50};
`;
const TextBox = styled.div`
  color: ${COLOR.GRAY_900};
  font-size: 21px;
  font-weight: 700;
  line-height: 140%;
`;
export default CreateComplatePage;
