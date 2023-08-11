import React from "react";
import Icon from "@components/common/Icon";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";

const TemplateExist = ({ isEdit }: { isEdit: boolean }) => {
  // isEdit -> true면 편집 중이므로 헤더에는 "삭제" 버튼
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

  return (
    <TemplateExistWrapper>
      <Spacing size={15} />
      <TripWrapper>
        {templateData.map(
          (
            template: { icon: string; name: string; range: string },
            index: number
          ) => (
            <div className="template-container" key={index}>
              <div className="template-inner">
                <Icon icon={template.icon} />
                <div className="trip-info">
                  <div className="trip-name">{template.name}</div>
                  <div className="trip-range">{template.range}</div>
                </div>
              </div>
              {isEdit && (
                <div className="check-box">
                  <Icon icon="UnCheckedBox" />
                </div>
              )}
            </div>
          )
        )}
      </TripWrapper>
    </TemplateExistWrapper>
  );
};

const TemplateExistWrapper = styled.div``;
const TripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .template-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 14px 12px;
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
export default TemplateExist;
