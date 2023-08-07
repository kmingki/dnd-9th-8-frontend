import React, { useState } from "react";
import TextBox from "@components/TripCreatePage/components/TextBox";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Input from "@components/common/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import BottomButton from "@components/common/BottomButton";
import { useNavigate } from "react-router-dom";
import { changeUserInfo } from "../../../application/reducer/slices/user/userInfoSlice";

const UserName = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.userInfo);
  const [isError, setIsError] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const pattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
    if (pattern.test(value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    dispatch(changeUserInfo({ type: "name", value: value }));
  };

  const handleClickNextBtn = () => {
    navigate("/join/?state=checkcount");
  };
  return (
    <UserNameWrapper>
      <Spacing size={95} />
      <TextContainer error={isError}>
        <TextBox>
          <div>
            만나서 반가워요,
            <br />
            어떻게 불러드리면 될까요?
          </div>
        </TextBox>
        <div className="sub-text">한글 최대 5자 / 공백,영문,숫자,특수기호 불가</div>
      </TextContainer>
      <Spacing size={28} />
      <Input
        placeholder="서비스에서 이용할 이름을 입력해주세요"
        onChange={handleChangeName}
        type="text"
        value={name || ""}
        textCount={true}
        maxLength={5}
        error={isError}
      />
      <BottomButton disabled={isError} text="다음" onClick={handleClickNextBtn} />
    </UserNameWrapper>
  );
};

const UserNameWrapper = styled.div`
  padding: 0 20px;
`;

const TextContainer = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .sub-text {
    color: ${({ error }) => (error ? COLOR.WARNING : COLOR.GRAY_600)};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 132%;
  }
`;
export default UserName;
