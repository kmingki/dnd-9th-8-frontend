import React, { useEffect } from "react";
import { styled } from "styled-components";
import Header from "@components/MainPage/components/Header";
import COLOR from "@styles/colors";
import ListExist from "@components/MainPage/ListExist";
import ListNotExist from "@components/MainPage/ListNotExist";
import useGetMyInfo from "../../../application/hooks/queries/user/useGetMyInfo";
import { useDispatch } from "react-redux";
import { initializeCreateTripInfo } from "../../../application/reducer/slices/createTrip/createTripSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "@components/common/Toast";
import useModal from "@hooks/useModal";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state: locationState } = useLocation();
  const { data } = useGetMyInfo();
  const { closeModal: popupCloseModal } = useModal();

  useEffect(() => {
    dispatch(initializeCreateTripInfo());
  }, []);

  const handlePopupClose = () => {
    popupCloseModal();
    if (locationState && locationState.state === "delete_done") {
      navigate(".", { state: {} });
    }
  };
  return (
    <>
      {data && (
        <MainPageWrapper>
          <Header profile={data.profileImageUrl} />
          {data.travelCount > 0 ? (
            <ListExist />
          ) : (
            <ListNotExist nickname={data.nickname} />
          )}
          {locationState && locationState.state === "delete_done" && (
            <Toast close={handlePopupClose}>리스트 삭제 완료</Toast>
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
