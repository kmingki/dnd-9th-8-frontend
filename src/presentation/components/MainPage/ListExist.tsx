import Spacing from "@components/common/Spacing";
import { styled } from "styled-components";
import ListMain from "./components/ListMain";
import Icon from "@components/common/Icon";
import TripList from "./components/TripList";
import useModal from "../../../application/hooks/useModal";
import Modal from "@components/common/Modal";
import COLOR from "@styles/colors";
import { useNavigate } from "react-router-dom";
import TemplateModal from "./components/TemplateModal";

const ListExist = () => {
  const navigate = useNavigate();
  const { isShowModal, toggleModal, closeModal } = useModal();
  const {
    isShowModal: isShowTemplate,
    toggleModal: toggleTemplate,
    closeModal: closeTemplate,
  } = useModal();

  const handleClickMenu = () => {
    toggleModal();
  };

  const handleClickCreateBtn = () => {
    navigate("/trip-create/1");
  };

  const handleClickLoadBtn = () => {
    closeModal();
    toggleTemplate();
  };
  return (
    <ListExistWrapper>
      <Spacing size={20} />
      <ListMain />
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
      <Modal isVisible={isShowTemplate} closeModal={closeTemplate}>
        <TemplateModal />
      </Modal>
    </ListExistWrapper>
  );
};

const ListExistWrapper = styled.div`
  padding: 0 20px;
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
