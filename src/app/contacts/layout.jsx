'use client';

import ContactsList from '@/components/ContactsList';
import UserProfile from '@/components/UserProfile';

const Layout = ({ children }) => {
  return (
    <>
      <UserProfile />
      <ContactsList />
      {children}
    </>
  );
};

export default Layout;
