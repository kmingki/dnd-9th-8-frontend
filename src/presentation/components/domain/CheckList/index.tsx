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

    const onClickOpenCheckList = () => {
        setIsOpen(prev=>!prev);
    };

    return (
        <CheckListWrapper>
            <Head>
                <Title>
                    <Icon icon='Calendar'/>
                    <InputWrapper placeholder={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} value={title}/>
                    <TitleLeft>
                    <Indicator>{list.filter((item)=>item.isChecked === true).length}/{list.length}</Indicator>
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

export { /*CheckList,*/ AddCheckList };
