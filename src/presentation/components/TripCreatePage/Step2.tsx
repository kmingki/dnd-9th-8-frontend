import React from "react";
import { styled } from "styled-components";
import Spacing from "../common/Spacing";
import COLOR from "@styles/colors";
import TextBox from "./components/TextBox";
import BottomButton from "../common/BottomButton";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import {
  changeCreateTripState,
  initializeCreateTripInfo,
} from "../../../application/reducer/slices/createTrip/createTripSlice";

const Step2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tripName } = useSelector((state: RootState) => state.createTrip);

  const handleChangeTripName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeCreateTripState({
        type: "tripName",
        value: e.target.value,
      })
    );
  };
  const handleClickNextBtn = () => {
    navigate("/trip-create/3");
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
            떠날 여행지 이름을
            <br />
            입력해주세요
          </div>
        </TextBox>
        <div className="sub-text">텍스트 입력 시 체크리스트 제목으로 설정됩니다</div>
      </TextContainer>
      <Spacing size={30} />
      <Input
        placeholder="여행지를 입력해주세요"
        onChange={handleChangeTripName}
        type="text"
        value={tripName || ""}
        textCount={true}
        maxLength={10}
        success={!tripName || tripName.length < 2 ? "false" : "true"}
      />
      <BottomButton
        disabled={tripName === "" ? true : false}
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
  .sub-text {
    color: ${COLOR.GRAY_600};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 132%;
  }
`;

export default Step2;
