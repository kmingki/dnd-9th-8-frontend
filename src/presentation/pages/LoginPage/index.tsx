import React from "react";
import { styled } from "styled-components";
import Icon from "../../components/common/Icon";
import COLOR from "@styles/colors";
import { Link } from "react-router-dom";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";

const LoginPage = () => {
  const kakaoUrl = `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/kakao?redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;
  const naverUrl = `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/naver?redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;

  return (
    <LoginPageWrapper>
      <MainWrapper>
        <Text
          text="빈틈없는 여행을 위한"
          color={COLOR.MAIN_BLACK}
          fontSize={21}
          fontWeight={600}
          lineHeight="139%"
        />
        <Text
          text="체크리스트"
          color={COLOR.MAIN_BLACK}
          fontSize={21}
          fontWeight={600}
          lineHeight="139%"
        />
        <Icon icon="AuthLogo" />
        <Spacing size={91} />
        <div className="icon">
          <Icon icon="LogoIcon" />
        </div>
      </MainWrapper>

      <ButtonWrapper>
        <Text
          text="SNS 계정으로 로그인하기"
          color={COLOR.GRAY_700}
          fontSize={14}
          fontWeight={500}
          lineHeight="normal"
        />
        <ButtonContainer>
          <Link to={kakaoUrl}>
            <Icon icon="AuthKakao" />
          </Link>
          <Link to={naverUrl}>
            <Icon icon="AuthNaver" />
          </Link>
        </ButtonContainer>
      </ButtonWrapper>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: ${COLOR.WHITE};
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15%;
  margin-left: 40px;

  .icon {
    position: absolute;
    display: flex;
    top: 55%;
    right: 9%;
    transform: translate(0, -55%);
    box-sizing: border-box;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default LoginPage;
