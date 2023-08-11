import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import { keyframes, styled } from "styled-components";
import COLOR from "@styles/colors";

type BottomSheetType = {
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const BottomSheet = ({ isVisible, closeModal, children }: BottomSheetType) => {
  const [isanimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isanimating) {
      const timeout = setTimeout(() => {
        closeModal();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isanimating, closeModal]);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(false);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(true);
  };

  return (
    <>
      {isVisible || isanimating ? (
        <Modal isVisible={isVisible} closeModal={handleClose}>
          <BottomSheetWrapper isanimating={isanimating}>
            {children}
          </BottomSheetWrapper>
        </Modal>
      ) : null}
    </>
  );
};

const BottomSheetWrapper = styled.div<{ isanimating: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 20px;
  background-color: ${COLOR.WHITE};

  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);

  animation: ${(props) => (props.isanimating ? slideDown : slideUp)} 0.3s forwards;
`;
export default BottomSheet;
