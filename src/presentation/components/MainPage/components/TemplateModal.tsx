import React from "react";
import Spacing from "@components/common/Spacing";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import Icon from "@components/common/Icon";

const TemplateModal = () => {
  const templateData = [
    { icon: "Family", name: "가족여행(양양)", range: "9월 18일 ~ 9월 21일" },
    { icon: "Beach", name: "코타키나발루", range: "9월 18일 ~ 9월 21일" },
  ];
  return (
    <TemplateModalWrapper>
      <Title>저장된 템플릿</Title>
      <Spacing size={27} />
      <TemplateList>
        {templateData.map(
          (template: { icon: string; name: string; range: string }) => (
            <div className="template-container" key={template.name}>
              <Icon icon={template.icon} />
              <div className="trip-info">
                <div className="trip-name">{template.name}</div>
                <div className="trip-range">{template.range}</div>
              </div>
            </div>
          )
        )}
      </TemplateList>
    </TemplateModalWrapper>
  );
};

const TemplateModalWrapper = styled.div`
  width: 100%;
  padding: 22px 16px;
  margin: 0 20px;

  border-radius: 10px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 0px 9.899947166442871px 0px rgba(133, 133, 133, 0.38);
`;
const Title = styled.div`
  text-align: center;
  color: ${COLOR.GRAY_900};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;
const TemplateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .template-container {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;

    padding: 14px 12px;
    border-radius: 10px;
    border: 1px solid #cacaca;
    background: ${COLOR.WHITE};

    .trip-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
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
`;
export default TemplateModal;
