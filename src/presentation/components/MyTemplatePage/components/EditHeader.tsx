import React from "react";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

type EditHeaderType = {
  mainText: string;
  rightText: string;
  rightOnClick: any;
};

const EditHeader = ({ mainText, rightText, rightOnClick }: EditHeaderType) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <EditHeaderWrapper>
      <Icon icon="Arrow" onClick={handleClickBack} />
      <div className="mainText">{mainText}</div>
      <div className="rightText" onClick={rightOnClick}>
        {rightText}
      </div>
    </EditHeaderWrapper>
  );
};

const EditHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  color: ${COLOR.GRAY_900};

  font-weight: 700;

  .mainText {
    font-size: 18px;
    line-height: 140%;
  }
  .rightText {
    font-size: 16px;
    font-weight: 500;
  }
`;
export default EditHeader;
