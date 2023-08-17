import styled from "styled-components";
import COLOR from "@styles/colors";

const TagWrapper = styled.div`
    display:flex;
    align-items: center;
    gap: 4.56px;
`;
const ContentWrapper = styled.div`
    padding-top: 21px;
    background-color: #F6F7F9;
`;

const TripInfo = styled.div`
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


const ContentContainer = styled.div`
    height: 100%;
    padding: 0 20px;
    background-color:#F6F7F9;
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

const IconWrapper = styled.button`
    all : unset;
    border : 0px;
    position: relative;
`;

const AddTodoButton = styled.button`
    all : unset;
    border : 0px;
    padding : 6px 20px;
    box-shadow: 0px 0px 10px 0px #8585852E;
    border-radius: 8px;
    display: flex;
    background-color: ${COLOR.WHITE};
    gap : 10px;
    bottom: 0px;
    position: fixed;
    bottom: 59px;
    left: 50%; //좌측에서 우측으로 50% 이동하고(left:50%), 다음으로 x축 방향(왼쪽)으로 50% 이동하여 중앙정렬
    transform: translate(-50%, 0);
`;

const DropDown = styled.div`
    padding : 16px 0px;
    margin-top: 1.5px;
    width : 113px;
    border-radius: 10px;
    position: absolute;
    right : 0px; // icon wrapper 기준으로 right 0px 
    background-color: ${COLOR.WHITE};
    box-shadow: 0px 0px 10px 0px #85858561;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 14px;
    
`; 

const DropDownButton = styled.button`
    all : unset;
    border : 0px;   
`;


//checklist
const CheckListWrapper = styled.div`
    margin-top: 22px;
`;

export { 
    TagWrapper,
    ContentWrapper,
    TripInfo,
    TextContainer,
    Title,
    ContentContainer,
    DescriptionWrapper,
    Description,
    IconWrapper,
    DropDown,
    DropDownButton,
    CheckListWrapper,
    AddTodoButton
};