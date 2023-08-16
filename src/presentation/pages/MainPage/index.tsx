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
        <MainPageWrapper>
          <Header />
          {data.travelCount > 0 ? (
            <ListExist />
          ) : (
            <ListNotExist nickname={data.nickname} />
          )}
        </MainPageWrapper>
      )}
    </>
  );
};

const MainPageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLOR.GRAY_50};
`;

export default MainPage;
