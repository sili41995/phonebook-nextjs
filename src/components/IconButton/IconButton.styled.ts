import { setButtonColor, setIconFill, setIconHoverEffect } from '@/utils';
import { IStyledProps } from './IconButton.types';
import styled from 'styled-components';

export const Button = styled.button`
  z-index: 10;
  position: ${({ position }: IStyledProps) => position};
  top: ${({ top }: IStyledProps) => (top === 'center' ? '50%' : `${top}px`)};
  right: ${({ right }: IStyledProps) => `${right}px`};
  transform: translateY(
    ${({ top }: IStyledProps) => (top === 'center' ? '-50%' : '')}
  );
  display: flex;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  justify-content: center;
  align-items: center;
  min-width: ${({ width }: IStyledProps) => `${width}px`};
  height: ${({ height }: IStyledProps) => (height ? `${height}px` : '')};
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ btnType }: IStyledProps) => setButtonColor(btnType)};
  border-color: transparent;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme, inputWrap }: IStyledProps) =>
      !inputWrap && theme.shadows.primaryShadow};
  }
  & svg {
    color: ${({ btnType }: IStyledProps) => setIconFill(btnType)};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
  & svg:hover,
  & svg:focus {
    color: ${({ btnType, inputWrap }: IStyledProps) =>
      inputWrap && setIconHoverEffect(btnType)};
  }
`;
