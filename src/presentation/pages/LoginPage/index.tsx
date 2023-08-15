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
          text="마음 편한 여행"
          color={COLOR.WHITE}
          fontSize={24}
          fontWeight={600}
          lineHeight="139%"
        />
        <Spacing size={5} />
        <Icon icon="AuthLogo" />
        <Spacing size={40} />
        <Icon icon="LogoIcon" />
      </MainWrapper>
      <ButtonWrapper>
        <div>SNS 계정으로 로그인하기</div>
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
  background: linear-gradient(
    to bottom,
    ${COLOR.MAIN_GREEN} 0%,
    ${COLOR.MAIN_GREEN} 70%,
    ${COLOR.WHITE} 70%,
    ${COLOR.WHITE} 100%
  );
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);

  display: flex;
  flex-direction: column;
  align-items: center;

  .login-text {
    color: ${COLOR.GRAY_700};
    text-shadow: 0px 4px 3px rgba(255, 255, 255, 0.25);
    font-size: 26px;
    font-weight: 600;
    line-height: normal;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;

  color: ${COLOR.GRAY_700};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default LoginPage;
