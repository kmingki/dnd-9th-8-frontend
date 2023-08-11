import React, { useState } from "react";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import Button from "@components/common/Button";

const TemplateModal = ({ setClicked }: any) => {
  const templateData = [
    { icon: "Family", name: "가족여행(양양)", range: "9월 18일 ~ 9월 21일" },
    { icon: "Beach", name: "코타키나발루", range: "9월 18일 ~ 9월 21일" },
    { icon: "Family", name: "가족여행(양양)", range: "9월 18일 ~ 9월 21일" },
    { icon: "Beach", name: "코타키나발루", range: "9월 18일 ~ 9월 21일" },
    { icon: "Family", name: "가족여행(양양)", range: "9월 18일 ~ 9월 21일" },
    { icon: "Beach", name: "코타키나발루", range: "9월 18일 ~ 9월 21일" },
    { icon: "Family", name: "가족여행(양양)", range: "9월 18일 ~ 9월 21일" },
    { icon: "Beach", name: "코타키나발루", range: "9월 18일 ~ 9월 21일" },
  ];
  const [clickedIdx, setClickedIdx] = useState<number>(); // 템플릿 내 여행 선택을 위한 임시 값

  return (
    <TemplateModalWrapper>
      <Text
        text="템플릿 선택"
        fontSize={20}
        fontWeight={600}
        lineHeight="24px"
        color={COLOR.GRAY_900}
      />
      <Spacing size={21} />
      <TemplateList>
        {templateData.map(
          (
            template: { icon: string; name: string; range: string },
            index: number
          ) => (
            <div className="template-container" key={index}>
              <Button
                width="100%"
                radius={12}
                background={COLOR.WHITE}
                border="1px solid #E0E3E8"
                onClick={() => setClickedIdx(index)}
                clicked={clickedIdx === index ? "true" : "false"}
                customstyle="border: 1.5px solid #00B488"
                padding="14px 12px"
              >
                <div className="template-inner">
                  <Icon icon={template.icon} />
                  <div className="trip-info">
                    <div className="trip-name">{template.name}</div>
                    <div className="trip-range">{template.range}</div>
                  </div>
                </div>
              </Button>
            </div>
          )
        )}
      </TemplateList>
      <Spacing size={30} />
      <Button
        width="100%"
        radius={12}
        padding="20px"
        background={COLOR.MAIN_GREEN}
        border="none"
        onClick={() => setClicked(true)}
      >
        <Text
          text="선택하기"
          color={COLOR.WHITE}
          fontSize={18}
          fontWeight={600}
          lineHeight="18px"
        />
      </Button>
    </TemplateModalWrapper>
  );
};

const TemplateModalWrapper = styled.div`
  background-color: ${COLOR.WHITE};
`;

const TemplateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-height: 360px;
  overflow-y: auto;

  .template-container {
    border: none;
    border-radius: 8px;
    background: ${COLOR.WHITE};

    .template-inner {
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: center;
      .trip-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        text-align: left;
        .trip-name {
          color: ${COLOR.BASE_100};
          font-size: 16px;
          font-weight: 700;
          line-height: 140%;
        }
        .trip-range {
          color: ${COLOR.BASE_80};
          font-size: 14px;
          font-weight: 600;
          line-height: 145%;
        }
      }
    }
  }
`;
export default TemplateModal;
