import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "@styles/colors";
import ProgressBar from "@components/common/ProgressBar";
import CheckListIndicator from "@components/common/CheckListIndicator"
import { CheckItem } from "@components/domain/CheckList/CheckItem";
import { checkList } from "@type/checkList";
import { useParams } from "react-router-dom";
import useGetTravelDetail from "@hooks/queries/trip/useGetTravelDetail";

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
    const { data, isLoading, error } = useGetTravelDetail(String(id));
    const [ tripInfo, setTripInfo ] = 
    useState<TripType>({ 
        title : data?.title, 
        dDay: data?.dDay, 
        destinationType: data?.destinationType,
        startDate: data?.startDate,
        endDate: data?.endDate}); 
    const [ checklist, setCheckList] = useState<State>({ checkListState : data?.checkListDtoList}); 

    const onClickExit = () => {

    }

    return (
        !data? <div></div>:
        <Container>
            <BackHeaderWrapper>
                <div className="text">더블체크</div>
                <Icon icon="CloseOutlined" fill={COLOR.MAIN_BLACK} onClick={onClickExit} />
            </BackHeaderWrapper>
            <ProgressBar  max="100" value="50" percent={false} size={'small'} startColor={COLOR.MAIN_GREEN}/>
            <Spacing size={53.15}/>
            

            {checklist?.checkListState?.map((checklisttmp, index) => (
                <>
                <Title>
                    <Text text={checklisttmp.title} color={COLOR.MAIN_BLACK} fontSize={16} lineHeight="21.12px" fontWeight={600}/>
                    <TitleLeft>
                        <CheckListIndicator checked={3} total={5} />
                    </TitleLeft>
                </Title>
                <CheckItemWrapper>
                {checklisttmp.itemDtoList.map((item, index) => (
                                <CheckItem 
                                checkListId={checklisttmp.checkListId} 
                                itemId={item.itemId} 
                                isChecked={item.isChecked} 
                                title={item.title} 
                                />
                ))}
                </CheckItemWrapper>
                </>
            ))}
            

        </Container>
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
    margin-top: 18px;
`

export default DoubleCheckPage;
