import styled from 'styled-components';
import { IStyledProps } from './ModalForm.types';
import {
  setModalFormBackgroundColor,
  setModalFormBorderRadius,
  setModalFormBoxShadow,
  setModalFormMargin,
  setModalFormPadding,
  setModalFormWidth,
} from '@/utils';

export const Container = styled.div`
  display: flex;
  width: ${({ formType }: IStyledProps) => setModalFormWidth(formType)};
  flex-direction: column;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  padding: ${({ formType }: IStyledProps) => setModalFormPadding(formType)};
  background-color: ${({ formType }: IStyledProps) =>
    setModalFormBackgroundColor(formType)};
  border-radius: ${({ formType }: IStyledProps) =>
    setModalFormBorderRadius(formType)};
  box-shadow: ${({ formType }: IStyledProps) =>
    setModalFormBoxShadow(formType)};
  margin: ${({ formType }: IStyledProps) => setModalFormMargin(formType)};
`;
