import React from "react";
import { styled } from "styled-components";
import COLOR from "@styles/colors";
import Spacing from "../common/Spacing";
import TextBox from "./components/TextBox";
import OnboardingButton from "../common/OnboardingButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import {
  changeCreateTripState,
  initializeCreateTripInfo,
} from "../../../application/reducer/slices/createTrip/createTripSlice";
import BottomButton from "../common/BottomButton";
import { useNavigate } from "react-router-dom";
import Text from "@components/common/Text";

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = "DND";
  const { tripType } = useSelector((state: RootState) => state.createTrip);
  const tripObj = [
    { dest: "국내", text: "국내 여행" },
    { dest: "해외", text: "해외 여행" },
  ];
  const handleClickOnboarding = (dest: string) => {
    dispatch(
      changeCreateTripState({
        type: "tripType",
        value: dest,
      })
    );
  };
  const handleClickNextBtn = () => {
    navigate("/trip-create/2");
  };
  const handleClickSkipBtn = () => {
    dispatch(initializeCreateTripInfo());
    navigate("/");
  };
  return (
    <StepWrapper>
      <Spacing size={28} />
      <TextContainer>
        <TextBox>
          <div>
            {`${userName}님 반가워요,`}
            <br />
            어떤 여행을 준비하고 계신가요?
          </div>
        </TextBox>
        <Text
          text="여행지 유형에 따라 기본 체크리스트가 제공돼요"
          color={COLOR.GRAY_600}
          fontSize={16}
          fontWeight={600}
          lineHeight="132%"
        />
      </TextContainer>
      <Spacing size={38} />
      <OnboardingButtonContainer>
        {tripObj.map((trip: { dest: string; text: string }) => (
          <OnboardingButton
            key={trip.dest}
            dest={trip.dest}
            text={trip.text}
            onClick={() => handleClickOnboarding(trip.dest)}
            isChecked={tripType === trip.dest}
          ></OnboardingButton>
        ))}
      </OnboardingButtonContainer>
      <BottomButton
        disabled={tripType === "" ? true : false}
        text="다음"
        onClick={handleClickNextBtn}
        textButton={true}
        textButtonOnClick={handleClickSkipBtn}
        textButtonChild="다음에 할래요"
      />
    </StepWrapper>
  );
};

const StepWrapper = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const OnboardingButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Step1;
