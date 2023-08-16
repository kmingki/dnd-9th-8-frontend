import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "@styles/colors";
import Button from "@components/common/Button";
import BottomButton from "@components/common/BottomButton";

const TripRemindPage = () => {

    const [title, setTitle] = useState("");
    const [ isOpenCalendar, setIsOpenCalendar ] = useState(false); 
   
    return (
      <Container>
        
        <ContentContainer>
            <Icon icon="Remind"/>
            <Text text="내일로 다가온 여행" color={COLOR.MAIN_GREEN} fontSize={26} lineHeight="36.4px" fontWeight={600} />
            <Spacing size={8}/>
            <Text text="리스트를 다시 한 번 체크해보세요" color={COLOR.GRAY_700} fontSize={18} lineHeight="23.76px" fontWeight={500} />
        </ContentContainer>
        <div>
            <BottomButton
                text="다시 체크하기"
                onClick={()=>{}}
                textButton={true}
                textButtonOnClick={()=>{}}
                textButtonChild="안할래요"
            />
        </div>
      </Container>
    );
  };

const Container = styled.div`
    padding: 0 20px;  
    height: 100%;
    background-color: #F7F9FC;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top : 149.3px;
`;

export default TripRemindPage;

