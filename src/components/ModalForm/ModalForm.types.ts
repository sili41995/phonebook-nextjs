import { ReactNode } from 'react';
import { FormTypes } from '@/constants';
import { DefaultTheme } from 'styled-components/dist/types';

export interface IProps {
  children: ReactNode;
  formType?: FormTypes;
}

export interface IStyledProps {
  formType?: FormTypes;
  theme: DefaultTheme;
}
