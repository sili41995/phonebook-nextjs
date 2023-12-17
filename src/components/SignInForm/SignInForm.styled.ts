import Image from 'next/image';
import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.titleFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: var(--font-inter);
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
`;

export const Img = styled(Image)`
  align-self: center;
  border-radius: 50%;
`;
