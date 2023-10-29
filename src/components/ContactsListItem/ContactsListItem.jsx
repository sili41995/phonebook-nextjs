'use client';

import { useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from '@/components/IconButton';
import { pagesPath, iconBtnType } from '@/constants';
import { getContactInfo } from '@/utils';
import { useDeleteContact } from '@/hooks';
import {
  Email,
  Avatar,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
} from './ContactsListItem.styled';
import { selectIsLoading } from '@/redux/contacts/selectors';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  const isLoading = useSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const searchParams = useSearchParams();
  const path = `/${pagesPath.contactDetailsPath}/${id}/${pagesPath.contactPath}?${searchParams}`;

  return (
    contact && (
      <Item>
        <Link href={path}>
          <Avatar src={userAvatar} alt={name} />
          <ContactInfo>
            <Person>
              <Name>{name}</Name>
              <Role>{role}</Role>
            </Person>
            <Phone>{number}</Phone>
            <Email>{email}</Email>
          </ContactInfo>
        </Link>
        <IconButton
          top={0}
          right={0}
          position='absolute'
          disabled={isLoading}
          btnType={iconBtnType.deleteTransparent}
          width={44}
          height={35}
          onBtnClick={() => {
            deleteContact(id);
          }}
        >
          <AiOutlineDelete />
        </IconButton>
      </Item>
    )
  );
};

export default ContactsListItem;