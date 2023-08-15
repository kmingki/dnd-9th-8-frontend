import React from "react";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import Spacing from "@components/common/Spacing";
import Tag from "@components/common/Tag";
import Text from "@components/common/Text";
import { getTripDetailRange } from "../../../../application/utils/getDate";
import ProgressBar from "@components/common/ProgressBar";

const TripCard = ({ travelInfo }: any) => {
  return (
    <TripCardWrapper>
      <TopWrapper>
        <Tag
          text={travelInfo.dDay}
          backgroundColor={
            travelInfo.dDay.includes("-") ? COLOR.MAIN_GREEN : COLOR.GRAY_300
          }
          color={COLOR.WHITE}
        />
        <Tag
          text={travelInfo.destinationType === "OVERSEAS" ? "해외" : "국내"}
          backgroundColor={
            travelInfo.destinationType === "OVERSEAS" ? "#5F8BFB" : "#FE984E"
          }
          color={COLOR.WHITE}
        />
      </TopWrapper>
      <Spacing size={11} />
      <MainWrapper>
        <div className="trip-info">
          <Text
            text={travelInfo.title}
            color={COLOR.GRAY_900}
            fontSize={18}
            fontWeight={600}
            lineHeight="18px"
          />
          <Text
            text={`${getTripDetailRange(
              travelInfo.startDate
            )} ~ ${getTripDetailRange(travelInfo.endDate)}`}
            color={COLOR.GRAY_600}
            fontSize={14}
            fontWeight={500}
            lineHeight="14px"
          />
        </div>
        <Icon icon={travelInfo.isInStorage ? "FilledHeart" : "UnFilledHeart"} />
      </MainWrapper>
      {travelInfo.dDay.includes("-") && (
        <>
          <Spacing size={15} />
          <ProgressBar
            max={"100"}
            value={"25"}
            percent={false}
            percentNumber={100}
            size="small"
            startColor="#06DCA8"
            finishColor="#00B494"
          />
        </>
      )}
    </TripCardWrapper>
  );
};

const TripCardWrapper = styled.div`
  padding: 22px 18px;

  border: 2px solid ${COLOR.GRAY_100};
  border-radius: 8px;
  background: ${COLOR.WHITE};
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .trip-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export default TripCard;
