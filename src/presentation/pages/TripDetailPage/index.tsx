import React, { useState } from 'react';
import { DefaultTemplate } from "@styles/templates";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import Modal from "@components/common/Modal";
import styled from "styled-components";
import TodoCard from '@components/domain/TodoCard';
import Icon from '@components/common/Icon';
import Tag from "@components/common/Tag";
import COLOR from "@styles/colors";
import useModal from "../../../application/hooks/useModal";
import { ShareModal, DeleteModal } from "@components/domain/TripDetail";

const TripDetailPage = () => {

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

    const dummyData = {
        title : '미국 여행',
        startDate : '2023.02.21',
        finishDate : '2023.02.24',
        people : '2',
        photo: ''
    }

    const list = [{},{}]; 
    return (
        <>
        <TripInfo>
        <BackHeader />
            <Tag text={`D-${'12'}`} backgroundColor={COLOR.MAIN_GREEN} color={COLOR.WHITE}/>
            <Spacing size={15} />
            <TextContainer>
                <Title>
                    {dummyData.title}
                </Title>
                <Spacing size={5} />
                <DescriptionWrapper>
                    <Description>{dummyData.startDate}&nbsp;~&nbsp;{dummyData.finishDate}</Description>
                    <IconWrapper onClick={(e: React.MouseEvent) => {setDropdownVisibility(!dropdownVisibility)}}>
                    <Icon icon="EllipsisOutlined" fill="#8B95A1"/>
                    {dropdownVisibility &&
                    <DropDown>
                        <ShareButton onClick={onClickShareButton}>템플릿 공유</ShareButton>
                        <DeleteButton onClick={onClickDeleteButton}>리스트 삭제</DeleteButton>
                    </DropDown>}
                    </IconWrapper>
                    
                    
                </DescriptionWrapper>
            </TextContainer>
        </TripInfo>
        <Spacing size={25.5} />
        <ContentContainer>
        <ContentWrapper>
            {list.map((item, index) => (
            <TodoCard {...item} />))}    
        </ContentWrapper> 
        
        <Modal isVisible={isShowShareModal} closeModal={closeShareModal}>
        <ShareModal closeModal={closeShareModal} />
      </Modal>
      <Modal isVisible={isShowDeleteModal} closeModal={closeDeleteModal}>
        <DeleteModal closeModal={closeDeleteModal} />
      </Modal>

        {/* <AddTodoButton>
            <IconWrapper>
                <Icon icon="Plus" />
            </IconWrapper>
        </AddTodoButton> */}
        </ContentContainer>
        </>
    )  
};

const ContentWrapper = styled.div`
    padding-top: 21px;
    background-color: #F6F7F9;
`;

const TripInfo = styled.div`
    background-color : ${COLOR.WHITE};
    padding : 0 20px;
`;

const TextContainer = styled.div`
    width:100%;
`;

const Title = styled.div`
    font-weight : 700;
    font-size: 26px;
`;


const ContentContainer = styled.div`
    height: 100%;
    padding: 0 20px;
    background-color:#F6F7F9;
`;

  
  const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
;
 
const Description = styled.div`
    font-weight : 600;
    font-size: 14px;
    line-height: 20px;
    color: ${COLOR.GRAY_800};
`;

const IconWrapper = styled.button`
    all : unset;
    border : 0px;
    position: relative;
`;

// const AddTodoButton = styled.div`
//     padding : 12px;
//     border: 1.5px dashed #D9D9D9;
//     border-radius: 8px;
// `;

// const IconWrapper = styled.div`
//     padding : 2px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

const DropDown = styled.div`
    padding : 16px 0px;
    margin-top: 1.5px;
    width : 113px;
    border-radius: 10px;
    position: absolute;
    right : 0px; // icon wrapper 기준으로 right 0px 
    background-color: ${COLOR.WHITE};
    box-shadow: 0px 0px 10px 0px #85858561;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 14px;
    
`; 

const ShareButton = styled.button`
    all : unset;
    border : 0px;   
`;

const DeleteButton = styled.button`
    all : unset;
    border : 0px; 
`;

export default TripDetailPage;