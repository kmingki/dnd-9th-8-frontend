import React from "react";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { Link } from "react-router-dom";

const Header = ({ profile }: { profile: string }) => {
  return (
    <HeaderWrapper>
      <Icon icon="Logo" fill={COLOR.GRAY_400} />
      <div className="user-side">
        <Link to="/my-template">
          <Icon icon="Folder" fill={COLOR.GRAY_400} />
        </Link>
        <Link to="/mypage">
          <img src={profile} width={25} height={25} />
        </Link>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 30px 20px 10px;
  background-color: transparent;
  .user-side {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;
export default Header;
