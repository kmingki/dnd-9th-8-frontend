import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Spacing from "@components/common/Spacing";
import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "@styles/colors";
import BackHeader from "@components/common/BackHeader";

const DoubleCheckPage = () => {
   
    const onClickExit = () => {

    }

    return (
        <Container>
            <BackHeaderWrapper>
                <div className="text">더블체크</div>
                <Icon icon="CloseOutlined" fill={COLOR.MAIN_BLACK} onClick={onClickExit} />
            </BackHeaderWrapper>
        </Container>
    );
  };


const Container = styled.div`
    padding: 0 20px;  
    height: 100%;
    background-color: ${COLOR.GRAY_50};
`;

const BackHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;

  .text {
    flex-grow: 1;
    text-align: center;
  }
  .emptySpace {
    width: 24px;
    height: 25px;
    visibility: hidden;
  }
`;



export default DoubleCheckPage;
