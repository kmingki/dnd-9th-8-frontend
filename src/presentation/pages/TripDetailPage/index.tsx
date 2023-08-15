import React, { useState, useEffect } from 'react';
import { DefaultTemplate } from "@styles/templates";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import Modal from "@components/common/Modal";
//import TodoCard from '@components/domain/TodoCard';
import Icon from '@components/common/Icon';
import Tag from "@components/common/Tag";
import Text from '@components/common/Text';
import COLOR from "@styles/colors";
import useModal from "../../../application/hooks/useModal";
import { ShareModal, DeleteModal } from "@components/domain/TripDetail";
import useGetTripInfo from "@hooks/queries/trip/useGetTripInfo";
import { AddCheckList } from "@components/domain/CheckList"; 
import { useParams } from "react-router-dom";
import { checkList } from "@type/checkList";
import { DESTINATION } from "@constants";
import { 
    ContentWrapper,
    TripInfo,
    TextContainer,
    Title,
    ContentContainer,
    DescriptionWrapper,
    Description,
    IconWrapper,
    DropDown,
    DropDownButton,
    CheckListWrapper,
    AddTodoButton
} from "./style";
import { produce } from "immer";

interface TripType {
    title?: string;
    dDay?: string;
    destinationType: string;
    startDate?: string;
    endDate?: string;
}

interface State {
    checkListState: checkList[];
}

const TripDetailPage = () => {

    const { tripId } = useParams();
    const { data, isLoading, error } = useGetTripInfo(String(tripId));
    const [ tripInfo, setTripInfo ] = 
    useState<TripType>({ 
        title : data?.title, 
        dDay: data?.dDay, 
        destinationType: data?.destinationType,
        startDate: data?.startDate,
        endDate: data?.endDate}); 
    const [ checklist, setCheckList] = useState<State>({ checkListState : data?.checkListDtoList}); 

    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    

    const {
        isShowModal: isShowShareModal,
        toggleModal: toggleShareModal,
        closeModal: closeShareModal,
      } = useModal();
      const {
        isShowModal: isShowDeleteModal,
        toggleModal: toggleDeleteModal,
        closeModal: closeDeleteModal,
      } = useModal();

    const onClickShareButton = () => {
        toggleShareModal();
    }

    const onClickDeleteButton = () => {
        toggleDeleteModal();
    }

    const onClickAdd = () => {
        
        setCheckList(prev => produce(prev, draft => {
            draft?.checkListState.push({checkListId: checklist.checkListState.length,  order : checklist.checkListState.length, title : '', itemDtoList:[]});
            return draft;
        }));
    }
    const onClickPlusItem = (checkListId: number, id: number) => {
        
        setCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.checkListId === checkListId) {
                    checklist.itemDtoList.push({itemId : id, title : '', order: id, isChecked: false, });
                }
            })
        }));

        
    }

    const onChangeCheckItem = (checkListId:number, id:number, isChecked:boolean) => {

        setCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.checkListId === checkListId) {
                    checklist.itemDtoList.forEach((item)=>{
                        item.itemId === id && (item.isChecked = !isChecked);
                    })
                }
            })
        }));

    };

    const onChangeCheckItemTitle = (checkListId:number, id:number, title:string) => {

        setCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.checkListId === checkListId) {
                    checklist.itemDtoList.forEach((item)=>{
                        item.itemId === id && (item.title = title);
                    })
                }
            })
        }));
    };
    

    const onClickDeleteCheckItem = (checkListId: number, id:number) => {
        setCheckList(prev => produce(prev , draft => {
            draft?.checkListState.forEach((checklist)=>{
                if (checklist.checkListId === checkListId) {
                    checklist.itemDtoList = checklist.itemDtoList.filter((item)=>{
                        return item.itemId !== id;
                    })
                }
            })
        }));
    };


    return (
        <>
        
        <>
        <TripInfo>
        <BackHeader />
            <Tag text={String(tripInfo.dDay)} backgroundColor={COLOR.MAIN_GREEN} color={COLOR.WHITE}/>
            <Tag text={String(DESTINATION[tripInfo.destinationType])} backgroundColor="#6B5FFB" color={COLOR.WHITE}/>
            <Spacing size={15} />
            <TextContainer>
                <Title>
                    {tripInfo?.title}
                </Title>
                <Spacing size={5} />
                <DescriptionWrapper>
                    <Description>{tripInfo?.startDate}&nbsp;~&nbsp;{tripInfo?.endDate}</Description>
                    <IconWrapper onClick={(e: React.MouseEvent) => {setDropdownVisibility(!dropdownVisibility)}}>
                    <Icon icon="EllipsisOutlined" fill="#8B95A1"/>
                    {dropdownVisibility &&
                    <DropDown>
                        <DropDownButton onClick={onClickDeleteButton}>여행 삭제</DropDownButton>
                        <DropDownButton onClick={onClickShareButton}>여행 공유</DropDownButton>
                        
                    </DropDown>}
                    </IconWrapper>
                    
                    
                </DescriptionWrapper>
            </TextContainer>
        </TripInfo>
        <Spacing size={25.5} />
        <ContentContainer>
        <ContentWrapper>
            <CheckListWrapper>
                {checklist && (checklist?.checkListState?.map((list, index) => (
                <AddCheckList 
                checkListId={list?.checkListId}
                order={list?.order} 
                title={list?.title} 
                itemDtoList={list?.itemDtoList} 
                onChangeCheckItem={onChangeCheckItem} 
                onClickPlusItem={onClickPlusItem}
                onChangeCheckItemTitle={onChangeCheckItemTitle}
                onClickDeleteCheckItem={onClickDeleteCheckItem}
                />  
            )))}
            </CheckListWrapper>   
        </ContentWrapper> 
        
        <Modal isVisible={isShowShareModal} closeModal={closeShareModal}>
        <ShareModal closeModal={closeShareModal} />
      </Modal>
      <Modal isVisible={isShowDeleteModal} closeModal={closeDeleteModal}>
        <DeleteModal closeModal={closeDeleteModal} />
      </Modal>

        <AddTodoButton onClick={onClickAdd}>
            <IconWrapper>
                <Icon icon="Plus" />
            </IconWrapper>
            <Text text="리스트 추가하기" color={COLOR.WHITE} fontSize={14} lineHeight="30" fontWeight={700}></Text>
        </AddTodoButton>

        </ContentContainer>
        </>
        </>
    )  
};

export default TripDetailPage;