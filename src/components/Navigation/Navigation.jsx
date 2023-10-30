import Link from 'next/link';
import { useSelector } from 'react-redux';
import { pagesPath } from '@/constants';
import PrivateLinks from '@/components/PrivateLinks';
import PublicLinks from '@/components/PublicLinks';
import { usePathname } from 'next/navigation';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const pathname = usePathname();
  const contactsPagePath = `/${pagesPath.contactsPath}`;
  const aboutPagePath = `/${pagesPath.aboutPath}`;

  return (
    <nav className={css.nav}>
      <ul className={css.menu}>
        <li className={css.menuItem}>
          <Link
            href={contactsPagePath}
            className={pathname === contactsPagePath ? 'active' : false}
          >
            Contacts
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link
            href={aboutPagePath}
            className={pathname === aboutPagePath ? 'active' : false}
          >
            About
          </Link>
        </li>
      </ul>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </nav>
  );
};

export default Navigation;
