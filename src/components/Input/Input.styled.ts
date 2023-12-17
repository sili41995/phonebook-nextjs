import {
  setInputMaxWidth,
  setInputHeight,
  setInputBorderColor,
  setInputFilter,
  setInputBorderRadius,
  setInputPadding,
  setInputFontColor,
  setInputFontSize,
  setInputHoverEffect,
} from '@/utils';
import { IStyledProps } from './Input.types';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.greyColor};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: ${({ formType }: IStyledProps) => setInputMaxWidth(formType)};
  height: ${({ formType }: IStyledProps) => setInputHeight(formType)};
  background-color: transparent;
  border: 1px solid
    ${({ formType }: IStyledProps) => setInputBorderColor(formType)};
  border-radius: ${({ formType }: IStyledProps) =>
    setInputBorderRadius(formType)};
  filter: ${({ formType }: IStyledProps) => setInputFilter(formType)};
  padding: ${({ formType }: IStyledProps) => setInputPadding(formType)};
  font-family: var(--font-inter);
  color: ${({ formType }: IStyledProps) => setInputFontColor(formType)};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ${({ formType }: IStyledProps) => setInputFontSize(formType)};
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ formType }: IStyledProps) =>
      setInputHoverEffect(formType)};
  }
  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    position: fixed;
    transform: scale(0);
  }
  &:has([type='checkbox']) svg {
    width: ${({ formType }: IStyledProps) => setInputHeight(formType)};
    height: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    border: 1px solid;
    border-color: ${({ formType, checked }: IStyledProps) =>
      checked ? 'transparent' : setInputBorderColor(formType)};
    border-radius: ${({ formType }: IStyledProps) =>
      setInputBorderRadius(formType)};
    background-color: ${({ theme, checked }: IStyledProps) =>
      checked ? theme.colors.otherColor : 'transparent'};
    color: ${({ theme, checked }: IStyledProps) =>
      checked ? theme.colors.whiteColor : 'transparent'};
    cursor: pointer;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc},
      border-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    }
  }
`;
