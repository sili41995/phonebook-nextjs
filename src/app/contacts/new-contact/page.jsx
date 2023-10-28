import AddContactForm from '@/components/AddContactForm';
import ContactModalForm from '@/components/ContactModalForm';
import React from 'react';

const AddContact = () => {
  return (
    <ContactModalForm>
      <AddContactForm />
    </ContactModalForm>
  );
};

export default AddContact;
