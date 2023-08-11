import React from "react";
import { styled } from "styled-components";
import CustomCalendar from "../common/Calendar";
import TextBox from "./components/TextBox";
import Spacing from "../common/Spacing";
import BottomButton from "../common/BottomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import { useNavigate } from "react-router-dom";
import { initializeCreateTripInfo } from "../../../application/reducer/slices/createTrip/createTripSlice";
import CalendarRange from "@components/common/CalendarRange";

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tripRange, state } = useSelector((state: RootState) => state.createTrip);

  const handleClickNextBtn = () => {
    if (state === "main") {
      navigate("/trip"); // 여행 상세 페이지로 이동
    } else {
      navigate("/trip-create/complate");
    }
  };
  const handleClickSkipBtn = () => {
    dispatch(initializeCreateTripInfo());
    navigate("/");
  };
  return (
    <StepWrapper>
      <Spacing size={28} />
      <TextBox>언제 여행을 떠나시나요?</TextBox>
      <Spacing size={26} />
      <CalendarWrapper>
        <CustomCalendar />
        <Spacing size={23} />
        <CalendarRange />
      </CalendarWrapper>
      <BottomButton
        disabled={tripRange?.start === "" || tripRange?.end === ""}
        text="체크리스트 만들기"
        onClick={handleClickNextBtn}
        textButton={true}
        textButtonOnClick={handleClickSkipBtn}
        textButtonChild="다음에 할래요"
      />
    </StepWrapper>
  );
};

const StepWrapper = styled.div``;

const CalendarWrapper = styled.div`
  padding: 16px;
`;

export default Step3;
