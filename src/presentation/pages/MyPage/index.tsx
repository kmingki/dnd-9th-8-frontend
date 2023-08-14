import React from "react";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import useGetMyInfo from "../../../application/hooks/queries/user/useGetMyInfo";
import { useNavigate } from "react-router-dom";
import useModal from "../../../application/hooks/useModal";
import Spacing from "@components/common/Spacing";
import Icon from "@components/common/Icon";
import Button from "@components/common/Button";
import Text from "@components/common/Text";
import MyPageButton from "@components/MyPage/components/MyPageButton";
import Modal from "@components/common/Modal";
import LogoutModal from "@components/MyPage/components/LogoutModal";
import LeaveModal from "@components/MyPage/components/LeaveModal";

const MyPage = () => {
  const navigate = useNavigate();
  const { data } = useGetMyInfo();
  const {
    isShowModal: isShowLeaveModal,
    toggleModal: toggleLeaveModal,
    closeModal: closeLeaveModal,
  } = useModal();
  const {
    isShowModal: isShowLogoutModal,
    toggleModal: toggleLogoutModal,
    closeModal: closeLogoutModal,
  } = useModal();

  const handleClickLeave = () => {
    toggleLeaveModal();
  };
  const handleClickLogout = () => {
    toggleLogoutModal();
  };

  const handleClickEditInfo = () => {
    navigate("/mypage/edit");
  };
  return (
    <>
      {data && (
        <MyPageWrapper>
          <BackHeader text="내 정보" color="#191F28" />
          <MembersWrapper>
            <Spacing size={38} />
            <InfoWrapper>
              <div className="icon-wrapper">
                <Icon icon="Profile" width={80} height={80} />
                <div className="edit-icon">
                  <Icon icon="EditProfile" onClick={handleClickEditInfo} />
                </div>
              </div>
              <div className="info-text">
                <div>
                  <span className="name">{data.data.nickname}</span>님
                </div>
                <span className="email">{data.data.email}</span>
              </div>
            </InfoWrapper>
            <Spacing size={23} />
            <Button
              radius={12}
              padding="24px 30px"
              background={COLOR.WHITE}
              border="none"
              onClick={() => {}}
            >
              <div className="template-button">
                <Text
                  text="생성된 여행 템플릿"
                  fontSize={20}
                  fontWeight={500}
                  lineHeight="20px"
                  color={COLOR.GRAY_900}
                />
                |
                <Text
                  text="00개"
                  fontSize={22}
                  fontWeight={500}
                  lineHeight="22px"
                  color={COLOR.MAIN_GREEN}
                />
              </div>
            </Button>
            <Spacing size={21} />
            <MyPageButton text="로그아웃" onClick={handleClickLogout} />
            <LeaveButton onClick={handleClickLeave}>탈퇴하기</LeaveButton>

            <Modal isVisible={isShowLogoutModal} closeModal={closeLogoutModal}>
              <LogoutModal closeModal={closeLogoutModal} />
            </Modal>
            <Modal isVisible={isShowLeaveModal} closeModal={closeLeaveModal}>
              <LeaveModal closeModal={closeLeaveModal} />
            </Modal>
          </MembersWrapper>
        </MyPageWrapper>
      )}
    </>
  );
};

const MyPageWrapper = styled.div`
  padding: 0 20px;
  height: 100%;
  background-color: ${COLOR.GRAY_50};
`;
const MembersWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .template-button {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: center;

    color: ${COLOR.GRAY_400};
    font-size: 30px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  .icon-wrapper {
    position: relative;
    .edit-icon {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .info-text {
    display: flex;
    flex-direction: column;
    gap: 10px;

    color: ${COLOR.GRAY_900};
    font-size: 22px;
    font-weight: 500;
    line-height: 22px;

    .name {
      font-size: 30px;
      line-height: 30px;
      margin-right: 6px;
    }
    .email {
      color: ${COLOR.GRAY_500};
      font-size: 18px;
      line-height: 18px;
    }
  }
`;
const LeaveButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 20px;

  outline: none;
  border: none;
  background-color: transparent;

  color: ${COLOR.GRAY_600};
  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
`;
export default MyPage;
