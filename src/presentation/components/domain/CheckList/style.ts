import { styled } from "styled-components";
import Color from '@styles/colors';

const FinishButtonWrapper = styled.div`
    display : flex;
    justify-content: flex-end;
    margin-top : 10px;
`;

const FinishButton = styled.button`
    all : unset;
    border : 0px;
    font-weight: 500;
    font-size : 16px;
    line-height: 16px;
    color : ${Color.MAIN_GREEN};
`;

const CheckListWrapper = styled.div`
    padding: 19px 17px;
    margin-bottom: 20px;
    background-color: ${Color.WHITE};
    border-radius: 12px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    display: flex;
    justify-content: flex-end;
    width : 100%;
`;

const Indicator = styled.div`
    width: 41px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Color.WHITE};
    border-radius: 38px;
    box-shadow: 0px 0px 4px 0px #0000001A;
    margin-right : 9px;
`;

const TitleLeft = styled.div`
    display: flex;
    align-items: center;
`;

const CheckItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
`

const InputWrapper = styled.input`
    width:100%;
    border: none;
    background: transparent;
    &:focus {
        outline:none;
    }
`;


const IconWrapper = styled.button`
    all : unset;
    border : 0px;
    padding-right: 8px;
`;

const TitleIconWrapper = styled.button`
    all : unset;
    border : 0px;
    padding-right: 8px;
`;

const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const ModalWindow = styled.div`
    background: ${Color.WHITE};
    box-shadow: 0px 0px 10px 0px #85858540;
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 16px;
    height: 197px;
    width : 80%;
    max-width : 420px;
    position: relative;
    margin : 0 0 47px 0 ;
`;


const Content = styled.div`
    padding : 20px 20px 0px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-content: center;
`;


const ContentWrapper = styled.button<{ id : string, titleEmoji : string}>`
    all : unset;
    border : 0px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${Color.GRAY_50};
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    z-index : 50;
    ${({id, titleEmoji})=>id === titleEmoji? `border : 2px solid ${Color.MAIN_GREEN}`:``};

`;

const ModalDeleteButton = styled.button`
    all : unset;
    border : 0px;    
    width: 142px;
    height : 45px;
    border-radius: 10px;
    background-color : #F2F4F6;
    text-align: center;
    margin-bottom : 20px;
    font-weight: 600;
    font-size: 17px;
    line-height: 20.4px;
`;


const ModalSaveButton = styled.button`
    all : unset;
    border : 0px;
    width: 142px;
    height : 45px;
    border-radius: 10px;
    background-color : ${Color.MAIN_GREEN};
    text-align: center;
    margin-bottom : 20px;
    font-weight: 600;
    font-size: 17px;
    line-height: 20.4px;
    color: ${Color.WHITE};
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Space = styled.div`
    width: 12px;
`;

export { 
    FinishButtonWrapper, 
    FinishButton, 
    CheckListWrapper, 
    Head, 
    Title, 
    Indicator, 
    TitleLeft, 
    CheckItemWrapper, 
    InputWrapper, 
    IconWrapper, 
    TitleIconWrapper, 
    ModalOverlay,
    ModalWindow,
    Content,
    ContentWrapper,
    ModalDeleteButton,
    ModalSaveButton,
    ButtonContainer,
    Space
};