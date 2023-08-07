import React from "react";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import Spacing from "@components/common/Spacing";
import ProgressBar from "@components/common/ProgressBar";

const TripCard = () => {
  const dummy = {
    date: "D-24",
    tripname: "양양 여름",
    range: "8월 21일 ~ 8월 24일",
  };
  const checkProgress = {
    curr: "24",
    max: "38",
  };
  return (
    <TripCardWrapper>
      <TopWrapper>
        <div className="d-day">D-24</div>
        <div className="count">
          2개
          <Icon icon="Chevron" />
        </div>
      </TopWrapper>
      <Spacing size={13} />
      <MainWrapper>
        <div className="icon">
          <Icon icon="Beach" />
        </div>
        <div className="trip-info">
          <div className="trip-name">{dummy.tripname}</div>
          <div className="trip-range">{dummy.range}</div>
        </div>
      </MainWrapper>
      <Spacing size={14} />
      <BottomWrapper>
        <ProgressBar
          max={checkProgress.max}
          value={checkProgress.curr}
          percent={false}
          percentNumber={100}
          size="small"
          startColor="#06DCA8"
          finishColor="#00B494"
        />
        <Spacing size={14} />
        <div className="text">
          {`완료까지 ${
            Number(checkProgress.max) - Number(checkProgress.curr)
          }개의 항목이 남아있어요`}
        </div>
      </BottomWrapper>
    </TripCardWrapper>
  );
};

const TripCardWrapper = styled.div`
  padding: 18px;
  border-radius: 11px;
  background: ${COLOR.WHITE};
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .d-day {
    color: ${COLOR.MAIN_GREEN};
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
  }
  .count {
    display: flex;
    flex-direction: row;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  .icon {
    width: fit-content;
  }
  .trip-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    .trip-name {
      color: ${COLOR.GRAY_800};
      font-size: 18px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: -0.09px;
    }
    .trip-range {
      color: ${COLOR.GRAY_600};
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
    }
  }
`;
const BottomWrapper = styled.div`
  .text {
    color: #397cff;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
  }
`;
export default TripCard;
