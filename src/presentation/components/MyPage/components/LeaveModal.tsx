import React from "react";
import Button from "@components/common/Button";
import Spacing from "@components/common/Spacing";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const LeaveModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const handleClickLeave = () => {
    closeModal();
    navigate("/login");
  };
  return (
    <LeaveModalWrapper>
      <Text
        text="탈퇴하기"
        color="#191F28"
        fontSize={20}
        lineHeight="28px"
        fontWeight={700}
      />
      <Spacing size={10} />
      <div className="content">
        <Text
          text="탈퇴하시면 현재 계정으로 작성한 체크리스트"
          color="#6B7684"
          fontSize={15}
          lineHeight="22px"
          fontWeight={500}
        />
        <Text
          text="템플릿을 수정하거나 삭제할 수 없습니다."
          color="#6B7684"
          fontSize={15}
          lineHeight="22px"
          fontWeight={500}
        />
        <Text
          text="정말 탈퇴하시겠습니까?"
          color={COLOR.MAIN_GREEN}
          fontSize={15}
          lineHeight="22px"
          fontWeight={500}
        />
      </div>
      <Spacing size={20} />
      <ButtonWrapper>
        <Button
          width="100%"
          border="none"
          background="#F2F4F6"
          color="#505967"
          radius={12}
          padding="17px"
          onClick={closeModal}
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
          onClick={handleClickLeave}
        >
          탈퇴하기
        </Button>
      </ButtonWrapper>
    </LeaveModalWrapper>
  );
};

const LeaveModalWrapper = styled.div`
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
export default LeaveModal;
