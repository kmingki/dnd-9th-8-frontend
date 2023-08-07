import React from "react";
import { styled } from "styled-components";
import Header from "@components/MainPage/components/Header";
import COLOR from "@styles/colors";
import ListExist from "@components/MainPage/ListExist";
import ListNotExist from "@components/MainPage/ListNotExist";

const MainPage = () => {
  // 데이터 유무에 따라 색상 바뀜
  const data = true;
  return (
    <MainPageWrapper data={data}>
      <Header data={data} />
      {data ? <ListExist /> : <ListNotExist />}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div<{ data: boolean }>`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    ${({ data }) => (data ? COLOR.GREEN_500 : COLOR.GRAY_50)} 0%,
    ${({ data }) => (data ? COLOR.GREEN_500 : COLOR.GRAY_50)} 30%,
    ${COLOR.GRAY_50} 30%,
    ${COLOR.GRAY_50} 100%
  );
`;

export default MainPage;
