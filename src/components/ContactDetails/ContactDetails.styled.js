import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing(28)};
`;
