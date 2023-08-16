import React, { useEffect, useState } from "react";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import TripCard from "./TripCard";
import {
  getPastTravles,
  getUpcomingTravles,
} from "../../../../infrastructure/api/travel";
import useGetMyInfo from "../../../../application/hooks/queries/user/useGetMyInfo";
import Text from "@components/common/Text";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import useGetMyTravel from "../../../../application/hooks/queries/travel/useGetMyTravel";

const TripList = () => {
  const { data: userData } = useGetMyInfo();
  const filterList = ["예정된 여행", "지난 여행"];
  const [tripFilter, setTripFilter] = useState("예정된 여행");
  const [recentTravel, setRecentTravel] = useState<any>();

  const { data: travelData } = useGetMyTravel(tripFilter);

  const handleClickFilter = async (option: string) => {
    setTripFilter(option);
  };

  useEffect(() => {
    const getRecentTravel = async () => {
      const recent = await getUpcomingTravles(userData.memberId);
      setRecentTravel(recent.data[0]);
    };
    getRecentTravel();
  }, []);

  return (
    <TripListWrapper>
      <Button
        radius={8}
        background={COLOR.MAIN_GREEN}
        padding="11px 12px"
        border="none"
      >
        <RemindButton>
          <div className="remind">
            <Icon icon="LoudSpeaker" />
            <Text
              text={`${recentTravel?.title}이 ${
                recentTravel?.dDay.split("D-")[1]
              }일 남았어요`}
              color={COLOR.WHITE}
              fontSize={16}
              fontWeight={600}
              lineHeight="16px"
            />
          </div>
          <Icon icon="Chevron" color={COLOR.WHITE} fill={COLOR.WHITE} />
        </RemindButton>
      </Button>
      <Spacing size={28} />
      <PeriodFilter>
        {filterList.map((option) => (
          <OptionPeriodFilter
            key={option}
            clicked={tripFilter === option}
            onClick={() => handleClickFilter(option)}
          >
            <Text
              text={option}
              fontSize={18}
              fontWeight={600}
              lineHeight="140%"
              color={tripFilter === option ? COLOR.GRAY_800 : COLOR.GRAY_500}
            />
          </OptionPeriodFilter>
        ))}
      </PeriodFilter>
      <Spacing size={18} />
      <TripListContainer>
        {travelData &&
          travelData.map((travel: any, index: number) => (
            <TripCard key={index} travelInfo={travel} memberId={userData.memberId} />
          ))}
      </TripListContainer>
    </TripListWrapper>
  );
};

const TripListWrapper = styled.div``;
const RemindButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .remind {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }
`;
const PeriodFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;

  border-bottom: 1px solid ${COLOR.GRAY_100};
`;
const OptionPeriodFilter = styled.span<{ clicked: boolean }>`
  text-decoration: ${({ clicked }) => (clicked ? "underline" : "none")};
  text-underline-offset: 6px;
`;

const TripListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export default TripList;
