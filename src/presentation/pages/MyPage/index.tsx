import React from "react";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import NonMembers from "@components/MyPage/NonMembers";
import Members from "@components/MyPage/Members";

const MyPage = () => {
  const isLoggedin = true;
  return (
    <MyPageWrapper>
      <BackHeader text="내 정보" color="#191F28" />
      {isLoggedin ? <Members /> : <NonMembers />}
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  padding: 0 20px;
  height: 100%;
  background-color: ${COLOR.GRAY_50};
`;
export default MyPage;
