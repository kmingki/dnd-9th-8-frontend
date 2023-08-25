import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import styled from "styled-components";
import COLOR from "@styles/colors";
import Button from "@components/common/Button";
import BottomButton from "@components/common/BottomButton";
import RemindImage from './RemindImage.svg';

const TripRemindPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [ isOpenCalendar, setIsOpenCalendar ] = useState(false); 
   
    return (
      <Container>
        
        <ContentContainer>
            <img src={RemindImage} width="100%" alt=""/>
            <Spacing size={52.04}/>
            <Text text="내일로 다가온 여행" color={COLOR.MAIN_GREEN} fontSize={26} lineHeight="36.4px" fontWeight={600} />
            <Spacing size={8}/>
            <Text text="리스트를 다시 한 번 체크해보세요" color={COLOR.GRAY_700} fontSize={18} lineHeight="23.76px" fontWeight={500} />
        </ContentContainer>
        <div>
            <BottomButton
                text="다시 체크하기"
                onClick={()=>{navigate(`/doublecheck/${id}`)}}
                textButton={true}
                textButtonOnClick={()=>{ localStorage.setItem("block_remind_page", "true"); navigate("/")}}
                textButtonChild="안할래요"
            />
        </div>
      </Container>
    );
  };

const Container = styled.div`
    height: 100%;
    background-color: #F7F9FC;
    margin-top : 14px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-top: calc(100%);
  background: rgba(0, 0, 0, 0.5);

`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
`; 

export default TripRemindPage;

