import React from "react";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import { getTripDetailRange } from "../../../application/utils/getDate";
import HeartButton from "@components/common/HeartButton";

const TemplateExist = ({ storageData }: any) => {
  return (
    <TemplateExistWrapper>
      <Spacing size={15} />
      <TripWrapper>
        {storageData.map((travel: any) => (
          <div className="template-container" key={travel.travelId}>
            <div className="trip-info">
              <Text
                text={travel.Title}
                color={COLOR.GRAY_900}
                fontSize={16}
                fontWeight={600}
                lineHeight="140%"
              />
              <Text
                text={`${getTripDetailRange(
                  travel.startDate
                )} ~ ${getTripDetailRange(travel.endDate)}`}
                color={COLOR.GRAY_600}
                fontSize={14}
                fontWeight={600}
                lineHeight="145%"
              />
            </div>
            <HeartButton isInStorage={true} travelId={travel.travelId} />
          </div>
        ))}
      </TripWrapper>
    </TemplateExistWrapper>
  );
};

const TemplateExistWrapper = styled.div``;
const TripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .template-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 14px 18px;
    border: 2px solid ${COLOR.GRAY_100};
    border-radius: 8px;
    background: ${COLOR.WHITE};
    box-shadow: 0px 2px 100px 1px rgba(150, 150, 150, 0.1);

    .trip-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      text-align: left;
    }
  }
`;
export default TemplateExist;
