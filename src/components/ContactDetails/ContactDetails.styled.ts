import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  align-items: center;
  flex-grow: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ManipulationButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;
