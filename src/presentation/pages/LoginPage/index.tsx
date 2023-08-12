import React from "react";
import { styled } from "styled-components";
import Icon from "../../components/common/Icon";
import LoginImage from "../../../assets/images/Login.png";
import COLOR from "@styles/colors";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const kakaoUrl = `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/kakao?redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;

  return (
    <LoginPageWrapper>
      <TopWrapper>
        <div className="icon">
          <Icon icon="AuthLogo" />
        </div>
        <div className="login-text">완벽한 여행 준비의 시작</div>
      </TopWrapper>
      <ButtonWrapper>
        <div>SNS 계정으로 로그인하기</div>
        <ButtonContainer>
          <Link to={kakaoUrl}>
            <Icon icon="AuthKakao" />
          </Link>
          <Icon icon="AuthNaver" />
        </ButtonContainer>
      </ButtonWrapper>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${LoginImage}) no-repeat center/cover;
  overflow: hidden;
`;

const TopWrapper = styled.div`
  position: relative;
  top: 14%;
  left: 10%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .icon {
    display: flex;
  }
  .login-text {
    color: ${COLOR.WHITE};
    text-shadow: 0px 4px 3px rgba(255, 255, 255, 0.25);
    font-size: 26px;
    font-weight: 600;
    line-height: normal;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;

  color: ${COLOR.WHITE};
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
