import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WhiteTemplate } from "@styles/templates";
import CustomCalendar from "@components/common/Calendar";
import CalendarRange from "@components/common/CalendarRange";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import styled from "styled-components";
import Text from "@components/common/Text";
import Input from "@components/common/Input";
import Spacing from "@components/common/Spacing";
import BottomButton from "@components/common/BottomButton";
import Icon from "@components/common/Icon";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { getMonthandDate, getMonthandDateList } from "@utils/getDate";
import useUpdateTravel from "@hooks/queries/travel/useUpdateTravel";
import useGetTravelDetail from "@hooks/queries/travel/useGetTravelDetail";

interface TripType {
  title?: string;
  dDay?: string;
  destinationType: string;
  startDate?: string;
  endDate?: string;
}

function timestamp(date: string){
  let newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);
  return newDate.toISOString().substring(0, 19);
}

const EditTripInfoPage = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetTravelDetail(String(tripId)); //여행 상세 조회
  const { mutate: updateTravelMutate /*data , isLoading, error*/ } =
    useUpdateTravel();
  const [title, setTitle] = useState(data?.title);
  const [startDate, setStartDate] = useState(data?.startDate);
  const [endDate, setEndDate] = useState(data?.endDate);

  const [travel, setTravelInfo] = useState<TripType>(data);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  useEffect(() => {
    if (data) {
      setTravelInfo(data);
      setTitle(data?.title);
      setStartDate(data?.startDate);
      setEndDate(data?.endDate);
    }
  }, [data]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeStartDay = (date: string) => {
    setStartDate(date);
  };

  const onChangeEndDay = (date: string) => {
    setEndDate(date);
  };

  const onClickEditButton = () => {
    updateTravelMutate({
      travelId: Number(tripId),
      travelInfo: { title, startDate: timestamp(startDate), endDate: timestamp(endDate) },
    });
    navigate(`/trip/${Number(tripId)}`);
  };
  return (
    <WhiteTemplate>
      <BackHeader text="여행 수정하기" />

      <ContentContainer>
        <Text
          text="여행 이름"
          color={COLOR.GRAY_500}
          fontSize={15}
          lineHeight="21px"
          fontWeight={600}
        />
        <Spacing size={5.53} />
        <Input placeholder="" onChange={onChangeTitle} value={title} />
        <Spacing size={23.98} />
        <Text
          text="여행 일정"
          color={COLOR.GRAY_500}
          fontSize={15}
          lineHeight="21px"
          fontWeight={600}
        />
        <Spacing size={5.53} />
        <InputWrapper>
          <DateButton
            onClick={() => {
              setIsOpenCalendar((prev) => !prev);
            }}
          >
            <Text
              text={getMonthandDate(startDate)}
              color={COLOR.GRAY_800}
              fontSize={15}
              lineHeight="18px"
              fontWeight={600}
            />
            <Icon icon="CalendarGreen" />
          </DateButton>
          <Bar />
          <DateButton
            onClick={() => {
              setIsOpenCalendar((prev) => !prev);
            }}
          >
            <Text
              text={getMonthandDate(endDate)}
              color={COLOR.GRAY_800}
              fontSize={15}
              lineHeight="18px"
              fontWeight={600}
            />
            <Icon icon="CalendarGreen" />
          </DateButton>
        </InputWrapper>
        {isOpenCalendar && (
          <CalendarWrapper>
            <CustomCalendar
              defaultStartDay={getMonthandDateList(startDate)}
              defaultEndDay={getMonthandDateList(endDate)}
              onChangeStartDay={onChangeStartDay}
              onChangeEndDay={onChangeEndDay}
            />
          </CalendarWrapper>
        )}
        <Spacing size={100} />
      </ContentContainer>

      <BottomButton text="수정하기" onClick={onClickEditButton} />
    </WhiteTemplate>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DateButton = styled.button`
  all: unset;
  border: 1px solid #bec2c9;
  border-radius: 8px;
  padding: 15px 12px;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  height: 1px;
  width: 12px;
  background-color: ${COLOR.GRAY_400};
`;

const ContentContainer = styled.div`
  padding-top: 41.47px;
`;

const CalendarWrapper = styled.div`
  padding: 16px;
  margin-top: 11.47px;
  margin-right: 17.5px;
  margin-left: 17.5px;
  border-radius: 14px;
  box-shadow: 0px 0px 9.899947166442871px 0px #8585852b;
`;

export default EditTripInfoPage;
