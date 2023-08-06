import React from "react";
import { styled } from "styled-components";
import { GreyTemplate } from "@styles/templates";
import BackHeader from "../../components/common/BackHeader";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import TodoList from "@components/domain/TodoList";

const CheckListPage = () => {
    return (
      <GreyTemplate>
        <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <BackHeader />
        <div>해야 할 일</div>
        <div><Icon icon="Plus" fill={COLOR.MAIN_BLACK}/></div>
        </div>
        
        <TextContainer>
            <Description>
                    {'도쿄 여행'}
            </Description>

            <Dot />
            <Description>
                    {'3박 4일'}
            </Description>
        </TextContainer>
        <TextContainer>
            <ChecklistNumber>
                {'11'}
            </ChecklistNumber>
            <Title>
                {'개의 체크리스트가 남아 있어요'}
            </Title>
        </TextContainer>

        <TodoList></TodoList>
        

      </GreyTemplate>
    );
  };


const TextContainer = styled.div`
    width:100%;
    margin-left: 15px;
    display: flex;
    align-items: center;
`;

const ChecklistNumber = styled.div`
    margin-right: 8px;
    color : ${COLOR.MAIN_GREEN};
    font-weight : 500;
    font-size : 34px;
    line-height: 34px;
`;

const Title = styled.div`
    font-weight : 700;
    font-size: 26px;
`;

const Dot = styled.div`
    margin: 0 7.5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${COLOR.GRAY_500}
`;

const Description = styled.div`
  font-weight : 600;
  font-size: 14px;
  line-height: 14px;
  color: ${COLOR.GRAY_500};
`;



export default CheckListPage;