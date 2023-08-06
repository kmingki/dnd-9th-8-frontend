import React from "react";
import { styled } from "styled-components";
import Color from '@styles/colors';
import Spacing from "@components/common/Spacing";
import ProgressBar from "@components/common/ProgressBar";
import TextButton from "@components/common/TextButton";

type TodoCardType = {
};

const TodoCard = ({}: TodoCardType) => {
  return (
    <TodoCardWrapper>
        <Title>
            해야 할 일
        </Title>
        <Spacing size={8} />
        <Description>
            여행 전 해야 할 일 간단한 메모 작성 칸?
        </Description>
        <Spacing size={11} />
        <ProgressBar 
        max='100'
        value='44'
        percent={true}
        percentNumber={44}
        size='small'
        startColor='#4561F9' />
        <TextButtonWrapper>
            <TextButton onClick={() => {}} text='편집하기' />
        </TextButtonWrapper>
    </TodoCardWrapper>
  );
};

const TodoCardWrapper = styled.div`
    padding: 19px 17px;
    margin-bottom: 20px;
    background-color: ${Color.WHITE};
    border-radius: 10px;
`;


const Title = styled.div`
    font-weight : 700;
    font-size: 20px;
`;

const Description = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: #A5A5A5;
`;

const TextButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;


export default TodoCard;
