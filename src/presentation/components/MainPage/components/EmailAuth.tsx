import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import { requestEmailAuth } from "@api/emailAuth";

const EmailAuth = ({
  closeModal,
  toggleEmailInput,
}: {
  closeModal: () => void;
  toggleEmailInput: () => void;
}) => {
  const handleClickAuth = async () => {
    closeModal();
    const res = await requestEmailAuth();
    if (res.message === "성공적으로 인증 메일이 발송되었습니다.") {
      toggleEmailInput();
    }
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
      <Spacing size={27} />
      <Icon icon="Email" />
      <Spacing size={41} />
      <div className="text">
        이메일 인증을 완료하시면
        <br />
        출발 하루 전 체크리스트 리마인드를 드립니다
      </div>
      <Spacing size={57} />
      <Button
        border="none"
        padding="15.5px 75.5px"
        background={COLOR.MAIN_GREEN}
        radius={8}
        width="100%"
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
    color: ${COLOR.GRAY_700};
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
  }

  .skip {
    color: ${COLOR.GRAY_700};
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
  }
`;
export default EmailAuth;
