import Link from 'next/link';
import { PagePaths } from '@/constants';
import { List, ListItem } from './PublicLinks.styled';

const PublicLinks = () => {
  const signUpPagePath = `/${PagePaths.signUpPath}`;
  const signInPagePath = `/${PagePaths.signInPath}`;

  return (
    <List>
      <ListItem>
        <Link href={signUpPagePath}>Sign up</Link>
      </ListItem>
      <ListItem>
        <Link href={signInPagePath}>Sign in</Link>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
