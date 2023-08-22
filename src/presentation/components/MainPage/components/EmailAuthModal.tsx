import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import Button from "@components/common/Button";

const EmailAuthModal = ({ closeModal }: { closeModal: () => void }) => {
  const handleClickCheck = () => {
    closeModal();
    localStorage.removeItem("state");
  };
  return (
    <EmailAuthModalWrapper>
      <Text
        text="인증 이메일 발송 완료"
        color="#191F28"
        fontSize={21}
        fontWeight={600}
        lineHeight="28px"
      />
      <Spacing size={20} />
      <div className="text">
        <span>24시간 이내</span>에 이메일 인증을 완료해주세요
      </div>
      <Spacing size={36} />
      <Button
        border="none"
        padding="10px 0"
        background={COLOR.MAIN_GREEN}
        radius={8}
        width="120px"
        onClick={handleClickCheck}
      >
        <Text
          text="확인"
          color={COLOR.WHITE}
          fontSize={17}
          fontWeight={600}
          lineHeight="normal"
        />
      </Button>
    </EmailAuthModalWrapper>
  );
};

const EmailAuthModalWrapper = styled.div`
  width: 70%;
  padding: 21px 30px 20px 30px;
  border-radius: 16px;
  background-color: ${COLOR.WHITE};
  text-align: center;

  .text {
    color: ${COLOR.GRAY_700};
    font-size: 16px;
    font-weight: 600;
    line-height: normal;

    span {
      color: ${COLOR.MAIN_GREEN};
    }
  }
`;
export default EmailAuthModal;
