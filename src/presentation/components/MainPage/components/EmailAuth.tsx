import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";

const EmailAuth = ({
  closeModal,
  toggleEmailInput,
}: {
  closeModal: () => void;
  toggleEmailInput: () => void;
}) => {
  const handleClickAuth = () => {
    closeModal();
    toggleEmailInput();
  };
  const handleSkipButton = () => {
    closeModal();
    localStorage.removeItem("state");
  };
  return (
    <EmailAuthWrapper>
      <Text
        text="이메일 인증"
        color="#191F28"
        fontSize={22}
        fontWeight={600}
        lineHeight="28px"
      />
      <Spacing size={35} />
      <Icon icon="Email" />
      <Spacing size={35} />
      <div className="text">
        <span>이메일 인증</span>을 완료하시면
        <br />
        출발 하루 전 체크리스트 리마인더 알림을 받을 수 있어요
      </div>
      <Spacing size={57} />
      <Button
        border="none"
        padding="15.5px 75.5px"
        background={COLOR.MAIN_GREEN}
        radius={8}
        width="fit-content"
        onClick={handleClickAuth}
      >
        <Text
          text="이메일 인증하기"
          color={COLOR.WHITE}
          fontSize={16}
          fontWeight={600}
          lineHeight="normal"
        />
      </Button>
      <Spacing size={14} />
      <div className="skip" onClick={handleSkipButton}>
        다음에 할래요
      </div>
    </EmailAuthWrapper>
  );
};

const EmailAuthWrapper = styled.div`
  padding: 24px 0 31px 0;
  margin: 0 auto;
  text-align: center;
  background-color: ${COLOR.WHITE};

  .text {
    color: ${COLOR.GRAY_900};
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    span {
      color: ${COLOR.MAIN_GREEN};
    }
  }
  .skip {
    color: ${COLOR.GRAY_800};
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
  }
`;
export default EmailAuth;
