import AddContactForm from '@/components/AddContactForm';
import ContactModalForm from '@/components/ContactModalForm';
import React from 'react';

export const metadata = {
  title: 'New contact',
  description: 'Page for adding new contact',
};

const AddContact = () => {
  return (
    <ContactModalForm>
      <AddContactForm />
    </ContactModalForm>
  );
};

export default AddContact;
