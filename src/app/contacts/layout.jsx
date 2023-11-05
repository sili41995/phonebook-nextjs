'use client';

import ContactsList from '@/components/ContactsList';
import UserProfile from '@/components/UserProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '@/redux/contacts/operations';
import PrivateRoute from '@/components/PrivateRoute';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <PrivateRoute>
      <UserProfile />
      <ContactsList />
      {children}
    </PrivateRoute>
  );
};

export default Layout;
