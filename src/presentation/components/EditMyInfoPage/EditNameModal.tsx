import React, { useState } from "react";
import BottomButton from "@components/common/BottomButton";
import CloseModalHeader from "@components/common/CloseModalHeader";
import Input from "@components/common/Input";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import { changeUserInfo } from "../../../application/reducer/slices/user/userInfoSlice";

const EditNameModal = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.userInfo);
  const [isError, setIsError] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length > 5) {
      value = value.substring(0, 5);
    }

    const pattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
    if (pattern.test(value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    dispatch(changeUserInfo({ type: "name", value: value }));
  };

  const handleClickNextBtn = () => {
    closeModal();
  };

  return (
    <EditNameModalWrapper>
      <CloseModalHeader text="이름 변경" closeModal={closeModal} />
      <Spacing size={30} />
      <TextContainer error={String(isError)}>
        한글 최대 5자 / 공백,영문,숫자,특수기호 불가
      </TextContainer>
      <Spacing size={14} />
      <Input
        placeholder="이름을 변경해주세요"
        onChange={handleChangeName}
        type="text"
        value={name || ""}
        textCount={true}
        maxLength={5}
        error={isError ? "true" : "false"}
        success={!isError && name ? "true" : "false"}
      />
      <BottomButton text="완료" onClick={handleClickNextBtn} />
    </EditNameModalWrapper>
  );
};

const EditNameModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 20px;
  background-color: ${COLOR.GRAY_50};
`;

const TextContainer = styled.div<{ error: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({ error }) => (error === "true" ? COLOR.WARNING : COLOR.GRAY_600)};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
`;
export default EditNameModal;
