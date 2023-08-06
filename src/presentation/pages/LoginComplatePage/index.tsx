import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import COLOR from "@styles/colors";
import BottomButton from "../../../presentation/components/common/BottomButton";
import Icon from "../../../presentation/components/common/Icon";
import Spacing from "../../../presentation/components/common/Spacing";

const LoginCompletePage = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate("/");
  };
  return (
    <LoginCompleteWrapper>
      <TextWrapper>
        <div className="main-text">환영합니다!</div>
        <div className="sub-text">
          이제부터 체크리스트를 만들어
          <br />
          여행 준비를 시작해보세요
        </div>
      </TextWrapper>
      <Spacing size={65} />
      <IconWrapper>
        <Icon icon="LoginComplete" />
      </IconWrapper>
      <BottomButton text="시작하기" onClick={handleClickStart} />
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

  margin-top: 22%;

  font-weight: 600;
  text-align: center;
  .main-text {
    color: ${COLOR.MAIN_GREEN};
    font-size: 34px;
    line-height: 140%;
  }
  .sub-text {
    color: ${COLOR.GRAY_800};
    font-size: 20px;
    line-height: 132%;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default LoginCompletePage;
