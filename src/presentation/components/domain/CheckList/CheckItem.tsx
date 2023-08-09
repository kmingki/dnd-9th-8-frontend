import React, { useState } from "react";
import { styled } from "styled-components";
import Color from '@styles/colors';
import Icon from "@components/common/Icon";
import Input from "@components/common/Input";
import { listItem , checkList } from "../../../../application/type/checkList";

type CheckItemType = {
    checkListId : number,
    id :number,
    isChecked: boolean,
    title: string, 
    onChangeCheckItem : any,
    onChangeCheckItemTitle : any,
    onClickDeleteCheckItem: any
};


const CheckItem = ({ checkListId, id, isChecked, title, onChangeCheckItem, onChangeCheckItemTitle, onClickDeleteCheckItem}: CheckItemType) => {

    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {

        onChangeCheckItemTitle(checkListId, id, e.target.value);
        setValue(e.target.value);
    }
    
    return (
        <CheckItemContainer>
            <CheckItemWrapper>
                <CheckBox type="checkbox"
                checked={isChecked}
                onChange={()=>onChangeCheckItem(checkListId, id, isChecked)} />
                <Description>
                <InputWrapper placeholder="항목을 작성해주세요" onChange={onChange} value={value}/>
                </Description>
            </CheckItemWrapper>
            <CheckItemWrapper>
                <IconWrapper onClick={()=>onClickDeleteCheckItem(checkListId, id)}>
                    <Icon icon='Delete'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='SwapOutlined'/>
                </IconWrapper>    
            </CheckItemWrapper>
            
        </CheckItemContainer>
    );
}

type AddCheckItemType = {
    checkListId: Number;
    id : Number;
    onClickPlusItem: any;
};

const AddCheckItem = ({ checkListId, id, onClickPlusItem }: AddCheckItemType) => {

    return (
        <AddCheckItemWrapper onClick={()=>{onClickPlusItem(checkListId, id)}}>
            <IconWrapper>
                <Icon icon='Plus'/>
            </IconWrapper>
            항목추가하기
        </AddCheckItemWrapper>
    );
}


const AddCheckItemWrapper = styled.button`
    all : unset;
    border : 1px solid ${Color.GRAY_200};
    height: 40px;
    border-radius: 8px;
    display : flex;
    align-items : center;
    color: ${Color.GRAY_300};
    padding-left : 13px;
`;


const CheckItemContainer = styled.div`
    height: 40px;
    border : 1px solid ${Color.GRAY_200};
    border-radius: 8px;
    display : flex;
    align-items : center;
    justify-content: space-between;
`;

const CheckItemWrapper = styled.div`
    height: 40px;
    border-radius: 8px;
    display : flex;
    align-items : center;
`;

/*
const CheckItemWrapper = styled.button`
    all : unset;
    border : 0px;
    height: 40px;
    border : 1px solid ${Color.GRAY_200};
    border-radius: 8px;
    display : flex;
    align-items : center;
    justify-content: space-between;
`;
*/

const CheckBox = styled.input`
    height: 16px;
    width: 16px;
    border : 1px solid ${Color.GRAY_400};
    border-radius: 4px;
    margin-left : 11px;
`;

const Description = styled.div`
    margin-left : 10px;
    font-weight: 400;
    font-size: 14px;
    color: ${Color.MAIN_BLACK};
`;

const IconWrapper = styled.button`
    all : unset;
    border : 0px;
    padding-right: 8px;
`;

const InputWrapper = styled.input`
    width:100%;
    border: none;
    background: transparent;
    &:focus {
        outline:none;
    }

    &::placeholder {
        font-weight : 300;
        font-size : 15px;
        line-height : 15px;
        color: ${Color.GRAY_300};
    }
`;
export { CheckItem, AddCheckItem };