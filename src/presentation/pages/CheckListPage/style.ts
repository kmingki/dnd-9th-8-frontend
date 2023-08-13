import { styled } from "styled-components";
import COLOR from "@styles/colors";

const TextWrapper = styled.div`
    margin-top : 35.52px;
    font-weight : 600;
    font-size : 22px;
    line-height: 20px;
    color: ${COLOR.GRAY_800};
    display : flex;
    align-items: center;
`;

const CountWrapper = styled.div`
    display: flex;
    margin-left: 7px;
`;

const Count = styled.div`
    font-weight : 600;
    font-size : 28px;
    line-height: 30px;
    color: ${COLOR.MAIN_GREEN};
`;

const Total = styled.div`
    font-weight : 500;
    font-size : 18px;
    line-height: 30px;
    color: ${COLOR.GRAY_700};
`;

const TextContainer = styled.div`
    margin-top: 8px;
    width:100%;
    display: flex;
    align-items: center;
`;

const CheckListWrapper = styled.div`
    margin-top: 22px;
`;

const Title = styled.div`
    font-weight : 700;
    font-size: 18px;
    line-height: 25.2px;
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
  color: ${COLOR.GRAY_700};
`;

const AddButtonWrapper = styled.div`
    display: flex;
    align-items : center;
    justify-content : center;
`;

const AddButton = styled.button`
  border : 0px;
  padding : 6px 20px 6px 20px;
  border-radius : 12px;
  background-color : #EEF1F6;
  color : ${COLOR.MAIN_GREEN};
  font-weight : 700;
  font-size : 14px;
  line-height : 30px;
  height : 42px;
  display: flex;
  align-items : center;
  justify-content : center;
`;

const AddButtonText = styled.div`
  margin-left : 8.5px;
`;

const Space = styled.div`
    width: 10px;
`;

export {
    TextWrapper, 
    CountWrapper,
    Count,
    Total,
    TextContainer,
    CheckListWrapper,
    Title,
    Dot,
    Description,
    AddButtonWrapper,
    AddButton,
    AddButtonText,
    Space
};