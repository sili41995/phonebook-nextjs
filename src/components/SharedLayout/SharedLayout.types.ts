import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components/dist/types';

export interface IProps {
  children: ReactNode;
}

export interface IStyledProps {
  isContactsPage?: boolean;
  theme: DefaultTheme;
}
