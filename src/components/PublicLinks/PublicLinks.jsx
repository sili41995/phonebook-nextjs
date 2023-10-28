// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import { List, ListItem } from './PublicLinks.styled';
import { pagesPath } from '@/constants';

const PublicLinks = () => {
  const registerPagePath = `/${pagesPath.registerPath}`;
  const loginPagePath = `/${pagesPath.loginPath}`;

  return (
    <List>
      <ListItem>
        <Link href={registerPagePath}>Sign up</Link>
      </ListItem>
      <ListItem>
        <Link href={loginPagePath}>Log in</Link>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
