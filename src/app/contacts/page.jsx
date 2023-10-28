'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '@/redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);
};

export default ContactsPage;
