import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import COLOR from "@styles/colors";
import BottomButton from "../../../presentation/components/common/BottomButton";
import Icon from "../../../presentation/components/common/Icon";
import Spacing from "../../../presentation/components/common/Spacing";
import Text from "@components/common/Text";

const LoginCompletePage = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate("/trip-create/1");
  };
  return (
    <LoginCompleteWrapper>
      <TextWrapper>
        <Text
          color={COLOR.GRAY_900}
          fontSize={30}
          fontWeight={700}
          lineHeight="140%"
          text="환영합니다"
        />
        <div className="sub-text">
          패킷의 체크리스트로
          <br />
          마음 편한 여행 준비를 시작하세요
        </div>
      </TextWrapper>
      <Spacing size={32} />
      <IconWrapper>
        <Icon icon="LoginComplete" />
      </IconWrapper>
      <BottomButton text="패킷 시작하기" onClick={handleClickStart} />
    </LoginCompleteWrapper>
  );
};

const LoginCompleteWrapper = styled.div`
  overflow-y: hidden;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin-top: 40%;

  text-align: center;

  .sub-text {
    color: ${COLOR.GRAY_600};
    font-size: 18px;
    font-weight: 500;
    line-height: 132%;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default LoginCompletePage;
