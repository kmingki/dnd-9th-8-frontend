import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import React from "react";
import { styled } from "styled-components";
import TripCard from "./TripCard";

const TripList = () => {
  const tripFilter = [{}];
  return (
    <TripListWrapper>
      <PeriodFilter>
        <OptionPeriodFilter clicked={true}>예정된 여행</OptionPeriodFilter>
        <OptionPeriodFilter clicked={false}>지난 여행</OptionPeriodFilter>
      </PeriodFilter>
      <Spacing size={8} />
      <DestFilter>
        <OptionDestFilter clicked={true}>국내</OptionDestFilter>|
        <OptionDestFilter clicked={false}>해외</OptionDestFilter>
      </DestFilter>
      <Spacing size={15} />
      <TripListContainer>
        <TripCard />
      </TripListContainer>
    </TripListWrapper>
  );
};

const TripListWrapper = styled.div``;
const PeriodFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  font-size: 18px;
  font-weight: 700;
  line-height: 140%;
`;
const OptionPeriodFilter = styled.span<{ clicked: boolean }>`
  color: ${({ clicked }) => (clicked ? COLOR.GRAY_800 : COLOR.GRAY_500)};
  text-decoration: ${({ clicked }) => (clicked ? "underline" : "none")};
  text-underline-offset: 6px;
`;
const DestFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: flex-end;

  color: ${COLOR.GRAY_400};
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
`;

const OptionDestFilter = styled.span<{ clicked: boolean }>`
  color: ${({ clicked }) => (clicked ? COLOR.GRAY_800 : COLOR.GRAY_500)};
`;
const TripListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export default TripList;
