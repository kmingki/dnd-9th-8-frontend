import React, { useState,useEffect , useCallback} from "react";
import { useParams } from "react-router-dom";
import Icon from "@components/common/Icon";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'; //drag and drop
import Text from "@components/common/Text";
import { CheckItem, AddCheckItem } from "./CheckItem";
import { listItem , checkList } from "../../../../application/type/checkList";
import useUpdateChecklist from "@hooks/queries/checklist/useUpdateChecklist";
import useChangeOrderItem from "@hooks/queries/item/useChangeOrderItem";
import { 
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
    Dot,
    DotWrapper,
    TextWrapper,
    TitleIconWrapper, 
    ModalOverlay,
    ModalWindow,
    Content,
    ContentWrapper,
    ModalDeleteButton,
    ModalSaveButton,
    ButtonContainer,
    Space
} from "./style";

type checkListType = { CheckListData: checkList; checkListId: number; order: number; title: string; itemDtoList: listItem[], onClickDeleteCheckList: any, onChangeCheckItem: any, onClickPlusItem: any, onChangeCheckItemTitle?: any, onClickDeleteCheckItem: any};


const AddCheckList = ({CheckListData, checkListId, order, title, itemDtoList, onClickDeleteCheckList,onChangeCheckItem, onClickPlusItem, onChangeCheckItemTitle, onClickDeleteCheckItem}: checkListType) => {
    const { tripId } = useParams();
    const [ checklisttitle, setTitle] = useState(title);
    const [ itemlist, setItemlist ] = useState<listItem[]>(itemDtoList);
    const [isOpen, setIsOpen] = useState(false);
    const { mutate: updateChecklistMutate /*data , isLoading, error*/ } = useUpdateChecklist();
    const { mutate: changeOrderItemMutate /*data , isLoading, error*/ } = useChangeOrderItem();

    useEffect(()=>{
        setItemlist(itemDtoList);
    }, [itemDtoList])

    const onClickOpenCheckList = () => {
        setIsOpen(prev=>!prev);
    };

    //checklist title 수정
    const onClickAdd = () => {
        updateChecklistMutate({ travelId: Number(tripId), checklistId : checkListId, title:checklisttitle  }); // travelId 수정 필요
    };

    // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
    const onDragEnd = ({ source, destination, draggableId }: DropResult ) => {

        const newItems = JSON.parse(JSON.stringify(itemlist));
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(Number(destination?.index), 0, removed);
        console.log(newItems);
        const newItemsTmp = newItems.map((i : listItem, index:number)=> {return { id: i.itemId, order: index+1}});
        setItemlist(newItems);
        
        //console.log(newItmesTmp);
        changeOrderItemMutate({ 
            travelId: Number(tripId), 
            checkListId:checkListId , 
            data: newItemsTmp
        }); //travel id 수정 필요
    };

    return (
        <>
        <CheckListWrapper>
            <Head>
                <Title>
                    {CheckListData?.essential? 
                    <TextWrapper>
                    <Text text={title} color="#232527" fontSize={16} lineHeight="21.12px" fontWeight={600} />
                    <DotWrapper><Dot /></DotWrapper>
                    </TextWrapper>
                    :
                    <InputWrapper placeholder={checklisttitle} onBlur={onClickAdd} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} value={checklisttitle}/>
                    }
                    
                    <TitleLeft>
                    <Indicator>{itemDtoList.filter((item) => item.isChecked === true).length}/{itemDtoList.length}</Indicator>
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
            <CheckItemWrapper>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided: any) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {itemlist.map((item, index) => (
                            <Draggable key={item.itemId} draggableId={String(item.itemId)} index={index}>
                                {(provided : any) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <CheckItem 
                                    checkListId={checkListId} 
                                    itemId={item.itemId} 
                                    isChecked={item.isChecked} 
                                    title={item.title} 
                                    onChangeCheckItem={onChangeCheckItem} 
                                    onChangeCheckItemTitle={onChangeCheckItemTitle}
                                    onClickDeleteCheckItem={onClickDeleteCheckItem}
                                    />
                                </div>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <AddCheckItem checkListId={checkListId} id={itemDtoList.length} onClickPlusItem={onClickPlusItem}/>
                <FinishButtonWrapper>
                    <FinishButton onClick={()=>onClickDeleteCheckList(checkListId)}>
                        삭제하기
                    </FinishButton>
                </FinishButtonWrapper>
            </CheckItemWrapper>
            }
        </CheckListWrapper>
        </>
    );
}

export { AddCheckList };
