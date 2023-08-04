import React, { useState } from "react";
import { styled } from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";

const CustomCalendar = () => {
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
    } else {
      setDateRange([date, date]);
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
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div``;
export default CustomCalendar;
