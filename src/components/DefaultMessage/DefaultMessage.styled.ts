import styled from 'styled-components';

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: var(--font-jua);
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
