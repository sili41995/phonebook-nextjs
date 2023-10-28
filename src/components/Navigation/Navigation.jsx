'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import { pagesPath } from '@/constants';
import PrivateLinks from '@/components/PrivateLinks';
import PublicLinks from '@/components/PublicLinks';
import { usePathname } from 'next/navigation';
// import { pagesPath } from 'constants';
import { selectIsLoggedIn } from '@/redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const pathname = usePathname();
  const contactsPagePath = `/${pagesPath.contactsPath}`;
  const aboutPagePath = `/${pagesPath.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <Link
            href={contactsPagePath}
            className={pathname === contactsPagePath ? 'active' : false}
          >
            Contacts
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={aboutPagePath}
            className={pathname === aboutPagePath ? 'active' : false}
          >
            About
          </Link>
        </ListItem>
      </List>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;
