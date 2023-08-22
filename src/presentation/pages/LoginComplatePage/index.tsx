import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import COLOR from "@styles/colors";
import BottomButton from "../../../presentation/components/common/BottomButton";
import Text from "@components/common/Text";
import Icon from "@components/common/Icon";

const LoginCompletePage = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate("/trip-create/1");
    localStorage.setItem("state", "NEW_MEMBER");
  };

  return (
    <LoginCompleteWrapper>
      <div className="linear1">
        <Icon icon="Linear1" />
      </div>
      <TextWrapper>
        <Text
          color={COLOR.MAIN_GREEN}
          fontSize={34}
          fontWeight={700}
          lineHeight="140%"
          text="환영합니다!"
        />
        <div className="sub-text">
          패-킷과 체크리스트로
          <br />
          여행 준비를 시작하세요
        </div>
      </TextWrapper>
      <div className="linear2">
        <Icon icon="Linear2" />
      </div>
      <BottomButton text="패킷 시작하기" onClick={handleClickStart} />
    </LoginCompleteWrapper>
  );
};

const LoginCompleteWrapper = styled.div`
  overflow-y: hidden;
  .linear1 {
    margin-left: -60%;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  text-align: center;

  .sub-text {
    color: ${COLOR.GRAY_800};
    font-size: 21px;
    font-weight: 500;
    line-height: 138%;
  }
`;
export default LoginCompletePage;
