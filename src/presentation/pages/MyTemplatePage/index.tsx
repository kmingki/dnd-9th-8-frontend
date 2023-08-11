import React, { useState } from "react";
import TemplateExist from "@components/MyTemplatePage/TemplateExist";
import TemplateNotExist from "@components/MyTemplatePage/TemplateNotExist";
import EditHeader from "@components/MyTemplatePage/components/EditHeader";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import styled from "styled-components";

const MyTemplatePage = () => {
  const data = true;
  const [isEdit, setIsEdit] = useState(false);
  return (
    <MyTemplatePageWrapper>
      {data ? (
        <EditHeader
          mainText="저장된 템플릿"
          rightOnClick={() => setIsEdit((prev) => !prev)}
          rightText={isEdit ? "삭제" : "편집"}
        />
      ) : (
        <BackHeader text="저장된 템플릿" />
      )}
      {data ? <TemplateExist isEdit={isEdit} /> : <TemplateNotExist />}
    </MyTemplatePageWrapper>
  );
};

const MyTemplatePageWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  background-color: ${COLOR.GRAY_50};
`;
export default MyTemplatePage;
