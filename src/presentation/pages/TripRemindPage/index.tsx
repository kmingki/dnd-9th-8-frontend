import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import styled from "styled-components";
import COLOR from "@styles/colors";
import Button from "@components/common/Button";
import BottomButton from "@components/common/BottomButton";

const TripRemindPage = () => {
    const navigate = useNavigate();
    const { tripId } = useParams();
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
                onClick={()=>{navigate(`/doublecheck/${tripId}`)}}
                textButton={true}
                textButtonOnClick={()=>{navigate("/")}}
                textButtonChild="안할래요"
            />
        </div>
      </Container>
    );
  };

const Container = styled.div`
    padding: 0 20px;  
    height: 100%;
    background-color: ${COLOR.GRAY_50};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top : 149.3px;
`;

export default TripRemindPage;

