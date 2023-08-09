import React from "react";
import Button from "@components/common/Button";
import Spacing from "@components/common/Spacing";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    closeModal();
    navigate("/login");
  };

  return (
    <LogoutModalWrapper>
      <Text
        text="로그아웃"
        color="#191F28"
        fontSize={20}
        lineHeight="28px"
        fontWeight={700}
      />
      <Spacing size={10} />
      <Text
        text="로그아웃 하시겠습니까?"
        color="#6B7684"
        fontSize={15}
        lineHeight="22px"
        fontWeight={500}
      />
      <Spacing size={30} />
      <ButtonWrapper>
        <Button
          width="100%"
          border="none"
          background="#F2F4F6"
          color="#505967"
          radius={12}
          padding="17px"
          onClick={() => closeModal()}
        >
          취소
        </Button>
        <Button
          width="100%"
          border="none"
          background={COLOR.MAIN_GREEN}
          color={COLOR.WHITE}
          radius={12}
          padding="17px"
          onClick={handleClickLogout}
        >
          확인
        </Button>
      </ButtonWrapper>
    </LogoutModalWrapper>
  );
};

const LogoutModalWrapper = styled.div`
  width: 70%;
  padding: 22px;

  border-radius: 14px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 0px 9.899947166442871px 0px rgba(133, 133, 133, 0.38);
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;
export default LogoutModal;
