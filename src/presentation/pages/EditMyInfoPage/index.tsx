import React, { useCallback } from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import EditMyPageButton from "@components/EditMyInfoPage/components/EditMyPageButton";
import useModal from "../../../application/hooks/useModal";
import Modal from "@components/common/Modal";
import EditNameModal from "@components/EditMyInfoPage/EditNameModal";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import useEditProfileImage from "../../../application/hooks/queries/user/useEditProfileImage";

const EditMyInfoPage = () => {
  const mutate = useEditProfileImage();
  const navigate = useNavigate();
  const { isShowModal, toggleModal, closeModal } = useModal();
  const handleClickEditName = () => {
    toggleModal();
  };

  const onDrop = useCallback(async (acceptedFiles: any) => {
    const file = acceptedFiles[0];

    const formData: any = new FormData();
    formData.append("image", file);
    mutate(formData);
    navigate(-1);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  return (
    <EditMyInfoPageWrapper>
      <BackHeader text="회원 정보 관리" color="#191F28" />
      <Spacing size={38} />
      <ButtonWrapper>
        <EditMyPageButton text="이름 변경" onClick={handleClickEditName} />
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <EditMyPageButton text="프로필 이미지 변경" />
        </div>
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
