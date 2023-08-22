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
          text="빈틈없는 여행의 시작"
          color={COLOR.MAIN_BLACK}
          fontSize={21}
          fontWeight={600}
          lineHeight="139%"
        />
        <Spacing size={17} />
        <Icon icon="AuthLogo" />
      </MainWrapper>
      <ButtonWrapper>
        <Text
          text="SNS 계정으로 로그인하기"
          color={COLOR.GRAY_800}
          fontSize={14}
          fontWeight={600}
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
  background: linear-gradient(
    180deg,
    rgba(67, 226, 168, 0.35) 0%,
    rgba(253, 253, 253, 0) 100%
  );
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45%;
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
