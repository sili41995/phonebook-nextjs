import { useTargetContact } from '@/hooks';
import { getAvatar, getContactInfo } from '@/utils';
import pagesPath from '@/constants/pagesPath';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import css from './ContactInfo.module.css';

const ContactInfo = ({ children }) => {
  const targetContact = useTargetContact();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const currentPage = paths[paths.length - 1];

  const { name, role, avatar } = getContactInfo(targetContact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return (
    <>
      <Image className={css.avatar} src={userAvatar} alt={`${name} photo`} />
      <div className={css.infoWrap}>
        <p className={css.name}>{name}</p>
        <p className={css.role}>{role}</p>
      </div>
      <nav className={css.nav}>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link
              href={pagesPath.contactPath}
              className={
                currentPage === pagesPath.contactPath ? css.activeLink : ''
              }
            >
              Contact
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              href={pagesPath.aboutPath}
              className={
                currentPage === pagesPath.aboutPath ? css.activeLink : ''
              }
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default ContactInfo;
