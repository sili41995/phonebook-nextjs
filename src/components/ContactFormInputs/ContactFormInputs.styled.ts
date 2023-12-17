import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxTitle = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;
