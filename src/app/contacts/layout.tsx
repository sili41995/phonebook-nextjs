'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectToken } from '@/redux/auth/selectors';
import { fetchContacts } from '@/redux/contacts/operations';
import PrivateRoute from '@/components/PrivateRoute';
import Loader from '@/components/Loader';
import UserProfile from '@/components/UserProfile';
import ContactsContainer from '@/components/ContactsContainer';
import { ICurrentUser } from '@/types/types';
import { FetchStatuses } from '@/constants';
import { selectIsLoaded } from '@/redux/contacts/selectors';
import contactsServiceApi from '@/service/contactsServiceApi';
import { toasts } from '@/utils';

const { idle, pending, resolved, rejected } = FetchStatuses;

const Layout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ICurrentUser | null>(null);
  const [fetchUserStatus, setFetchUserStatus] = useState<FetchStatuses>(
    () => idle
  );
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const isLoadedContacts = useAppSelector(selectIsLoaded);
  const isLoadingUser = fetchUserStatus === pending;
  const isLoading = isLoadingUser || !isLoadedContacts;
  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const getUser = async () => {
      setFetchUserStatus(pending);
      try {
        const user = await contactsServiceApi.refreshUser();
        setUser(user);
        setFetchUserStatus(resolved);
      } catch (error) {
        if (error instanceof Error) {
          !error.message.includes('jwt') && toasts.errorToast(error.message);
          setFetchUserStatus(rejected);
        }
      }
    };

    getUser();
  }, [token]);

  return (
    <PrivateRoute>
      <>
        <UserProfile user={user} />
        <ContactsContainer quantity={6} />
        {children}
      </>
    </PrivateRoute>
  );
};

export default Layout;
