import React, { useState } from "react";
import Icon from "@components/common/Icon";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'; //drag and drop
import Tag from "@components/common/Tag";
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
    CheckItemWrapper, 
    InputWrapper, 
    IconWrapper, 
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

type checkListType = { id: number; name: string; list: listItem[], emoji:string ,onChangeCheckItem: any, onClickPlusItem: any, onChangeCheckItemTitle: any, onClickDeleteCheckItem: any};


const AddCheckList = ({id, name, list, emoji, onChangeCheckItem, onClickPlusItem, onChangeCheckItemTitle, onClickDeleteCheckItem}: checkListType) => {

    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [titleEmoji, setTitleEmoji] = useState(emoji);

    const onClickOpenCheckList = () => {
        setIsOpen(prev=>!prev);
    };

    //모달에서 아이콘 클릭했을때
    const onClickModalIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
     
        setTitleEmoji(e.currentTarget.id);
    };

    // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
    const onDragEnd = ({ source, destination }: DropResult) => {
        console.log('>>> source', source);
        console.log('>>> destination', destination);
    };
    


    return (
        <>
        <CheckListWrapper>
            <Head>
                <Title>
                    <TitleIconWrapper onClick={()=>{setIsModalOpen(prev=>!prev)}}>
                        <Icon icon='Calendar'/>
                    </TitleIconWrapper>
                    <InputWrapper placeholder={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} value={title}/>
                    <TitleLeft>
                    <Indicator>{list.filter((item) => item.isChecked === true).length}/{list.length}</Indicator>
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
                            {list.map((item, index) => (
                            <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                                {(provided : any) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <CheckItem 
                                    checkListId={id} 
                                    id={item.id} 
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
                <AddCheckItem checkListId={id} id={list.length} onClickPlusItem={onClickPlusItem}/>
                <FinishButtonWrapper>
                    <FinishButton>
                        완료
                    </FinishButton>
                </FinishButtonWrapper>
            </CheckItemWrapper>
            }
        </CheckListWrapper>

        {isModalOpen && 
        <ModalOverlay>
            <ModalWindow>
                <Content>
                    <ContentWrapper id={'Bus'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper id={'Plane'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Plane' />
                    </ContentWrapper>
                    <ContentWrapper id={'dfs'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Plane' />
                    </ContentWrapper>
                    <ContentWrapper id={'de'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Plane' />
                    </ContentWrapper>
                    <ContentWrapper id={'dne'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper id={'Pdne'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper id={'Pde'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                    <ContentWrapper id={'Pddfne'} onClick={onClickModalIcon} titleEmoji={titleEmoji}>
                        <Icon icon='Bus' />
                    </ContentWrapper>
                </Content>
                <ButtonContainer>
                    <ModalDeleteButton>
                        지우기
                    </ModalDeleteButton>
                    <Space />
                    <ModalSaveButton>
                        저장
                    </ModalSaveButton>
                </ButtonContainer>
            </ModalWindow>
        </ModalOverlay>
        }
        </>
    );
}

export { /*CheckList,*/ AddCheckList };
