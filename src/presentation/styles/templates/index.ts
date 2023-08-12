import { styled } from "styled-components";
import COLOR from "@styles/colors";

const DefaultTemplate = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color:#F6F7F9;
`;

const BlueTemplate = styled.div`
  padding: 0 20px;  
  height: 100%;
  
  background-color: #F5F9FC;

`;

const GreyTemplate = styled.div`
  padding: 0 20px;  
  height: 100%;
  background-color: ${COLOR.GRAY_50};

`;

export { DefaultTemplate, BlueTemplate, GreyTemplate};