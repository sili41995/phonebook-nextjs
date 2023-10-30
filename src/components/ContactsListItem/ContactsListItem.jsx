import { useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from '@/components/IconButton';
import { pagesPath, iconBtnType } from '@/constants';
import { getContactInfo } from '@/utils';
import { useDeleteContact } from '@/hooks';
import { selectIsLoading } from '@/redux/contacts/selectors';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import css from './ContactsListItem.module.css';
import Image from 'next/image';

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  const isLoading = useSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const searchParams = useSearchParams();
  const path = `/${pagesPath.contactDetailsPath}/${id}/${pagesPath.contactPath}?${searchParams}`;

  return (
    contact && (
      <li className={css.contactItem}>
        <Link className={css.contactLink} href={path}>
          <Image className={css.avatar} src={userAvatar} alt={name} />
          <div className={css.infoWrap}>
            <div>
              <p className={css.name}>{name}</p>
              <p className={css.role}>{role}</p>
            </div>
            <p className={css.phone}>{number}</p>
            <p className={css.email}>{email}</p>
          </div>
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
      </li>
    )
  );
};

export default ContactsListItem;
