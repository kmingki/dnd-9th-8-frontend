import { MouseEventHandler, useEffect } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

type ModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  closeModal: () => void;
};

const Modal = ({ children, isVisible, closeModal }: ModalProps) => {
  const modalRoot = typeof window !== "undefined" && document.getElementById("root");

  const handleCloseModal: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return isVisible
    ? ReactDom.createPortal(
        <ModalOverlay onClick={handleCloseModal}>{children}</ModalOverlay>,
        modalRoot as HTMLElement
      )
    : null;
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(66, 66, 66, 0.63);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
