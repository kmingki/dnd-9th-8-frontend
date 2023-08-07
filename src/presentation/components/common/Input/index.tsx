import React from "react";
import { css, styled } from "styled-components";
import Icon from "../Icon";
import COLOR from "@styles/colors";

type InputType = {
  placeholder: string;
  onChange: any;
  type?: string;
  value: string;
  padding?: string;
  textCount?: boolean;
  maxLength?: number;
  error?: boolean;
};

const Input = ({
  placeholder,
  onChange,
  type,
  value,
  padding,
  textCount,
  maxLength,
  error,
}: InputType) => {
  return (
    <InputWrapper>
      <InputContainer>
        <CustomInput
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          padding={padding}
          maxLength={maxLength}
          error={error}
        />
        {value.length >= 2 && !error && (
          <div className="checked-icon">
            <Icon icon="InputChecked" />
          </div>
        )}
      </InputContainer>

      {textCount && maxLength && (
        <TextCount>{`${value.length}/${maxLength}`}</TextCount>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputContainer = styled.div`
  position: relative;

  .checked-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

const CustomInput = styled.input<{ padding?: string; error?: boolean }>`
  width: 100%;
  height: 57px;
  padding: 16.5px 15px;

  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid ${COLOR.GRAY_400};
  outline: none;
  background-color: ${COLOR.WHITE};

  color: ${COLOR.GRAY_800};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  &::placeholder {
    color: ${COLOR.GRAY_500};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  &:focus {
    outline: 1px solid ${COLOR.MAIN_GREEN};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${COLOR.WARNING};
      &:focus {
        outline: none;
      }
    `}
`;

const TextCount = styled.div`
  color: ${COLOR.GRAY_500};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
export default Input;
