import React from "react";
import BottomButton from "@components/common/BottomButton";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Text from "@components/common/Text";

const CreateComplatePage = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate("/");
  };
  return (
    <CreateComplateWrapper>
      <MainWrapper>
        <Icon icon="Complate" />
        <TextWrapper>
          <Text
            color={COLOR.MAIN_GREEN}
            fontSize={30}
            fontWeight={600}
            lineHeight="140%"
            text="여행이 생성되었어요!"
          />
          <div className="sub-text">
            패-킷과 체크리스트로
            <br />
            여행 준비를 시작하세요
          </div>
        </TextWrapper>
      </MainWrapper>
      <BottomButton text="패킷 시작하기" onClick={handleClickStart} />
    </CreateComplateWrapper>
  );
};

const CreateComplateWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  overflow-y: hidden;
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 30%;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  text-align: center;

  .sub-text {
    color: ${COLOR.GRAY_700};
    font-size: 20px;
    font-weight: 600;
    line-height: 132%;
  }
`;
export default CreateComplatePage;
