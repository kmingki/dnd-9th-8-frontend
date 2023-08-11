import React from "react";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

const TemplateNotExist = () => {
  return (
    <TemplateNotExistWrapper>
      <div className="main">
        <Icon icon="Template" />
        <Text
          text="저장된 템플릿이 없어요"
          color={COLOR.GRAY_700}
          fontSize={18}
          fontWeight={600}
          lineHeight="normal"
        />
      </div>
    </TemplateNotExistWrapper>
  );
};

const TemplateNotExistWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  .main {
    width: 100%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    display: flex;
    flex-direction: column;
    gap: 22px;
    justify-content: center;
    align-items: center;
  }
`;
export default TemplateNotExist;
