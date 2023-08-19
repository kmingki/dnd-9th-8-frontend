import { styled } from "styled-components";
import Color from '@styles/colors';
import COLOR from "@styles/colors";

const AddCheckItemWrapper = styled.button`
    all : unset;
    border : 2px solid #E9ECF0;
    height: 40px;
    border-radius: 8px;
    display : flex;
    align-items : center;
    gap: 9px;
    color: ${Color.GRAY_500};
    padding-left : 13px;
`;


const CheckItemContainer = styled.div<{ isChecked : boolean }>`
    height: 40px;
    border : 2px solid #E9ECF0;
    border-radius: 8px;
    display : flex;
    align-items : center;
    justify-content: space-between;
    background-color : ${({ isChecked }) => isChecked? `${Color.GRAY_100}` : `${Color.WHITE}`};
    margin-bottom: 10px;
`;

const CheckItemWrapper = styled.div`
    height: 40px;
    border-radius: 8px;
    display : flex;
    align-items : center;
`;

/*
const CheckItemWrapper = styled.button`
    all : unset;
    border : 0px;
    height: 40px;
    border : 1px solid ${Color.GRAY_200};
    border-radius: 8px;
    display : flex;
    align-items : center;
    justify-content: space-between;
`;
*/

const CheckBox = styled.label<{ checked: boolean }>`
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1.7px solid ${({ checked }) => (checked ? `${Color.MAIN_GREEN}` : `#E9ECF0`)};
    border-radius: 4px;
    background: ${({ checked }) => (checked && `${Color.MAIN_GREEN}`)};
    cursor: pointer;
    margin-left : 11px;

    display : flex;
    justify-content: center;
    align-items : center;
`;

const HiddenCheckbox  = styled.input`
    height: 16px;
    width: 16px;
    
    border-radius: 4px;
    
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;

`;

const Description = styled.div<{ isChecked : boolean }>`
    margin-left : 10px;
    font-weight: 500;
    font-size: 15px;
`;

const IconWrapper = styled.button`
    all : unset;
    border : 0px;
    padding-right: 8px;
`;

const InputWrapper = styled.input<{ isChecked : boolean }>`
    width:100%;
    border: none;
    background: transparent;
    &:focus {
        outline:none;
    }

    
    font-weight : 500;
    font-size : 15px;
    line-height : 15px;
    color: ${COLOR.GRAY_900};

    ${({ isChecked }) => isChecked && `text-decoration:line-through` };
    ${({ isChecked }) => isChecked ? `color: ${Color.GRAY_400}` : `color: ${Color.MAIN_BLACK}` };

`;


export {AddCheckItemWrapper, CheckItemContainer, CheckItemWrapper, CheckBox, HiddenCheckbox, Description, IconWrapper, InputWrapper};