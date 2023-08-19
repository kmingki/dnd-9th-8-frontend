import React, { useState } from "react";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import BackHeader from "@components/common/BackHeader";
import Spacing from "@components/common/Spacing";
import { useNavigate } from "react-router-dom";
import useEditProfileImage from "../../../application/hooks/queries/user/useEditProfileImage";
import useGetMyInfo from "@hooks/queries/user/useGetMyInfo";
import Text from "@components/common/Text";
import { profileData } from "../../../application/data/profileData";
import Icon from "@components/common/Icon";
import Button from "@components/common/Button";

const EditMyInfoPage = () => {
  const mutate = useEditProfileImage();
  const navigate = useNavigate();
  const { data: userData } = useGetMyInfo();
  const [nickName, setNickName] = useState(userData.nickname);
  const [isError, setIsError] = useState(false);

  const [currProfileIdx, setCurrProfileIdx] = useState(
    profileData.indexOf(userData.profileImageUrl)
  );

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length > 5) {
      value = value.substring(0, 5);
    }

    const pattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
    if (value === "") {
      setIsError(false);
    } else if (pattern.test(value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    setNickName(value);
  };

  return (
    <EditMyInfoPageWrapper>
      <BackHeader text="프로필 편집" color="#191F28" />
      <Spacing size={46} />
      <div className="profile-wrapper">
        <img src={userData.profileImageUrl} alt="프로필 이미지" />
      </div>
      <Spacing size={34} />
      <NameWrapper>
        <div className="name">
          <input type="text" value={nickName} onChange={handleChangeName} />
        </div>
        <Text
          text={`${nickName.length}/5`}
          color={COLOR.GRAY_500}
          fontSize={16}
          fontWeight={500}
          lineHeight="140%"
        />
      </NameWrapper>
      <Spacing size={34} />
      <ProfileImageWrapper>
        {profileData.map((url, index) => (
          <div className="profile-img" key={url}>
            <img src={url} alt="프로필 이미지" />
            <div>
              {currProfileIdx === index ? (
                <Icon icon="Check" />
              ) : (
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    border: `1.5px solid ${COLOR.GRAY_300}`,
                    borderRadius: "100%",
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </ProfileImageWrapper>
      <Spacing size={40} />
      <ButtonWrapper>
        <Button
          border="none"
          background="#F2F4F6"
          radius={10}
          onClick={() => navigate(-1)}
          padding="15px 0"
        >
          <Text
            text="취소"
            color="#505967"
            fontSize={17}
            fontWeight={600}
            lineHeight="normal"
          />
        </Button>
        <Button
          border="none"
          background={COLOR.MAIN_GREEN}
          radius={10}
          onClick={() => {}}
          padding="15px 0"
        >
          <Text
            text="변경하기"
            color={COLOR.WHITE}
            fontSize={17}
            fontWeight={600}
            lineHeight="normal"
          />
        </Button>
      </ButtonWrapper>
    </EditMyInfoPageWrapper>
  );
};
const EditMyInfoPageWrapper = styled.div`
  background-color: ${COLOR.WHITE};
  height: 100%;
  padding: 0 20px;

  .profile-wrapper {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 100%;

    img {
      width: 120px;
      height: 120px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${COLOR.MAIN_GREEN};
  padding-bottom: 5px;

  .name {
    input {
      color: ${COLOR.GRAY_900};
      font-size: 20px;
      font-weight: 600;
      line-height: 140%;
      border: none;
      outline: none;
    }
  }
`;
const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .profile-img {
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default EditMyInfoPage;
