import React, { useState, useEffect, useCallback } from 'react';
import { DefaultTemplate } from "@styles/templates";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import Modal from "@components/common/Modal";
//import TodoCard from '@components/domain/TodoCard';
import Icon from '@components/common/Icon';
import Tag from "@components/common/Tag";
import Text from '@components/common/Text';
import COLOR from "@styles/colors";
import { getTripDetailRange } from "@utils/getDate";
import useModal from "../../../application/hooks/useModal";
import { ShareModal, DeleteModal } from "@components/domain/TripDetail";
import useGetTravelDetail from "@hooks/queries/trip/useGetTravelDetail";
import usePostNewChecklist from "@hooks/queries/checklist/usePostNewChecklist";
import { AddCheckList } from "@components/domain/CheckList"; 
import { useParams } from "react-router-dom";
import { checkList } from "@type/checkList";
import { DESTINATION } from "@constants";
import { 
    TagWrapper,
    ContentWrapper,
    TripInfo,
    TextContainer,
    Title,
    ContentContainer,
    DescriptionWrapper,
    Description,
    IconWrapper,
    IconStyleDiv,
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
    const { data, isLoading, error } = useGetTravelDetail(String(tripId));
    const { mutate: postNewChecklistMutate /*data , isLoading, error*/ } = usePostNewChecklist();
    const [ checklist, setCheckList] = useState<State>({ checkListState : data?.checkListDtoList}); 

    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    useEffect(()=>{
        if (data) {
            setCheckList({ checkListState : data?.checkListDtoList});
        }
        console.log(data);
    }, [data]);

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

    //checklist 추가
    const onClickAdd = useCallback(() => {

        postNewChecklistMutate({ travelId: data.travelId, title: ""});
        
        setCheckList(prev => produce(prev, draft => {
            draft?.checkListState.push({checkListId: checklist.checkListState.length+1,  order : checklist.checkListState.length+1, title : '', itemDtoList:[]});
            return draft;
        }));
    },[postNewChecklistMutate])

    //checklist 삭제
    const onClickDeleteCheckList = (checkListId: number) => {
        setCheckList(prev => produce(prev , draft => {
            draft.checkListState = draft?.checkListState.filter((checklisttmp)=>{
                return checklisttmp.checkListId !== checkListId;
                    })
            })
        );
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
            <TagWrapper>
            <Tag text={String(data?.dDay)} backgroundColor={COLOR.MAIN_GREEN} color={COLOR.WHITE}/>
            <Tag text={String(DESTINATION[data?.destinationType])} backgroundColor="#6B5FFB" color={COLOR.WHITE}/>
            </TagWrapper>
            <Spacing size={15} />
            <TextContainer>
                <Title>
                    {data?.title}
                </Title>
                <Spacing size={5} />
                <DescriptionWrapper>
                    <Description>{getTripDetailRange(data?.startDate)}&nbsp;~&nbsp;{getTripDetailRange(data?.endDate)}</Description>
                    
                    <IconWrapper >
                    <Icon icon="FilledHeart" fill="#8B95A1"/>
                    <IconStyleDiv>
                    <Icon icon="EllipsisOutlined" fill="#8B95A1" onClick={(e: React.MouseEvent) => {setDropdownVisibility(!dropdownVisibility)}}/>
                    </IconStyleDiv>
                    {dropdownVisibility &&
                    <DropDown>
                        <DropDownButton onClick={onClickDeleteButton}>여행 수정</DropDownButton>
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
                {checklist?.checkListState && (checklist?.checkListState?.map((list: any, index: any) => (
                <AddCheckList 
                checkListId={list?.checkListId}
                order={list?.order} 
                title={list?.title} 
                itemDtoList={list?.itemDtoList}
                onClickDeleteCheckList={onClickDeleteCheckList} 
                onChangeCheckItem={onChangeCheckItem} 
                onClickPlusItem={onClickPlusItem}
                onChangeCheckItemTitle={onChangeCheckItemTitle}
                onClickDeleteCheckItem={onClickDeleteCheckItem}
                />  
            )))}
            </CheckListWrapper>   
        </ContentWrapper> 
        <AddTodoButton onClick={onClickAdd}>
                <Icon icon="Plus" />
                <Text text="리스트 추가하기" color={COLOR.MAIN_GREEN} fontSize={14} lineHeight="30px" fontWeight={700}></Text>
        </AddTodoButton>
        </ContentContainer>
        

        <Modal isVisible={isShowShareModal} closeModal={closeShareModal}>
            <ShareModal closeModal={closeShareModal} />
        </Modal>
        <Modal isVisible={isShowDeleteModal} closeModal={closeDeleteModal}>
            <DeleteModal closeModal={closeDeleteModal} />
        </Modal>
        </>
        </>
    )  
};

export default TripDetailPage;