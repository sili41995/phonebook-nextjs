import styled from 'styled-components';
import Link from 'next/link';
import { IStyledProps } from './GoBackLink.types';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }: IStyledProps) => (height ? `${height}px` : '')};
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ theme }) => theme.colors.btnBackgroundColor};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  border-color: transparent;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
