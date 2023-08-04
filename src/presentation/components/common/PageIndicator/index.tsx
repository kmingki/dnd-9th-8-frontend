import React from "react";
import COLOR from "@styles/colors";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const PageIndicator = () => {
  const { step } = useParams();
  return (
    <PageIndicatorWrapper>
      {[1, 2, 3, 4].map((currStep) => (
        <Bar key={currStep} clicked={Number(step) === currStep ? "true" : "false"} />
      ))}
    </PageIndicatorWrapper>
  );
};

const PageIndicatorWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`;

const Bar = styled.li<{ clicked: string }>`
  list-style-type: none;
  width: ${({ clicked }) => (clicked === "true" ? 34 : 12)}px;
  height: 12px;
  border-radius: 30px;
  background-color: ${({ clicked }) =>
    clicked === "true" ? COLOR.GREEN_400 : COLOR.GRAY_300};
`;

export default PageIndicator;
