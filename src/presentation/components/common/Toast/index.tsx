import COLOR from "@styles/colors";
import React, { useEffect } from "react";
import { keyframes, styled } from "styled-components";

const fadeInDown = keyframes`
   0% {
        transform: translate3d(0,-10px,0) translate(-50%, -50%);
    }

    50% {
        transform: translate3d(0,10px,0) translate(-50%, -50%);
        opacity: 1
    }

    100%{
      transform: translate3d(0,-10px,0) translate(-50%, -50%);
      opacity: 0;
    }
`;

const Toast = ({
  children,
  close,
}: {
  children: React.ReactNode;
  close: () => void;
}) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 2000);
  }, []);

  return <ToastWrapper>{children}</ToastWrapper>;
};

const ToastWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50%;

  display: flex;
  flex-direction: row;
  gap: 8px;

  width: fit-content;

  border-radius: 16px;
  background-color: ${COLOR.GRAY_900};
  padding: 18px 50px;

  color: ${COLOR.WHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  align-items: center;
  white-space: nowrap;

  animation: ${fadeInDown} 2s forwards;
  z-index: 1000;
`;

export default Toast;
