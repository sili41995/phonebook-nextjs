'use client';

import { FC } from 'react';
import { PagePaths } from '@/constants';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { redirect, useRouter } from 'next/navigation';
import { IProps } from './RestrictedRoute.types';

export const RestrictedRoute: FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const router = useRouter();

  if (isLoggedIn) {
    redirect(PagePaths.contactsPath);
  }

  return children;
};

export default RestrictedRoute;
