import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
import { getMonthandDate } from "../../../../application/utils/getDate";
import { changeTripRange } from "../../../../application/reducer/slices/createTrip/createTripSlice";
import { RootState } from "@store";
import Spacing from "../Spacing";
import COLOR from "@styles/colors";

const CustomCalendar = () => {
  const dispatch = useDispatch();
  const { tripRange } = useSelector((state: RootState) => state.createTrip);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return date.toLocaleString(locale, { month: "long" }) + " " + date.getFullYear();
  };

  const formatDay = (locale: string | undefined, date: Date) => {
    return date.getDate().toString();
  };

  const updateDateRange = (date: Date) => {
    if (dateRange[0] === dateRange[1] && date >= dateRange[0]) {
      setDateRange([dateRange[0], date]);
      dispatch(
        changeTripRange({
          type: "end",
          value: getMonthandDate(date),
        })
      );
    } else {
      setDateRange([date, date]);
      dispatch(
        changeTripRange({
          type: "start",
          value: getMonthandDate(date),
        })
      );
      dispatch(
        changeTripRange({
          type: "end",
          value: "",
        })
      );
    }
  };

  const titleClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      if (date.getDay() === 0) {
        return "sunday";
      } else if (date.getDay() === 6) {
        return "saturday";
      }
    }
  };

  return (
    <>
      <CalendarWrapper>
        <Calendar
          calendarType="hebrew"
          locale="ko-KR"
          selectRange={true}
          formatMonthYear={formatMonthYear}
          formatDay={formatDay}
          onClickDay={updateDateRange}
          tileClassName={titleClassName}
          next2Label={null}
          prev2Label={null}
        />
        <Spacing size={16} />
      </CalendarWrapper>
      <Spacing size={23} />
      <TripRangeWrapper>
        <div className="range-box">
          <span>부터</span>
          <div className="range-text">{tripRange?.start}</div>
        </div>
        <div className="range-slash">
          <span></span>
          <div>/</div>
        </div>
        <div className="range-box">
          <span>까지</span>
          <div className="range-text">{tripRange?.end}</div>
        </div>
      </TripRangeWrapper>
    </>
  );
};

const CalendarWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;
const TripRangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;

  .range-box {
    display: flex;
    flex-direction: column;
    gap: 6px;

    width: 115px;

    color: ${COLOR.GRAY_500};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    text-align: center;
    .range-text {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${COLOR.GRAY_900};
      font-size: 18px;
      font-weight: 600;
      line-height: normal;
    }
  }
  .range-slash {
    display: flex;
    align-items: center;

    font-size: 17px;
    color: ${COLOR.GRAY_500};
  }
`;

export default CustomCalendar;
