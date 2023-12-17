import { DefaultTheme } from 'styled-components';

export interface IProps {
  quantity: number;
  step?: number;
  itemsQuantity: number;
}

export interface IStyledProps {
  currentPage: number;
  page: number;
  step: number;
  theme: DefaultTheme;
}
