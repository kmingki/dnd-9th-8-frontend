import React from "react";
import { styled } from "styled-components";
import Icon from "../Icon";
import COLOR from "@styles/colors";

type CloseModalHeaderType = {
  text?: string;
  closeModal: () => void;
};

const CloseModalHeader = ({ text, closeModal }: CloseModalHeaderType) => {
  const handleClickCloseModal = () => {
    closeModal();
  };

  return (
    <CloseModalHeaderWrapper>
      <Icon icon="ModalXButton" onClick={handleClickCloseModal} />
      <div className="text">{text}</div>
    </CloseModalHeaderWrapper>
  );
};

const CloseModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 20px 0;

  color: ${COLOR.GRAY_900};
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  .text {
    flex-grow: 1;
    text-align: center;
    margin-left: -24px;
  }
`;
export default CloseModalHeader;
