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
      <Spacing size={81} />
      <ButtonWrapper>
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
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: ${COLOR.WHITE};
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30%;
  margin-left: 40px;

  .icon {
    display: flex;
    justify-content: flex-end;
    width: 80vw;
  }
`;

const ButtonWrapper = styled.div`
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
