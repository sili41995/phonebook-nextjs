'use client';

import { useSelector } from 'react-redux';
import { pagesPath } from '@/constants';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { redirect } from 'next/navigation';

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    redirect(pagesPath.contactsPath);
  }

  return children;
};

export default RestrictedRoute;
