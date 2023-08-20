import React, { useState } from "react";
import Icon from "@components/common/Icon";
import {AddCheckItemWrapper, CheckItemContainer , CheckItemWrapper, CheckBox, HiddenCheckbox, Description, IconWrapper, InputWrapper} from "./checkItemStyle";
import Color from '@styles/colors';
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";



type CheckItemType = {
    checkListId : number,
    itemId :number,
    isChecked: boolean,
    title: string, 
    onChangeCheckItem?: any,
    onChangeCheckItemTitle?: any,
    onClickDeleteCheckItem?: any,
    isDoubleCheckMode?: boolean;
};


const CheckItem = ({ checkListId, itemId, isChecked, title, onChangeCheckItem, onChangeCheckItemTitle, onClickDeleteCheckItem, isDoubleCheckMode}: CheckItemType) => {

    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {

        onChangeCheckItemTitle(checkListId, itemId, e.target.value);
        setValue(e.target.value);
    }
    
    return (
        <CheckItemContainer isChecked={isChecked}>
            <CheckItemWrapper>
                <CheckBox checked={isChecked}>
                    <HiddenCheckbox type="checkbox"
                    onChange={()=>onChangeCheckItem(checkListId, itemId, isChecked)} />
                    {isChecked && <Icon icon='Checked' width={10} height={10} color={Color.WHITE}/> }
                </CheckBox>
                <Description isChecked={isChecked}>
                <InputWrapper placeholder="항목을 작성해주세요" onChange={onChange} value={title} isChecked={isChecked}/>
                </Description>
            </CheckItemWrapper>
            {!isDoubleCheckMode &&
            <CheckItemWrapper>
                <IconWrapper onClick={()=>onClickDeleteCheckItem(checkListId, itemId)}>
                    <Icon icon='Delete' fill={COLOR.GRAY_500}/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='SwapOutlined' fill={COLOR.GRAY_500}/>
                </IconWrapper>    
            </CheckItemWrapper>
            }
            
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
                <Icon icon='Plus' width={14} height={14} fill="#8B95A1"/>
            </IconWrapper>
            <Text text="항목추가하기" color={Color.GRAY_400} fontSize={15} lineHeight="15px" fontWeight={500}/>
            
        </AddCheckItemWrapper>
    );
}


export { CheckItem, AddCheckItem };