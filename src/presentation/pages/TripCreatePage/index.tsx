import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import BackHeader from "../../components/common/BackHeader";
import PageIndicator from "../../components/common/PageIndicator";
import Spacing from "../../components/common/Spacing";
import Step1 from "../../components/TripCreatePage/Step1";
import Step2 from "../../components/TripCreatePage/Step2";
import Step3 from "../../components/TripCreatePage/Step3";
import Step4 from "../../components/TripCreatePage/Step4";

const TripCreatePage = () => {
  const { step } = useParams();
  const pageComponents = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  return (
    <TripCreateTemplate>
      {Number(step) !== 1 && <BackHeader />}
      {Number(step) === 1 && <Spacing size={65} />}
      <PageIndicator />
      {pageComponents[Number(step) - 1]}
    </TripCreateTemplate>
  );
};

const TripCreateTemplate = styled.div`
  padding: 0 20px;
`;
export default TripCreatePage;
