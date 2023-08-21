import React, { useState } from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import Button from "@components/common/Button";

const EmailAuthInput = ({ closeModal }: { closeModal: () => void }) => {
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleClickCheck = () => {
    closeModal();
    // 이메일 인증 api 호출
    // localStorage.removeItem("state");
  };
  return (
    <EmailAuthInputWrapper>
      <Text
        text="인증 이메일 발송 완료"
        color="#191F28"
        fontSize={20}
        fontWeight={600}
        lineHeight="28px"
      />
      <Spacing size={24} />
      <div className="email-input">
        <input type="text" value={email} onChange={handleChangeEmail} />
      </div>
      <Spacing size={10} />
      <Text
        text="24시간 이내에 이메일 인증을 완료해주세요"
        color={COLOR.GRAY_700}
        fontSize={12}
        fontWeight={600}
        lineHeight="normal"
      />
      <Spacing size={35} />
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
    </EmailAuthInputWrapper>
  );
};

const EmailAuthInputWrapper = styled.div`
  width: 80%;
  padding: 21px 30px 20px 30px;
  border-radius: 16px;
  background-color: ${COLOR.WHITE};
  text-align: center;

  .email-input {
    padding: 8px 0;
    background-color: ${COLOR.GRAY_50};
    input {
      outline: none;
      border: none;
      color: ${COLOR.MAIN_GREEN};
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      background-color: ${COLOR.GRAY_50};
    }
  }
`;
export default EmailAuthInput;
