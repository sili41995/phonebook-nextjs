import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  & a {
    display: flex;
    gap: ${({ theme }) => theme.spacing(3)};
    align-items: center;
    white-space: nowrap;
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.primaryBorderRadius}px`};
    background-color: ${({ theme }) => theme.colors.otherLinkColor};
    padding: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: var(--font-inter);
    font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    }
  }
`;
