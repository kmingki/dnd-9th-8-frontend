import React, { useState } from "react";
import { styled } from "styled-components";
import { GreyTemplate } from "@styles/templates";
import BackHeader from "../../components/common/BackHeader";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { /*CheckList,*/ AddCheckList} from "@components/domain/CheckList";
import { produce } from "immer"
import { listItem , checkList } from "../../../application/type/checkList";

interface State {
    checkListState: checkList[];
}

const CheckListPage = () => {
    
    const [newCheckList, setNewCheckList] = useState<State>({ checkListState : []}); 


    const onClickAdd = () => {
        
        setNewCheckList(prev => produce(prev, draft => {
            draft?.checkListState.push({id : newCheckList.checkListState.length, name : '', list:[]});
            return draft;
        }));
    }

    const onClickPlusItem = (checkListId: number, id: number) => {
        
        setNewCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.id === checkListId) {
                    checklist.list.push({id : id , isChecked: false, title : ''});
                }
            })
        }));

        
    }

    const onChangeCheckItem = (checkListId:number, id:number, isChecked:boolean) => {

        setNewCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.id === checkListId) {
                    checklist.list.forEach((item)=>{
                        item.id === id && (item.isChecked = !isChecked);
                    })
                }
            })
        }));

    };

    const onChangeCheckItemTitle = (checkListId:number, id:number, title:string) => {

        setNewCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.id === checkListId) {
                    checklist.list.forEach((item)=>{
                        item.id === id && (item.title = title);
                    })
                }
            })
        }));
    };
    

    const onClickDeleteCheckItem = (checkListId: number, id:number) => {
        setNewCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.id === checkListId) {
                    checklist.list = checklist.list.filter((item)=>{
                        return item.id !== id;
                    })
                }
            })
        }));
    };

    return (
      <GreyTemplate>
        <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <BackHeader />
        <Title>{'예약 및 확인'}</Title>
        <div>완료</div>
        </div>
        
        <TextWrapper>
            남은 체크리스트
        </TextWrapper>
        <TextContainer>
            <CountWrapper>
                <Count>{'11'}</Count><Total>&nbsp;/&nbsp;{'11'}</Total>
                
            </CountWrapper>
            <Description>
                    {'도쿄 여행'}
            </Description>

            <Dot />
            <Description>
                    {'3박 4일'}
            </Description>
        </TextContainer>
        
        <TextContainer>
        </TextContainer>
        {newCheckList && (newCheckList.checkListState.map((item, index) => (
          <AddCheckList 
          id={item.id} 
          name={item.name} list={item.list} 
          onChangeCheckItem={onChangeCheckItem} 
          onClickPlusItem={onClickPlusItem}
          onChangeCheckItemTitle={onChangeCheckItemTitle}
          onClickDeleteCheckItem={onClickDeleteCheckItem}
          />
          
       )))
       }

        <AddButtonWrapper>
        <AddButton onClick={onClickAdd}>
            <Icon icon='Plus'/>
            <AddButtonText>
            카테고리 추가하기
            </AddButtonText>
        </AddButton>
        </AddButtonWrapper>
      </GreyTemplate>
    );
  };

const TextWrapper = styled.div`
    margin-top : 35.52px;
    font-weight : 600;
    font-size : 22px;
    line-height: 20px;
    color: ${COLOR.GRAY_800};
`;

const CountWrapper = styled.div`
    display: flex;

    margin-right: 17px;
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
    color: ${COLOR.GRAY_500};
`;

const TextContainer = styled.div`
    margin-top: 8px;
    width:100%;
    display: flex;
    align-items: center;
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
  color: ${COLOR.GRAY_500};
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

export default CheckListPage;