import { ChangeEvent, ReactElement } from 'react';
import { FormTypes, InputTypes, IconBtnType } from '@/constants';
import { DefaultTheme } from 'styled-components/dist/types';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactElement;
  formType?: FormTypes;
  inputWrap?: boolean;
  autoFocus?: boolean;
  btnType?: IconBtnType;
  btnIcon?: ReactElement | boolean;
  accept?: string;
  altElem?: ReactElement;
  value?: string;
  defaultValue?: string;
  checked?: boolean;
  action?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  theme: DefaultTheme;
  formType?: FormTypes;
  checked?: boolean;
}
