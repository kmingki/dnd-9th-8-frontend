import React, { useState } from "react";
import Icon from "@components/common/Icon";
import {AddCheckItemWrapper, CheckItemContainer , CheckItemWrapper, CheckBox, HiddenCheckbox, Description, IconWrapper, InputWrapper} from "./checkItemStyle";
import Color from '@styles/colors';



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
        <CheckItemContainer isChecked={isChecked}>
            <CheckItemWrapper>
                <CheckBox checked={isChecked}>
                    <HiddenCheckbox type="checkbox"
                    onChange={()=>onChangeCheckItem(checkListId, id, isChecked)} />
                    {isChecked && <Icon icon='Checked' width={10} height={10} color={Color.WHITE}/> }
                </CheckBox>
                <Description isChecked={isChecked}>
                <InputWrapper placeholder="항목을 작성해주세요" onChange={onChange} value={value} isChecked={isChecked}/>
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
                <Icon icon='Plus' width={14} height={14} fill={Color.GRAY_500}/>
            </IconWrapper>
            항목추가하기
        </AddCheckItemWrapper>
    );
}


export { CheckItem, AddCheckItem };