import React, { useState } from "react";
import { styled } from "styled-components";
import Color from '@styles/colors';
import Icon from "@components/common/Icon";
import Input from "@components/common/Input";
import { CheckItem, AddCheckItem } from "./CheckItem";
import { listItem , checkList } from "../../../../application/type/checkList";

/*
const CheckList = () => {


    return (
        <CheckListWrapper>
            <Head>
                <Title>
                    <Icon icon='Calendar'/>
                    {'확인'}
                </Title>
                <TitleLeft>
                    <Indicator>0/5</Indicator>
                    <Icon icon='MoreOutlined'/>
                    <Icon icon='DownOutlined'/>
                </TitleLeft>

            </Head>
            <CheckItemWrapper>
            {list.map((item, index) =>
                <CheckItem id={item.id} isChecked={item.isChecked} title={item.title}/>
            )}
            </CheckItemWrapper>
        </CheckListWrapper>
    );
}
*/

type checkListType = { id: number; name: string; list: listItem[], onChangeCheckItem: any, onClickPlusItem: any, onChangeCheckItemTitle: any, onClickDeleteCheckItem: any};


const AddCheckList = ({id, name, list, onChangeCheckItem, onClickPlusItem, onChangeCheckItemTitle, onClickDeleteCheckItem}: checkListType) => {

    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickOpenCheckList = () => {
        setIsOpen(prev=>!prev);
    };

    return (
        <>
        <CheckListWrapper>
            <Head>
                <Title>
                    <TitleIconWrapper onClick={()=>{setIsModalOpen(prev=>!prev)}}>
                        <Icon icon='Calendar'/>
                    </TitleIconWrapper>
                    <InputWrapper placeholder={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} value={title}/>
                    <TitleLeft>
                    <Indicator>{list.filter((item) => item.isChecked === true).length}/{list.length}</Indicator>
                    {isOpen? 
                    <IconWrapper>
                        <Icon icon='UpOutlined' onClick={onClickOpenCheckList}/>
                    </IconWrapper>:
                    <IconWrapper>
                        <Icon icon='DownOutlined' onClick={onClickOpenCheckList}/>
                    </IconWrapper>}
                </TitleLeft>
                </Title>
            </Head>

            {isOpen && 
            <>
                <CheckItemWrapper>
                    {list.map((item, index) =>
                        <CheckItem 
                        checkListId={id} 
                        id={item.id} 
                        isChecked={item.isChecked} 
                        title={item.title} 
                        onChangeCheckItem={onChangeCheckItem} 
                        onChangeCheckItemTitle={onChangeCheckItemTitle}
                        onClickDeleteCheckItem={onClickDeleteCheckItem}
                        />
                    )} 
                    <AddCheckItem checkListId={id} id={list.length} onClickPlusItem={onClickPlusItem}/>
                </CheckItemWrapper>
                <FinishButtonWrapper>
                    <FinishButton>
                        완료
                    </FinishButton>
                </FinishButtonWrapper>
            </>
            }
        </CheckListWrapper>

        {isModalOpen && 
        <ModalOverlay>
            <ModalWindow>
                <Content>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                </Content>
                <ButtonContainer>
                    <ModalDeleteButton>
                        지우기
                    </ModalDeleteButton>
                    <Space />
                    <ModalSaveButton>
                        저장
                    </ModalSaveButton>
                </ButtonContainer>
            </ModalWindow>
        </ModalOverlay>
        }
        </>
    );
}

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
    gap: 10px;
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


const ContentWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${Color.GRAY_50};
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
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
`;


const ModalSaveButton = styled.button`
    all : unset;
    border : 0px;
    width: 142px;
    height : 45px;
    border-radius: 10px;
    background-color : ${Color.MAIN_GREEN};
    text-align: center;
    margin-bottom : 20px;s
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Space = styled.div`
    width: 12px;
`;

export { /*CheckList,*/ AddCheckList };
