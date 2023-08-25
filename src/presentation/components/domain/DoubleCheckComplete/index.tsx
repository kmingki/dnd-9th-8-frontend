import React from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";

const DoubleCheckCompleteModal = ({ closeModal }: { closeModal: () => void }) => {
  const handleClickCheck = () => {
    closeModal();

  };
  return (
    <DoubleCheckCompleteModalWrapper>
        <Icon icon="DoubleCheckIcon"/>
        <Spacing size={7.08} />
      <Text
        text="여행 준비 완료!"
        color={COLOR.GRAY_800}
        fontSize={18}
        fontWeight={600}
        lineHeight="22.86px"
      />
      <Spacing size={24.49} />
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
    </DoubleCheckCompleteModalWrapper>
  );
};

const DoubleCheckCompleteModalWrapper = styled.div`
  width: 223px;
  padding-top: 18.43px;
  padding-bottom: 20px;

  border-radius: 16px;
  background-color: ${COLOR.WHITE};
  text-align: center;

  .text {
    color: ${COLOR.GRAY_700};
    font-size: 16px;
    font-weight: 600;
    line-height: normal;

    span {
      color: ${COLOR.MAIN_GREEN};
    }
  }
`;
export default DoubleCheckCompleteModal;