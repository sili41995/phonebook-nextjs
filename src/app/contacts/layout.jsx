'use client';

import ContactsList from '@/components/ContactsList';
import UserProfile from '@/components/UserProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '@/redux/contacts/operations';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      <UserProfile />
      <ContactsList />
      {children}
    </>
  );
};

export default Layout;
