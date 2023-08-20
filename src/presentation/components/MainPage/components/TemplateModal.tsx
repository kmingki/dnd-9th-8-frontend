import React, { useState } from "react";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Text from "@components/common/Text";
import Button from "@components/common/Button";
import useGetStorage from "@hooks/queries/storage/useGetStorage";
import { getTripDetailRange } from "@utils/getDate";
import { useDispatch } from "react-redux";
import { changeCreateTripState } from "@reducer/slices/createTrip/createTripSlice";

const TemplateModal = ({ setClicked }: any) => {
  const dispatch = useDispatch();
  const { data: storageData } = useGetStorage();
  const [clickedIdx, setClickedIdx] = useState<number>(-1);

  const handleClickNext = () => {
    dispatch(
      changeCreateTripState({
        type: "tripId",
        value: storageData[clickedIdx].travelId,
      })
    );
    dispatch(
      changeCreateTripState({
        type: "tripName",
        value: storageData[clickedIdx].Title,
      })
    );
    setClicked(true);
  };
  return (
    <TemplateModalWrapper>
      <Text
        text="템플릿 선택"
        fontSize={20}
        fontWeight={600}
        lineHeight="24px"
        color={COLOR.GRAY_900}
      />
      <Spacing size={21} />
      <TemplateList>
        {storageData?.map((travel: any, index: number) => (
          <div className="template-container" key={travel.travelId}>
            <Button
              width="100%"
              radius={12}
              background={COLOR.WHITE}
              border="1px solid #E0E3E8"
              onClick={() => setClickedIdx(index)}
              clicked={clickedIdx === index ? "true" : "false"}
              customstyle="border: 1.5px solid #00B488"
              padding="14px 12px"
            >
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
            </Button>
          </div>
        ))}
      </TemplateList>
      <Spacing size={30} />
      <Button
        width="100%"
        radius={8}
        padding="20px"
        background={COLOR.MAIN_GREEN}
        border="none"
        onClick={handleClickNext}
      >
        <Text
          text="선택하기"
          color={COLOR.WHITE}
          fontSize={18}
          fontWeight={600}
          lineHeight="18px"
        />
      </Button>
    </TemplateModalWrapper>
  );
};

const TemplateModalWrapper = styled.div`
  background-color: ${COLOR.WHITE};
`;

const TemplateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-height: 360px;
  overflow-y: auto;
  .template-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .trip-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      text-align: left;
    }
  }
`;
export default TemplateModal;
