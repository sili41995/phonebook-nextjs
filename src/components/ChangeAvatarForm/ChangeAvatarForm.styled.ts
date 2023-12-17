import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.greyColor};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  & label svg {
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.blueIconColor};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing()};
`;