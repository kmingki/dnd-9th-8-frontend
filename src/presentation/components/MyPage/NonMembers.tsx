import React from "react";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import Button from "@components/common/Button";
import { useNavigate } from "react-router-dom";

const NonMembers = () => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };
  return (
    <NonMembersWrapper>
      <Icon icon="Profile" />
      <Spacing size={33} />
      <div className="text">
        로그인하지 않은 상태에요.
        <br />
        로그인 후 이용해주세요.
      </div>
      <Spacing size={57} />
      <Button
        width="fit-content"
        radius={12}
        padding="15px 46px"
        background={COLOR.MAIN_GREEN}
        color={COLOR.WHITE}
        border="none"
        onClick={handleClickLogin}
      >
        로그인하러 가기
      </Button>
    </NonMembersWrapper>
  );
};

const NonMembersWrapper = styled.div`
  position: relative;
  top: 15%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    text-align: center;
    color: ${COLOR.GRAY_700};
    font-size: 16px;
    font-weight: 600;
    line-height: 132%;
  }
`;
export default NonMembers;
