import React from "react";
import Spacing from "@components/common/Spacing";
import Tag from "@components/common/Tag";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import TextBox from "./TextBox";
import Icon from "@components/common/Icon";
import Button from "@components/common/Button";
import ProgressBar from "@components/common/ProgressBar";

const ListMain = () => {
  const checkProgress = {
    curr: "24",
    max: "38",
  };
  return (
    <ListMainWrapper>
      <Tag text="D-12" backgroundColor="#404244" color={COLOR.WHITE} />
      <Spacing size={10} />
      <TextBox>
        <div className="text-box">
          <div className="icon">
            <Icon icon="Plane" />
          </div>
          도쿄 여행에서 <br />
          14개의 체크리스트가 남아있어요
        </div>
      </TextBox>
      <div className="trip-range">8월 7일 ~ 8월 10일</div>
      <ProgressWrapper>
        <div className="progress-info">
          <div>
            <span className="curr"> {checkProgress.curr}</span>
            <span className="max">/{checkProgress.max}개</span>
          </div>

          <div className="bubble">
            <div>{`${checkProgress.curr}개 진행중`}</div>
          </div>
        </div>
        <ProgressBar
          max={checkProgress.max}
          value={checkProgress.curr}
          percent={false}
          percentNumber={100}
          size="large"
          startColor="#06DCA8"
          finishColor="#00B494"
        />
      </ProgressWrapper>
      <Spacing size={30} />
      <ButtonWrapper>
        <Button
          radius={12}
          padding="6px 20px"
          background="#EEF1F6"
          color={COLOR.MAIN_GREEN}
          border="none"
          width="fit-content"
        >
          <div className="button-text">체크리스트 보기</div>
        </Button>
      </ButtonWrapper>
    </ListMainWrapper>
  );
};

const ListMainWrapper = styled.div`
  padding: 24px 20px 26px;
  border-radius: 16px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 2px 100px 1px rgba(150, 150, 150, 0.1);

  .text-box {
    margin-bottom: 6px;
    .icon {
      display: inline-block;
      width: fit-content;
      margin-right: 6px;
    }
  }
  .trip-range {
    margin-bottom: 30px;

    color: ${COLOR.GRAY_500};
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.07px;
  }
`;
const ProgressWrapper = styled.div`
  .progress-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .curr {
      color: ${COLOR.GRAY_800};
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
    }
    .max {
      color: ${COLOR.GRAY_500};
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
    }
  }
  .bubble {
    position: relative;
    border: 1px solid #66d2b8;
    border-radius: 12px;
    width: fit-content;
    padding: 11px;
    margin-bottom: 10px;

    color: #06b394;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
  }
  .bubble::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 7px 7px 7px 7px;
    border-color: #ffffff transparent transparent transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: 32px;
    left: 50px;
  }
  .bubble::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 7px 7px 7px 7px;
    border-color: #66d2b8 transparent transparent transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: 34px;
    left: 50px;
  }
`;
const ButtonWrapper = styled.div`
  text-align: right;
  .button-text {
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
  }
`;
export default ListMain;
