import React from "react";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import COLOR from "@styles/colors";
import { Link } from "react-router-dom";

const Header = ({ data }: { data: boolean }) => {
  // 데이터 유무에 따라 색상 바뀜
  return (
    <HeaderWrapper>
      <Icon
        icon="Logo"
        color={data ? COLOR.WHITE : COLOR.GRAY_500}
        fill={data ? COLOR.WHITE : COLOR.GRAY_500}
      />
      <div className="user-side">
        <Icon
          icon="Folder"
          color={data ? COLOR.WHITE : COLOR.GRAY_500}
          fill={data ? COLOR.WHITE : COLOR.GRAY_500}
        />
        <Link to="/mypage">
          <Icon
            icon="User"
            color={data ? COLOR.WHITE : COLOR.GRAY_500}
            fill={data ? COLOR.WHITE : COLOR.GRAY_500}
          />
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
