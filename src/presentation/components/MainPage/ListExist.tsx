import Spacing from "@components/common/Spacing";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import TripList from "./components/TripList";
import useModal from "../../../application/hooks/useModal";
import Modal from "@components/common/Modal";
import COLOR from "@styles/colors";
import { useNavigate } from "react-router-dom";
import TemplateModal from "./components/TemplateModal";
import { useDispatch } from "react-redux";
import {
  changeCreateTripState,
  initializeCreateTripInfo,
} from "../../../application/reducer/slices/createTrip/createTripSlice";
import BottomSheet from "@components/common/BottomSheet";
import { useEffect, useState } from "react";
import CalendarModal from "./components/CalendarModal";
import Button from "@components/common/Button";
import Text from "@components/common/Text";

const ListExist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isShowModal, toggleModal, closeModal } = useModal();
  const {
    isShowModal: isShowTemplate,
    toggleModal: toggleTemplate,
    closeModal: closeTemplate,
  } = useModal();

  const [clicked, setClicked] = useState(false); // 템플릿 선택 -> 선택하기 클릭 유무를 통해 캘린더 보여주기 위한 임시 값

  useEffect(() => {
    dispatch(initializeCreateTripInfo());
  }, []);

  const handleClickMenu = () => {
    toggleModal();
  };

  const handleClickCreateBtn = () => {
    navigate("/trip-create/1");
    dispatch(
      changeCreateTripState({
        type: "state",
        value: "main",
      })
    );
  };

  const handleClickLoadBtn = () => {
    dispatch(
      changeCreateTripState({
        type: "state",
        value: "main",
      })
    );
    closeModal();
    toggleTemplate();
  };
  return (
    <ListExistWrapper>
      <Spacing size={20} />
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
              text="도쿄 여행이 12일 남았어요"
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
      <TripList />
      <IconWrapper>
        {isShowModal ? (
          <Modal isVisible={isShowModal} closeModal={closeModal}>
            <MainMenu>
              <div className="menu-box">
                새로 만들기
                <Icon icon="CreateMenu" onClick={handleClickCreateBtn} />
              </div>
              <div className="menu-box">
                불러오기
                <Icon icon="LoadMenu" onClick={handleClickLoadBtn} />
              </div>
              <div className="menu-box">
                <Icon icon="MenuXButton" onClick={handleClickMenu} />
              </div>
            </MainMenu>
          </Modal>
        ) : (
          <Icon icon="CreateButton" onClick={handleClickMenu} />
        )}
      </IconWrapper>
      <BottomSheet isVisible={isShowTemplate} closeModal={closeTemplate}>
        {!clicked ? (
          <TemplateModal setClicked={setClicked} />
        ) : (
          <CalendarModal closeModal={closeTemplate} setClicked={setClicked} />
        )}
      </BottomSheet>
    </ListExistWrapper>
  );
};

const ListExistWrapper = styled.div`
  padding: 0 20px;
`;
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
const IconWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: fit-content;
`;
const MainMenu = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: fit-content;

  .menu-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    color: ${COLOR.WHITE};
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
  }
`;
export default ListExist;
