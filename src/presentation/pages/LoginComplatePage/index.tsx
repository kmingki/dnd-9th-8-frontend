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
    localStorage.setItem("state", "NEW_MEMBER");
  };

  return (
    <LoginCompleteWrapper>
      <TextWrapper>
        <Text
          color={COLOR.MAIN_GREEN}
          fontSize={30}
          fontWeight={600}
          lineHeight="140%"
          text="환영합니다"
        />
        <div className="sub-text">
          패-킷과 체크리스트로
          <br />
          여행 준비를 시작하세요
        </div>
      </TextWrapper>
      <Spacing size={32} />
      <Icon icon="LoginComplete" />
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
  gap: 7px;

  margin-top: 40%;

  text-align: center;

  .sub-text {
    color: ${COLOR.GRAY_700};
    font-size: 20px;
    font-weight: 600;
    line-height: 132%;
  }
`;
export default LoginCompletePage;
