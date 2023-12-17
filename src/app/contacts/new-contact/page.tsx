import AddContactForm from '@/components/AddContactForm';
import ModalForm from '@/components/ModalForm';
import React from 'react';

export const metadata = {
  title: 'New contact',
  description: 'Page for adding new contact',
};

const AddContact = () => {
  return (
    <ModalForm>
      <AddContactForm />
    </ModalForm>
  );
};

export default AddContact;
