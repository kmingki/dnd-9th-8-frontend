import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import Modal from "@components/common/Modal";
import BottomButton from "@components/common/BottomButton";
import styled from "styled-components";
import COLOR from "@styles/colors";
import ProgressBar from "@components/common/ProgressBar";
import CheckListIndicator from "@components/common/CheckListIndicator";
import { DoubleCheckModal } from "@components/domain/DoubleCheck";
import { CheckItem } from "@components/domain/CheckList/CheckItem";
import { checkList } from "@type/checkList";
import { useParams } from "react-router-dom";
import useGetTravelDetail from "@hooks/queries/travel/useGetTravelDetail";
import useItemCheck from "@hooks/queries/item/useItemCheck";
import useModal from "../../../application/hooks/useModal";

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

const DoubleCheckPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetTravelDetail(String(id));
  const { mutate: itemCheckMutate /*data , isLoading, error*/ } = useItemCheck();
  const {
    isShowModal: isShowCompleteModal,
    toggleModal: toggleCompleteModal,
    closeModal: closeCompleteModal,
  } = useModal();

  const getValue = useCallback(() => {
    let count = 0;
    data?.checkListDtoList?.forEach((checklist: any) => {
      count += checklist.itemDtoList.filter(
        (item: any) => item.isChecked === true
      ).length;
    });

    console.log("value" + count);
    return String(count);
  }, [data]);
  const getMax = useCallback(() => {
    let count = 0;
    data?.checkListDtoList?.forEach((checklist: any) => {
      count += checklist.itemDtoList.length;
    });

    console.log("max" + count);

    return String(count);
  }, [data]);

  /*
    useEffect(()=>{
        if (data) {
            setCheckList({ checkListState : data?.checkListDtoList});
        }
        console.log(data);
    }, [data]);
    */
  const onClickExit = () => {};

  const onClickComplete = () => {
    setTimeout(() => {
      toggleCompleteModal();
    }, 500);
    navigate(`/`);
  };

  //item 체크 할때
  const onChangeCheckItem = (
    checkListId: number,
    id: number,
    isChecked: boolean
  ) => {
    itemCheckMutate({ travelId: Number(id), checkListId: checkListId, itemId: id });
  };

  return (
    <>
      !data? <div></div>:
      <Container>
        <BackHeaderWrapper>
          <div></div>
          <Text
            text="더블 체크"
            color={COLOR.GRAY_900}
            fontSize={18}
            lineHeight="25.2px"
            fontWeight={700}
          />
          <Icon icon="CloseOutlined" fill={COLOR.MAIN_BLACK} onClick={onClickExit} />
        </BackHeaderWrapper>
        <ProgressBar
          max={getMax()}
          value={getValue()}
          percent={false}
          size={"small"}
          startColor={COLOR.MAIN_GREEN}
        />
        <Spacing size={53.15} />

        {data?.checkListDtoList?.map(
          (checklisttmp: any, index: any) =>
            checklisttmp.title !== "" && (
              <>
                <Title>
                  <Text
                    text={checklisttmp.title}
                    color={COLOR.MAIN_BLACK}
                    fontSize={16}
                    lineHeight="21.12px"
                    fontWeight={600}
                  />
                  <TitleLeft>
                    <CheckListIndicator
                      checked={
                        checklisttmp?.itemDtoList?.filter(
                          (item: any) => item.isChecked === true
                        ).length
                      }
                      total={checklisttmp?.itemDtoList.length}
                    />
                  </TitleLeft>
                </Title>
                <CheckItemWrapper>
                  {checklisttmp?.itemDtoList?.map((item: any, index: any) => (
                    <CheckItem
                      checkListId={checklisttmp.checkListId}
                      itemId={item.itemId}
                      isChecked={item.isChecked}
                      title={item.title}
                      onChangeCheckItem={onChangeCheckItem}
                      isDoubleCheckMode={true}
                    />
                  ))}
                </CheckItemWrapper>
              </>
            )
        )}

        <BottomButton text="완료하기" onClick={onClickComplete} textButton={false} />
      </Container>
      <Modal isVisible={isShowCompleteModal} closeModal={closeCompleteModal}>
        <DoubleCheckModal closeModal={closeCompleteModal} />
      </Modal>
    </>
  );
};

const Container = styled.div`
  padding: 0 20px;
  height: 100%;
  background-color: ${COLOR.GRAY_50};
`;

const BackHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;

  .text {
    flex-grow: 1;
    text-align: center;
  }
  .emptySpace {
    width: 24px;
    height: 25px;
    visibility: hidden;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CheckItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.85px;
`;

export default DoubleCheckPage;
