import React from "react";
import { styled } from "styled-components";
import CustomCalendar from "../common/Calendar";
import TextBox from "./components/TextBox";
import Spacing from "../common/Spacing";
import BottomButton from "../common/BottomButton";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { useNavigate } from "react-router-dom";
import COLOR from "@styles/colors";

const Step3 = () => {
  const navigate = useNavigate();
  const { tripRange } = useSelector((state: RootState) => state.createTrip);

  const handleClickNextBtn = () => {
    navigate("/trip-create/complate");
  };

  return (
    <StepWrapper>
      <Spacing size={28} />
      <TextBox>언제 여행을 떠나시나요?</TextBox>
      <Spacing size={26} />
      <CalendarWrapper>
        <CustomCalendar />
        <Spacing size={16} />
      </CalendarWrapper>
      <Spacing size={23} />
      <TripRangeWrapper>
        <div className="range-box">
          <span>부터</span>
          <div className="range-text">{tripRange?.start}</div>
        </div>
        <div className="range-slash">
          <span></span>
          <div>/</div>
        </div>
        <div className="range-box">
          <span>까지</span>
          <div className="range-text">{tripRange?.end}</div>
        </div>
      </TripRangeWrapper>
      <BottomButton
        disabled={tripRange?.start === "" || tripRange?.end === ""}
        text="체크리스트 만들기"
        onClick={handleClickNextBtn}
        textButton={true}
        textButtonOnClick={() => {}}
        textButtonChild="다음에 할래요"
      />
    </StepWrapper>
  );
};

const StepWrapper = styled.div``;

const CalendarWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dbdbdb;
`;
const TripRangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;

  .range-box {
    display: flex;
    flex-direction: column;
    gap: 6px;

    width: 115px;

    color: ${COLOR.GRAY_500};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    text-align: center;
    .range-text {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${COLOR.GRAY_900};
      font-size: 18px;
      font-weight: 600;
      line-height: normal;
    }
  }
  .range-slash {
    display: flex;
    align-items: center;

    font-size: 17px;
    color: ${COLOR.GRAY_500};
  }
`;
export default Step3;
