import React, { useState } from "react";

const CheckListPage = () => {
    
    /*
    const [newCheckList, setNewCheckList] = useState<State>({ checkListState : []}); 


    const onClickAdd = () => {
        
        setNewCheckList(prev => produce(prev, draft => {
            draft?.checkListState.push({id : newCheckList.checkListState.length, name : '', list:[], emoji: ''});
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
            <CountWrapper>
                <Count>{'11'}</Count><Total>&nbsp;/&nbsp;{'11'}개</Total>
            </CountWrapper>
        </TextWrapper>
        <TextContainer>
            <Tag text="dfsfdf" backgroundColor={COLOR.MAIN_GREEN} color={COLOR.WHITE}/>
            <Space />
            <Description>
                    {'도쿄 여행'}
            </Description>

            <Dot />
            <Description>
                    {'3박 4일'}
            </Description>
        </TextContainer>
        
        <CheckListWrapper>
        {newCheckList && (newCheckList.checkListState.map((item, index) => (
          <AddCheckList 
          id={item.id} 
          name={item.name} 
          list={item.list} 
          emoji={item.emoji}
          onChangeCheckItem={onChangeCheckItem} 
          onClickPlusItem={onClickPlusItem}
          onChangeCheckItemTitle={onChangeCheckItemTitle}
          onClickDeleteCheckItem={onClickDeleteCheckItem}
          />
          
       )))}
       </CheckListWrapper>
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
    */

    return(<></>);
  };


export default CheckListPage;