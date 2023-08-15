import React from "react";
import TemplateExist from "@components/MyTemplatePage/TemplateExist";
import TemplateNotExist from "@components/MyTemplatePage/TemplateNotExist";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import styled from "styled-components";

const MyTemplatePage = () => {
  const data = true;

  return (
    <MyTemplatePageWrapper>
      <BackHeader text="저장된 여행" />
      {data ? <TemplateExist /> : <TemplateNotExist />}
    </MyTemplatePageWrapper>
  );
};

const MyTemplatePageWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  background-color: ${COLOR.GRAY_50};
`;
export default MyTemplatePage;
