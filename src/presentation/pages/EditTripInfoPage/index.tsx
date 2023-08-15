import React, { useState } from "react";
import { WhiteTemplate } from "@styles/templates"
import TemplateExist from "@components/MyTemplatePage/TemplateExist";
import TemplateNotExist from "@components/MyTemplatePage/TemplateNotExist";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import styled from "styled-components";

const EditTripInfoPage = () => {
  const data = false;
  const [isEdit, setIsEdit] = useState(false);
  return (
    <WhiteTemplate>
      <BackHeader text="여행 수정하기" />
      
      {data ? <TemplateExist isEdit={isEdit} /> : <TemplateNotExist />}
    </WhiteTemplate>
  );
};

const MyTemplatePageWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  background-color: ${COLOR.GRAY_50};
`;

export default EditTripInfoPage;
