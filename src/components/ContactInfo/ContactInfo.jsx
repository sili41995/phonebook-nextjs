'use client';

import { useTargetContact } from '@/hooks';
import { getAvatar, getContactInfo } from '@/utils';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Avatar,
  ListItem,
  List,
  Navigation,
} from './ContactInfo.styled';
import pagesPath from '@/constants/pagesPath';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ContactInfo = ({ children }) => {
  const targetContact = useTargetContact();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const currentPage = paths[paths.length - 1];

  const { name, role, avatar } = getContactInfo(targetContact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return (
    <>
      <Avatar src={userAvatar} alt={`${name} photo`} />
      <ContactTitle>
        <ContactName>{name}</ContactName>
        <ContactDesc>{role}</ContactDesc>
      </ContactTitle>
      <Navigation>
        <List>
          <ListItem>
            <Link
              href={pagesPath.contactPath}
              className={
                currentPage === pagesPath.contactPath ? 'active' : false
              }
            >
              Contact
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={pagesPath.aboutPath}
              className={currentPage === pagesPath.aboutPath ? 'active' : false}
            >
              About
            </Link>
          </ListItem>
        </List>
      </Navigation>
      {children}
    </>
  );
};

export default ContactInfo;
