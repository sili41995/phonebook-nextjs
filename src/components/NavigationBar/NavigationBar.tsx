import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux';
import { PagePaths } from '@/constants';
import PrivateLinks from '@/components/PrivateLinks';
import PublicLinks from '@/components/PublicLinks';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { List, ListItem, NavContainer } from './NavigationBar.styled';

const Navigation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const pathname = usePathname();
  const contactsPagePath = `/${PagePaths.contactsPath}`;
  const aboutPagePath = `/${PagePaths.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <Link
            href={contactsPagePath}
            className={pathname === contactsPagePath ? 'active' : ''}
          >
            Contacts
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={aboutPagePath}
            className={pathname === aboutPagePath ? 'active' : ''}
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
