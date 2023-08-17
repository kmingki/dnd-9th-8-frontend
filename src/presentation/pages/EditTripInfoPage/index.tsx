import React, { useState } from "react";
import { WhiteTemplate } from "@styles/templates"
import CustomCalendar from "@components/common/Calendar";
import CalendarRange from "@components/common/CalendarRange";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import styled from "styled-components";
import Text from "@components/common/Text";
import Input from "@components/common/Input";
import Spacing from "@components/common/Spacing";
import Icon from "@components/common/Icon";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { getMonthandDate } from "@utils/getDate";


const EditTripInfoPage = () => {

  const [title, setTitle] = useState("");
  const [ isOpenCalendar, setIsOpenCalendar ] = useState(false); 
  const { tripRange } = useSelector((state: RootState) => state.createTrip);
 
  return (
    <WhiteTemplate>
      <BackHeader text="여행 수정하기" />
      
      <ContentContainer>
        <Text text="여행 이름" color={COLOR.GRAY_500} fontSize={15} lineHeight="21px" fontWeight={600} />
        <Spacing size={5.53}/>
        <Input placeholder="" onChange={()=>{}} value={title} />
        <Spacing size={23.98}/>
        <Text text="여행 일정" color={COLOR.GRAY_500} fontSize={15} lineHeight="21px" fontWeight={600} />
        <Spacing size={5.53}/>
        <InputWrapper>
        <DateButton onClick={()=>{setIsOpenCalendar(prev=>!prev)}}>
          <Text text={getMonthandDate(tripRange?.start) || "08월 01일 (수)"} color={COLOR.GRAY_800} fontSize={15} lineHeight="18px" fontWeight={600} />
          <Icon icon="Calendar"/>
        </DateButton>
        <Bar />
        <DateButton onClick={()=>{setIsOpenCalendar(prev=>!prev)}}>
          <Text text={getMonthandDate(tripRange?.end) || "08월 01일 (수)"} color={COLOR.GRAY_800} fontSize={15} lineHeight="18px" fontWeight={600} />
          <Icon icon="Calendar"/>
        </DateButton>
        </InputWrapper>
        {isOpenCalendar && 
        <CalendarWrapper>
          <CustomCalendar defaultStartDay={[2023, 0, 1]} defaultEndDay={[2023, 0,15]} />
        </CalendarWrapper>
        }
        
      </ContentContainer>
    </WhiteTemplate>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const DateButton = styled.button`
  all : unset;
  border: 1px solid #BEC2C9;
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
`;
export default EditTripInfoPage;
