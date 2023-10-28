'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsList from '@/components/ContactsList';
import UserProfile from '@/components/UserProfile';
import { fetchContacts } from '@/redux/contacts/operations';

const ContactsPage = () => {
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
    </>
  );
};

export default ContactsPage;
