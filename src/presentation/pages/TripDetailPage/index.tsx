import { BlueTemplate } from "@styles/templates";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import styled from "styled-components";
import TodoCard from '@components/domain/TodoCard';
import Icon from '@components/common/Icon';

const TripDetailPage = () => {

    const dummyData = {
        title : '미국 여행',
        startDate : '2023.02.21',
        finishDate : '2023.02.24',
        people : '2',
        photo: ''
    }

    const list = [{},{}]; 

    return (
        <BlueTemplate>
            <BackHeader />
            <TripInfo>
                <Image src={dummyData.photo} />
                <TextContainer>
                    <Title>
                        {dummyData.title}
                    </Title>
                    <Spacing size={5} />
                    <Description>
                        {dummyData.startDate}&nbsp;~&nbsp;{dummyData.finishDate},&nbsp;{dummyData.people}명
                    </Description>
                </TextContainer>
                
            </TripInfo>
            <Line />
            <Spacing size={28} />
            {list.map((item, index) => (
          <TodoCard {...item} />
       ))}
        <AddTodoButton>
            <IconWrapper>
                <Icon icon="Plus" />
            </IconWrapper>
        </AddTodoButton>
        </BlueTemplate>
    )
};


const TripInfo = styled.div`
    width : 100%;
    height : 73px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
  height : 44px;
  width : 44px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
    width:100%;
    margin-left: 15px;
`;

const Title = styled.div`
    font-weight : 700;
    font-size: 26px;
`;

const Description = styled.div`
    font-weight : 500;
    font-size: 15px;
    color: #A5A5A5;
`;


const Line = styled.hr`
    border: 1px solid #D9D9D9;
`;

const AddTodoButton = styled.div`
    padding : 12px;
    border: 1.5px dashed #D9D9D9;
    border-radius: 8px;
`;

const IconWrapper = styled.div`
    padding : 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default TripDetailPage;