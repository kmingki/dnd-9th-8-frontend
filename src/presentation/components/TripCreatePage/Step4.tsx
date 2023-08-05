import React from "react";
import { styled } from "styled-components";
import Spacing from "../common/Spacing";
import TextBox from "./components/TextBox";
import COLOR from "@styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import Button from "../common/Button";
import BottomButton from "../common/BottomButton";
import { useNavigate } from "react-router-dom";
import { changeCreateTripState } from "../../../application/reducer/slices/createTrip/createTripSlice";

const Step4 = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const { checkCount } = useSelector((state: RootState) => state.createTrip);

  const handleClickNextBtn = () => {
    navigate("/");
  };

  const handleClickCount = (count: string) => {
    disptach(
      changeCreateTripState({
        type: "checkCount",
        value: count.split("번")[0],
      })
    );
  };

  return (
    <StepWrapper>
      <Spacing size={28} />
      <TextContainer>
        <TextBox>
          <div>
            여행 전까지 준비 사항을
            <br />몇 번 체크하시겠어요?
          </div>
        </TextBox>
        <div className="sub-text">체크할 횟수를 선택해주세요</div>
      </TextContainer>
      <Spacing size={38} />
      <ButtonWrapper>
        {["1번", "2번", "3번"].map((count) => (
          <Button
            key={count}
            width="100%"
            height="56px"
            radius={12}
            background="#F7F9FC"
            color={COLOR.GRAY_700}
            border="none"
            clicked={checkCount === count.split("번")[0] ? "true" : "false"}
            onClick={() => handleClickCount(count)}
            customstyle="border: 1px solid #00B488;"
          >
            <div className="button-text"> {count}</div>
          </Button>
        ))}
      </ButtonWrapper>
      <BottomButton
        disabled={checkCount === ""}
        text="다음"
        onClick={handleClickNextBtn}
        textButton={true}
        textButtonOnClick={() => {}}
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
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  .button-text {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
`;

export default Step4;
