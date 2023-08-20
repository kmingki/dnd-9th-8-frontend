import React, { useState } from "react";
import Button from "@components/common/Button";
import Spacing from "@components/common/Spacing";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Icon from "@components/common/Icon";
import Toast from "@components/common/Toast";

const DoubleCheckModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const onClickKakaoShare = () => {
    closeModal();
    //shareKakao(route, title)}
  };

  return (
    <ShareModalWrapper>
      <Text
        text="공유하기"
        color="#191F28"
        fontSize={20}
        lineHeight="28px"
        fontWeight={700}
      />
      <Spacing size={23} />
      <ButtonWrapper>
        <TextWrapper>
          <Icon icon="KakaoLogo" onClick={onClickKakaoShare}/>
          <Text
          text="카카오톡"
          color={COLOR.GRAY_800}
          fontSize={15}
          lineHeight="20px"
          fontWeight={600}
        />
        </TextWrapper>
        <TextWrapper>
          <Icon icon="LinkOutlined" />
          <Text
          text="URL복사"
          color={COLOR.GRAY_800}
          fontSize={15}
          lineHeight="20px"
          fontWeight={600}
        />
        </TextWrapper>
      </ButtonWrapper>
    </ShareModalWrapper>
  );
};


const ShareModalWrapper = styled.div`
  padding: 22px 47.42px;
  border-radius: 14px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 0px 9.899947166442871px 0px rgba(133, 133, 133, 0.38);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.div`
    all : unset;
    border : 0px; 
    display: flex;
    flex-direction: row;
    gap: 41px;
`;

const DeleteButtonWrapper = styled.div`
    width: 100%;
    all : unset;
    border : 0px; 
    display: flex;
    gap: 8px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export { DoubleCheckModal } ;
