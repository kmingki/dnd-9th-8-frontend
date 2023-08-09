import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import EditMyPageButton from "@components/EditMyInfoPage/components/EditMyPageButton";
import useModal from "../../../application/hooks/useModal";
import Modal from "@components/common/Modal";
import EditNameModal from "@components/EditMyInfoPage/EditNameModal";

const EditMyInfoPage = () => {
  const { isShowModal, toggleModal, closeModal } = useModal();
  const handleClickEditName = () => {
    toggleModal();
  };
  return (
    <EditMyInfoPageWrapper>
      <BackHeader text="회원 정보 관리" color="#191F28" />
      <Spacing size={38} />
      <ButtonWrapper>
        <EditMyPageButton text="이름 변경" onClick={handleClickEditName} />
        <EditMyPageButton text="프로필 이미지 변경" onClick={() => {}} />
      </ButtonWrapper>
      <Modal isVisible={isShowModal} closeModal={closeModal}>
        <EditNameModal closeModal={closeModal} />
      </Modal>
    </EditMyInfoPageWrapper>
  );
};
const EditMyInfoPageWrapper = styled.div`
  background-color: ${COLOR.GRAY_50};
  height: 100%;
  padding: 0 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default EditMyInfoPage;
