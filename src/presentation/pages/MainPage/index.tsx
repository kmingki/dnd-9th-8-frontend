import React, { useEffect } from "react";
import { styled } from "styled-components";
import Header from "@components/MainPage/components/Header";
import COLOR from "@styles/colors";
import ListExist from "@components/MainPage/ListExist";
import ListNotExist from "@components/MainPage/ListNotExist";
import useGetMyInfo from "../../../application/hooks/queries/user/useGetMyInfo";
import { useDispatch } from "react-redux";
import { initializeCreateTripInfo } from "../../../application/reducer/slices/createTrip/createTripSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { data } = useGetMyInfo();
  useEffect(() => {
    dispatch(initializeCreateTripInfo());
  }, []);
  return (
    <>
      {data && (
        <MainPageWrapper data={false}>
          <Header data={false} />
          {false ? <ListExist /> : <ListNotExist nickname={data?.data.nickname} />}
        </MainPageWrapper>
      )}
    </>
  );
};

const MainPageWrapper = styled.div<{ data: boolean }>`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    ${({ data }) => (data ? COLOR.GREEN_500 : COLOR.GRAY_50)} 0%,
    ${({ data }) => (data ? COLOR.GREEN_500 : COLOR.GRAY_50)} 30%,
    ${COLOR.GRAY_50} 30%,
    ${COLOR.GRAY_50} 100%
  );
`;

export default MainPage;
