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
    onChangeCheckItem : any
};


const CheckItem = ({ checkListId, id, isChecked, title, onChangeCheckItem }: CheckItemType) => {

    return (
        <CheckItemWrapper>
            <CheckBox type="checkbox"
            checked={isChecked}
            onChange={()=>onChangeCheckItem(checkListId, id, isChecked)} />
            <Description>
                {title}
            </Description>
        </CheckItemWrapper>
    );
}

type AddCheckItemType = {
    checkListId: Number;
    id : Number;
    onClickPlusItem: any;
};
const AddCheckItem = ({ checkListId, id, onClickPlusItem }: AddCheckItemType) => {

    const [value, setValue] = useState('');

    
    const onClickPlusButton = () => {
        onClickPlusItem(checkListId, id, value);
        setValue('');
    }
    

    return (
        <CheckItemWrapper >
            <IconWrapper onClick={()=>{onClickPlusButton()}}>
                <Icon icon='Plus'/>
            </IconWrapper>
            <InputWrapper placeholder="항목 추가하기" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}} value={value}/>
        </CheckItemWrapper>
    );
}


const CheckItemWrapper = styled.div`
    height: 40px;
    border : 1px solid ${Color.GRAY_200};
    border-radius: 8px;
    display : flex;
    align-items : center;
`;

const CheckBox = styled.input`
    height: 16px;
    width: 16px;
    border : 1px solid ${Color.GRAY_200};
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
`;

const InputWrapper = styled.input`
    width:100%;
    border: none;
    background: transparent;
    &:focus {
        outline:none;
    }

`;
export { CheckItem, AddCheckItem };