import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@components/common/Icon";
import {AddCheckItemWrapper, CheckItemContainer , CheckItemWrapper, CheckBox, HiddenCheckbox, Description, IconWrapper, InputWrapper} from "./checkItemStyle";
import Color from '@styles/colors';
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import useUpdateItem from "@hooks/queries/item/useUpdateItem";
import useDeleteItem from "@hooks/queries/item/useDeleteItem";

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


const CheckItem = ({ checkListId, itemId, isChecked, onChangeCheckItem, title, onChangeCheckItemTitle, onClickDeleteCheckItem, isDoubleCheckMode}: CheckItemType) => {

    const [itemTitle, setItemTitle] = useState(title);
    const { tripId } = useParams();
    const { mutate: updateItemMutate /*data , isLoading, error*/ } = useUpdateItem();
    const { mutate: deleteItemMutate /*data , isLoading, error*/ } = useDeleteItem();
    /*
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {

        onChangeCheckItemTitle(checkListId, itemId, e.target.value);
        setValue(e.target.value);
    }
    */
    
    return (
        <CheckItemContainer isChecked={isChecked}>
            <CheckItemWrapper>
                <CheckBox checked={isChecked}>
                    <HiddenCheckbox type="checkbox"
                    onChange={()=>onChangeCheckItem(checkListId, itemId, isChecked)} />
                    {isChecked && <Icon icon='Checked' width={10} height={10} color={Color.WHITE}/> }
                </CheckBox>
                <Description isChecked={isChecked}>
                <InputWrapper 
                placeholder="항목을 작성해주세요" 
                onBlur={()=> updateItemMutate({ travelId: Number(tripId), checkListId, itemId, title: itemTitle })} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setItemTitle(e.target.value)} 
                value={itemTitle} 
                isChecked={isChecked}/>
                </Description>
            </CheckItemWrapper>
            {!isDoubleCheckMode &&
            <CheckItemWrapper>
                <IconWrapper onClick={()=>deleteItemMutate({ travelId: Number(tripId), checkListId: checkListId, itemId: itemId})}>
                    <Icon icon='Delete' fill={COLOR.GRAY_500}/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='SliceOutlined' fill={COLOR.GRAY_500}/>
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