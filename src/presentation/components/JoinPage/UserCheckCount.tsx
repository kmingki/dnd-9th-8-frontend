import React from "react";
import { styled } from "styled-components";
import Spacing from "../common/Spacing";

import COLOR from "@styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import Button from "../common/Button";
import BottomButton from "../common/BottomButton";
import { useNavigate } from "react-router-dom";
import TextBox from "@components/TripCreatePage/components/TextBox";
import { changeUserInfo } from "../../../application/reducer/slices/user/userInfoSlice";
import BackHeader from "@components/common/BackHeader";

const UserCheckCount = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const { checkCount } = useSelector((state: RootState) => state.userInfo);

  const handleClickNextBtn = () => {
    navigate("/login/complate");
  };

  const handleClickCount = (count: string) => {
    disptach(
      changeUserInfo({
        type: "checkCount",
        value: count.split("번")[0],
      })
    );
  };

  return (
    <UserCheckWrapper>
      <BackHeader />
      <Spacing size={60} />
      <TextContainer>
        <TextBox>
          <div>
            여행 전까지 준비 사항을
            <br />몇 번 체크하시겠어요?
          </div>
        </TextBox>
        <div className="sub-text">설정된 횟수만큼 리스트를 체크할 수 있어요</div>
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
        text="체크리스트 만들기"
        onClick={handleClickNextBtn}
        textButton={true}
        textButtonOnClick={() => {}}
        textButtonChild="다음에 할래요"
      />
    </UserCheckWrapper>
  );
};

const UserCheckWrapper = styled.div`
  padding: 0 20px;
`;
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

export default UserCheckCount;
