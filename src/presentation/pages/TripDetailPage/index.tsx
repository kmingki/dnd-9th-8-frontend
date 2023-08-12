import { DefaultTemplate } from "@styles/templates";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import styled from "styled-components";
import TodoCard from '@components/domain/TodoCard';
import Icon from '@components/common/Icon';
import Tag from "@components/common/Tag";
import COLOR from "@styles/colors";

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
        <>
        <TripInfo>
        <BackHeader />
            <Tag text={`D-${'12'}`} backgroundColor={COLOR.MAIN_GREEN} color={COLOR.WHITE}/>
            <Spacing size={15} />
            <TextContainer>
                <Title>
                    {dummyData.title}
                </Title>
                <Spacing size={5} />
                <DescriptionWrapper>
                    <Description>{dummyData.startDate}&nbsp;~&nbsp;{dummyData.finishDate}</Description>
                    <Icon icon="MoreOutlined" fill="#8B95A1"/>
                </DescriptionWrapper>
            </TextContainer>
        </TripInfo>
        <Spacing size={25.5} />
        <DefaultTemplate>
        <ContentWrapper>
            {list.map((item, index) => (
            <TodoCard {...item} />))}    
        </ContentWrapper> 
            
        {/* <AddTodoButton>
            <IconWrapper>
                <Icon icon="Plus" />
            </IconWrapper>
        </AddTodoButton> */}
        </DefaultTemplate>
        </>
    )  
};

const ContentWrapper = styled.div`
    padding-top: 21px;
    background-color: #F6F7F9;
`;

const TripInfo = styled.div`
    width : 100%;
    background-color : ${COLOR.WHITE};
    padding : 0 20px;
`;

const TextContainer = styled.div`
    width:100%;
`;

const Title = styled.div`
    font-weight : 700;
    font-size: 26px;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
;
 
const Description = styled.div`
    font-weight : 600;
    font-size: 14px;
    line-height: 20px;
    color: ${COLOR.GRAY_800};
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