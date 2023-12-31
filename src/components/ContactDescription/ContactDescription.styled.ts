import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: justify;
`;
