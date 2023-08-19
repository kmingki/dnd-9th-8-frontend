import React, { useState } from "react";
import Icon from "@components/common/Icon";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'; //drag and drop
import useChangeOrderItem from "@hooks/queries/item/useChangeOrderItem";
import Text from "@components/common/Text";
import { CheckItem, AddCheckItem } from "./CheckItem";
import { listItem , checkList } from "../../../../application/type/checkList";
import { 
    FinishButtonWrapper, 
    FinishButton, 
    CheckListWrapper, 
    Head, 
    Title, 
    Indicator, 
    TitleLeft,
    TitleRight, 
    CheckItemWrapper, 
    InputWrapper, 
    IconWrapper, 
    Dot,
    TitleIconWrapper, 
    ModalOverlay,
    ModalWindow,
    Content,
    ContentWrapper,
    ModalDeleteButton,
    ModalSaveButton,
    ButtonContainer,
    Space
} from "./style"
import COLOR from "@styles/colors";

type checkListType = { tripData: any; list: checkList; checkListId: number; order: number; title: string; itemDtoList: listItem[], onClickDeleteCheckList:any, onChangeCheckItem: any, onClickPlusItem: any, onChangeCheckItemTitle: any, onClickDeleteCheckItem: any};


const AddCheckList = ({tripData, list, checkListId, order, title, itemDtoList, onClickDeleteCheckList, onChangeCheckItem, onClickPlusItem, onChangeCheckItemTitle, onClickDeleteCheckItem}: checkListType) => {

    const { mutate: changeOrderItemMutate /*data , isLoading, error*/ } = useChangeOrderItem();
    //const [title, setTitle] = useState(title);
    const [isOpen, setIsOpen] = useState(false);
    //const [isModalOpen, setIsModalOpen] = useState(false); 이전 이모티콘 디자인 관련

    const onClickOpenCheckList = () => {
        setIsOpen(prev=>!prev);
    };

    
    // 이전 디자인 이모티콘(?) 관련
    /*
    const onClickModalIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTitleEmoji(e.currentTarget.id);
    };
    */

    // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
    const onDragEnd = ({ source, destination, draggableId }: DropResult ) => {

        changeOrderItemMutate({ 
            travelId: 2, 
            checkListId:checkListId , 
            data: [{id : Number(draggableId), order : Number(destination?.index)},
                {id : Number(itemDtoList.at(Number(destination?.index))?.itemId), order : Number(source?.index)},
            ]
        }); //travel id 수정 필요
        // console.log('>>> source', source);
        // console.log('>>> destination', destination );
        // console.log(draggableId)
       //

    };
    
    return (
        <>
        <CheckListWrapper>
            <Head>
                <Title>
                    <TitleRight>
                        {list.essential? 
                        <>
                        <Text text={title} color={COLOR.GRAY_800} fontSize={16} lineHeight="21.21px" fontWeight={600}/>
                        <Dot />
                        </>
                         :
                        <InputWrapper placeholder={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{/*setTitle(e.target.value)*/}} value={title}/>
                        }
                    </TitleRight>
                    <TitleLeft>
                        <Indicator>{itemDtoList.filter((item) => item.isChecked === true).length}/{itemDtoList.length}</Indicator>
                        {isOpen? 
                        <IconWrapper>
                            <Icon icon='UpOutlined' fill="#5C5F64" onClick={onClickOpenCheckList}/>
                        </IconWrapper>:
                        <IconWrapper>
                            <Icon icon='DownOutlined' fill="#5C5F64" onClick={onClickOpenCheckList}/>
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
                            {itemDtoList.map((item, index) => (
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
                <AddCheckItem checkListId={checkListId} id={itemDtoList.length+1} onClickPlusItem={onClickPlusItem}/>
                <FinishButtonWrapper>
                    <FinishButton onClick={()=>onClickDeleteCheckList(checkListId)}>
                        리스트 삭제
                    </FinishButton>
                </FinishButtonWrapper>
            </CheckItemWrapper>
            }
        </CheckListWrapper>
        </>
    );
}

export { AddCheckList };
