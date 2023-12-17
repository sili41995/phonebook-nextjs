import ContactDetails from '@/components/ContactDetails';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <ContactDetails>{children}</ContactDetails>
    </>
  );
};

export default Layout;
