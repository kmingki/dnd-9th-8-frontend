import Spacing from "@components/common/Spacing";
import { styled } from "styled-components";
import ListMain from "./components/ListMain";
import Icon from "@components/common/Icon";
import { useState } from "react";
import TripList from "./components/TripList";

const ListExist = () => {
  const [clicked, setClicked] = useState(false);
  const handleClickMenu = () => {
    setClicked((prev) => !prev);
  };
  return (
    <ListExistWrapper clicked={clicked}>
      <Spacing size={20} />
      <ListMain />
      <Spacing size={28} />
      <TripList />
      <IconWrapper>
        {clicked ? (
          <Icon icon="XButton" onClick={handleClickMenu} />
        ) : (
          <Icon icon="CreateButton" onClick={handleClickMenu} />
        )}
      </IconWrapper>
    </ListExistWrapper>
  );
};

const ListExistWrapper = styled.div<{ clicked: boolean }>`
  padding: 0 20px;
  height: 100vh;
  background-color: ${({ clicked }) =>
    clicked ? "rgba(66, 66, 66, 0.63)" : "transparent"};
`;
const IconWrapper = styled.div`
  width: fit-content;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;
export default ListExist;
