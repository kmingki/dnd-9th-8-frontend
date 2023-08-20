import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import Modal from "@components/common/Modal";
import Icon from "@components/common/Icon";
import Tag from "@components/common/Tag";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { getTripDetailRange } from "@utils/getDate";
import useModal from "../../../application/hooks/useModal";
import { ShareModal, DeleteModal } from "@components/domain/TripDetail";
import useGetTravelDetail from "@hooks/queries/travel/useGetTravelDetail";
import usePostNewChecklist from "@hooks/queries/checklist/usePostNewChecklist";
import useDeleteChecklist from "@hooks/queries/checklist/useDeleteChecklist";
import useDeleteTravel from "@hooks/queries/travel/useDeleteTravel";
import usePostNewItem from "@hooks/queries/item/usePostNewItem";
import useItemCheck from "@hooks/queries/item/useItemCheck";
import useDeleteItem from "@hooks/queries/item/useDeleteItem";

import { AddCheckList } from "@components/domain/CheckList";
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
  AddTodoButton,
  PopupInner,
} from "./style";
import { produce } from "immer";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import Toast from "@components/common/Toast";

interface State {
  checkListState: checkList[];
}

const TripDetailPage = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const { state } = useSelector((state: RootState) => state.createTrip);
  const { data, isLoading, error } = useGetTravelDetail(String(tripId)); //여행 상세 조회
  const { mutate: postNewChecklistMutate /*data , isLoading, error*/ } =
    usePostNewChecklist();
  const { mutate: deleteChecklistMutate /*data , isLoading, error*/ } =
    useDeleteChecklist();
  const { mutate: deleteTravelMutate /*data , isLoading, error*/ } =
    useDeleteTravel();
  const { mutate: postNewItemMutate /*data , isLoading, error*/ } = usePostNewItem();
  const { mutate: itemCheckMutate /*data , isLoading, error*/ } = useItemCheck();
  const { mutate: deleteItemMutate /*data , isLoading, error*/ } = useDeleteItem();

  const [checklist, setCheckList] = useState<State>({
    checkListState: data?.checkListDtoList,
  });

  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  useEffect(() => {
    if (data) {
      setCheckList({ checkListState: data?.checkListDtoList });
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

  const { closeModal: popupCloseModal } = useModal();

  /*여행 공유, 삭제부분*/
  const onClickShareButton = () => {
    toggleShareModal();
  };

  const onClickDeleteButton = () => {
    toggleDeleteModal();
    deleteTravelMutate({ travelId: Number(tripId) }); // travelId 수정 필요
  };

  //여행 수정 페이지로 이동
  const onClickUpdateButton = () => {
    navigate(`/trip-update/${Number(tripId)}`); // 여행 상세 페이지로 이동
  };
  //checklist 추가
  const onClickAdd = useCallback(() => {
    postNewChecklistMutate({ travelId: Number(tripId), title: "" }); // travelId 수정 필요

    setCheckList((prev) =>
      produce(prev, (draft) => {
        draft?.checkListState.push({
          checkListId: checklist.checkListState.length + 1,
          order: checklist.checkListState.length + 1,
          title: "",
          itemDtoList: [],
          essential: false,
        });
        return draft;
      })
    );
  }, [postNewChecklistMutate]);

  //checklist 삭제
  const onClickDeleteCheckList = (checkListId: number) => {
    deleteChecklistMutate({ travelId: 2, checkListId: checkListId }); // travelId 수정 필요

    setCheckList((prev) =>
      produce(prev, (draft) => {
        draft.checkListState = draft?.checkListState.filter((checklisttmp) => {
          return checklisttmp.checkListId !== checkListId;
        });
      })
    );
  };

  //item 추가
  const onClickPlusItem = (checkListId: number, id: number) => {
    postNewItemMutate({
      travelId: Number(tripId),
      checkListId: checkListId,
      title: "",
    }); // travelId 수정 필요

    setCheckList((prev) =>
      produce(prev, (draft) => {
        draft?.checkListState.forEach((checklist) => {
          if (checklist.checkListId === checkListId) {
            checklist.itemDtoList.push({
              itemId: id,
              title: "",
              order: id,
              isChecked: false,
            });
          }
        });
      })
    );
  };

  //item 삭제
  const onClickDeleteCheckItem = (checkListId: number, id: number) => {
    deleteItemMutate({
      travelId: Number(tripId),
      checkListId: checkListId,
      itemId: id,
    }); // travelId 수정 필요
    setCheckList((prev) =>
      produce(prev, (draft) => {
        draft?.checkListState.forEach((checklist) => {
          if (checklist.checkListId === checkListId) {
            checklist.itemDtoList = checklist.itemDtoList.filter((item) => {
              return item.itemId !== id;
            });
          }
        });
      })
    );
  };

  //item 체크 할때
  const onChangeCheckItem = (
    checkListId: number,
    id: number,
    isChecked: boolean
  ) => {
    itemCheckMutate({
      travelId: Number(tripId),
      checkListId: checkListId,
      itemId: id,
    });

    setCheckList((prev) =>
      produce(prev, (draft) => {
        draft?.checkListState.forEach((checklist) => {
          if (checklist.checkListId === checkListId) {
            checklist.itemDtoList.forEach((item) => {
              item.itemId === id && (item.isChecked = !isChecked);
            });
          }
        });
      })
    );
  };

  //item 내용 수정할때
  const onChangeCheckItemTitle = (
    checkListId: number,
    id: number,
    title: string
  ) => {
    setCheckList((prev) =>
      produce(prev, (draft) => {
        draft?.checkListState.forEach((checklist) => {
          if (checklist.checkListId === checkListId) {
            checklist.itemDtoList.forEach((item) => {
              item.itemId === id && (item.title = title);
            });
          }
        });
      })
    );
  };

  return (
    <>
      <>
        <TripInfo>
          <BackHeader type="tripDetail" />
          <TagWrapper>
            <Tag
              text={String(data?.dDay)}
              backgroundColor={COLOR.MAIN_GREEN}
              color={COLOR.WHITE}
            />
            <Tag
              text={String(DESTINATION[data?.destinationType])}
              backgroundColor="#6B5FFB"
              color={COLOR.WHITE}
            />
          </TagWrapper>
          <Spacing size={15} />
          <TextContainer>
            <Title>{data?.title}</Title>
            <Spacing size={5} />
            <DescriptionWrapper>
              <Description>
                {getTripDetailRange(data?.startDate)}&nbsp;~&nbsp;
                {getTripDetailRange(data?.endDate)}
              </Description>

              <IconWrapper>
                <Icon icon={data?.isInStorage ? "FilledHeart" : "UnFilledHeart"} />
                <IconStyleDiv>
                  <Icon
                    icon="EllipsisOutlined"
                    fill="#8B95A1"
                    onClick={(e: React.MouseEvent) => {
                      setDropdownVisibility(!dropdownVisibility);
                    }}
                  />
                </IconStyleDiv>
                {dropdownVisibility && (
                  <DropDown>
                    <DropDownButton onClick={onClickUpdateButton}>
                      여행 수정
                    </DropDownButton>
                    <DropDownButton onClick={onClickDeleteButton}>
                      여행 삭제
                    </DropDownButton>
                    <DropDownButton onClick={onClickShareButton}>
                      여행 공유
                    </DropDownButton>
                  </DropDown>
                )}
              </IconWrapper>
            </DescriptionWrapper>
          </TextContainer>
        </TripInfo>
        <Spacing size={25.5} />
        <ContentContainer>
          <ContentWrapper>
            <CheckListWrapper>
              {checklist?.checkListState &&
                checklist?.checkListState?.map((list: any, index: any) => (
                  <AddCheckList
                    tripData={data}
                    list={list}
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
                ))}
            </CheckListWrapper>
          </ContentWrapper>
          <AddTodoButton onClick={onClickAdd}>
            <Icon icon="Plus" />
            <Text
              text="리스트 추가하기"
              color={COLOR.MAIN_GREEN}
              fontSize={14}
              lineHeight="30px"
              fontWeight={700}
            ></Text>
          </AddTodoButton>
        </ContentContainer>

        <Modal isVisible={isShowShareModal} closeModal={closeShareModal}>
          <ShareModal closeModal={closeShareModal} />
        </Modal>
        <Modal isVisible={isShowDeleteModal} closeModal={closeDeleteModal}>
          <DeleteModal closeModal={closeDeleteModal} />
        </Modal>
        {state === "main" && (
          <Toast close={popupCloseModal}>
            <PopupInner>
              <Icon icon="Check" />
              리스트 생성 완료
            </PopupInner>
          </Toast>
        )}
      </>
    </>
  );
};

export default TripDetailPage;
